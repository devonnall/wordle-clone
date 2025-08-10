"use client";
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";

let _app: FirebaseApp | undefined;

export function getFirebaseApp(): FirebaseApp {
  if (_app) return _app;
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_BUCKET!, // see note below
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  };
  _app = getApps().length ? getApp() : initializeApp(config);
  return _app;
}