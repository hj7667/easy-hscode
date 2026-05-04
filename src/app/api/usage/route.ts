import { adminDb } from "@/lib/firebaseAdmin";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/lib/authOptions";

export async function GET() {
    const session = await getServerSession(authOptions);  // authOptions 추가
    if (!session?.user?.email) {
        return NextResponse.json({ count: 0 });
    }

    const doc = await adminDb
        .collection("usage")
        .doc(session.user.email)
        .get();

    const today = new Date().toISOString().split("T")[0];
    const data = doc.data();

    if (!data || data.date !== today) {
        return NextResponse.json({ count: 0 });
    }

    return NextResponse.json({ count: data.count });
}

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { keyword } = await req.json();
    const today = new Date().toISOString().split("T")[0];
    const email = session.user.email;

    const usageRef = adminDb.collection("usage").doc(email);
    const doc = await usageRef.get();
    const data = doc.data();

    let newCount = 1;
    if (data && data.date === today) {
        newCount = (data.count || 0) + 1;
    }

    await usageRef.set({ date: today, count: newCount });

    await adminDb.collection("search_logs").add({
        email,
        keyword,
        timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ count: newCount });
}