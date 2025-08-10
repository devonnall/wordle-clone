'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react' 

type SidebarCtx = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

const Ctx = createContext<SidebarCtx | null>(null)

export function SidebarProvider({
    children
}: {
    children: React.ReactNode
}) {
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        if (!isOpen) return 
        const prev = document.body.style.overflow 
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = prev }
    }, [isOpen])

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') setOpen(false)
        }
        if (isOpen) window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [isOpen])

    const value = useMemo<SidebarCtx>(() => ({
        isOpen,
        open: () => setOpen(true),
        close: () => setOpen(false),
        toggle: () => setOpen(v => !v)
    }), [isOpen])

    return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useSidebar() {
    const ctx = useContext(Ctx)
    if (!ctx) throw new Error ('useSidebar must be used within <SidebarProvider>')
    return ctx
}