// app/ClientProviders.tsx (CLIENT)
"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/ui/ModeToggle";
import OnThisPage from "@/components/OnThisPage";

function EnvProbe() {
    useEffect(() => {
      console.log("API key prefix:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.slice(0, 6));
    }, []);
    return null;
  }

// Wrap the provider that touches Firebase Web SDK:
const AuthProviderNoSSR = dynamic(() => import("@/context/AuthProvider.client"), {
  ssr: false,
});

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <EnvProbe />
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full">
          <div className="sticky top-0 flex items-center justify-between z-10 py-1 pr-1 bg-background border-b border-border">
            <SidebarTrigger className="mt-2" />
            <ModeToggle />
          </div>

          <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
            <AuthProviderNoSSR>
              <main>{children}</main>
            </AuthProviderNoSSR>
            <aside>
              <OnThisPage />
            </aside>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
