"use client";
import { useEffect } from "react";
export default function EnvProbe() {
  useEffect(() => {
    console.log("API key prefix:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.slice(0,6));
  }, []);
  return null;
}