"use client";
import { getAuth } from "firebase/auth";
import { getFirebaseApp } from "./firebaseConfig";

let _auth: ReturnType<typeof getAuth> | undefined;
export function getClientAuth() {
  return (_auth ??= getAuth(getFirebaseApp()));
}