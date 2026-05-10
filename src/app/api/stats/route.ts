import { adminDb } from "@/lib/firebaseAdmin";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const snapshot = await adminDb.collection("search_logs").count().get();
    console.log("snapshot", snapshot);
    return NextResponse.json({ count: snapshot.data().count });
  } catch (e) {
    return NextResponse.json({ count: 0 });
  }
}