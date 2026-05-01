import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

export const adminDb = admin.firestore();

export const saveUserToFirestore = async (user: any) => {
  const userRef = adminDb.collection('users').doc(user.id);
  const userSnap = await userRef.get();
  
  if (!userSnap.exists) {
    await userRef.set({
      uid: user.id,
      email: user.email,
      name: user.name,
      photoURL: user.image,
      isPremium: false,
      totalSearches: 0,
      createdAt: new Date().toISOString()
    });
  }
};