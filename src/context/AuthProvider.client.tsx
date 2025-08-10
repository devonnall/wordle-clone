"use client";
import { PropsWithChildren } from "react";
import { AuthProvider } from "./AuthContext";
export default function AuthProviderClient({ children }: PropsWithChildren) {
  return <AuthProvider>{children}</AuthProvider>;
}