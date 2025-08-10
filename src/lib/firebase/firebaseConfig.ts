"use client";
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";

let _app: FirebaseApp | undefined;

export function getFirebaseApp(): FirebaseApp {
  if (_app) return _app;

  // DIRECT references so Next can inline at build-time
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  } as const;

  // Optional: runtime guard (still uses direct refs)
  if (!config.apiKey) {
    throw new Error("Missing NEXT_PUBLIC_FIREBASE_API_KEY in this deployment");
  }

  _app = getApps().length ? getApp() : initializeApp(config);
  return _app;
}