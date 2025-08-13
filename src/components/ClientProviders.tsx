'use client'

import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { useSidebar } from "@/components/ui/sidebar" 
import { useEffect, useRef } from "react";
import OnThisPage from "@/components/OnThisPage";
import Link from "next/link";

export default function ClientProviders({
    children
}: {
    children?: React.ReactNode
}) {
    const { openMobile } = useSidebar()
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = contentRef.current
        if (!el) return
        // Add/remove inert depending on sidebar state
        el.toggleAttribute("inert", !!openMobile)
    }, [openMobile])

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <AppSidebar />
            <div ref={contentRef} className="w-full">
              <div className="sticky top-0 flex items-center justify-between bg-background z-10 py-1 pr-1 border-b border-border">
                <SidebarTrigger className="ml-2" />
                <Link href="/" className="font-extrabold text-2xl font-nunito-sans dark:text-white">
                    Devon Nall
                </Link>
                <ModeToggle />
              </div>

              <div className="mx-auto max-w-5xl">
                <div className="mx-4 mt-12 grid grid-cols-1 xl:grid-cols-[1fr_256px]" >
                    <main id="main-content" tabIndex={-1} className="mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
                        {children}
                    </main>
                    <aside className="hidden xl:block">
                      <OnThisPage />
                    </aside>
                </div>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
    )
}