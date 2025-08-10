"use client";
import { getAuth, type Auth } from "firebase/auth";
import { getFirebaseApp } from "./firebaseConfig";

let _auth: Auth | undefined;

export function getClientAuth(): Auth {
  if (_auth) return _auth;
  _auth = getAuth(getFirebaseApp());
  return _auth;
}