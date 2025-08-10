'use client'

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { HomeIcon, PuzzlePieceIcon, CommandLineIcon, Cog6ToothIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

/**
 * Header with a mobile sidebar overlay that slides in from the left.
 * - Tailwind CSS for styling & transitions
 * - No extra libs required
 * - Focus management + escape-to-close + scroll lock
 *
 * Usage: drop <Header /> at the top of your layout/page.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const firstFocusable = useRef<HTMLAnchorElement | null>(null);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);
  const { user } = useAuth();
  const [gamesOpen, setGamesOpen] = useState(false)
  // Close on ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Basic scroll lock when menu is open
  useEffect(() => {
    const { body } = document;
    if (!body) return;
    if (open) {
      const prevOverflow = body.style.overflow;
      body.style.overflow = "hidden";
      return () => {
        body.style.overflow = prevOverflow;
      };
    }
  }, [open]);

  // Move focus inside when opening, return to button when closing
  useEffect(() => {
    if (open) {
      firstFocusable.current?.focus();
    } else {
      menuBtnRef.current?.focus();
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 dark:border-neutral-800">
      <div className="grid grid-cols-3 px-2 py-2">
        {/* Left: Hamburger */}
        <div className="flex items-center gap-2 col-start-1">
          <button
            ref={menuBtnRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open ? "true" : "false"}
            aria-controls="mobile-sidebar"
            aria-label="Open menu"
            className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M3.75 5.25h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5zm0 6h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5zm0 6h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5z" />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center justify-center col-start-2 gap-2 font-semibold text-xl tracking-tight">
            DN 
            <div className="h-4 border-r border-neutral-800 dark:border-white" />
            <span className="font-light">Wordly</span>
        </Link>

        {/* Right: Page settings icon */}
        <div className="col-start-3 flex justify-end">
            <button
              type="button"
              aria-label="Page settings"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              onClick={() => alert("Open page-specific settings here")}
            >
              {/* Gear icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
                </svg>

            </button>
        </div>
      </div>

      {/* Overlay + Sidebar */}
      {/* Backdrop */}
      <div
        className={
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity " +
          (open ? "opacity-100 pointer-events-auto h-screen" : "opacity-0 pointer-events-none")
        }
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        id="mobile-sidebar"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        className={
          "fixed inset-y-0 left-0 z-50 w-64 max-w-[85vw] h-screen bg-background shadow-2xl transition-transform will-change-transform " +
          (open ? "translate-x-0" : "-translate-x-full")
        }
      >
        <div className="h-14 px-4 border-b border-neutral-800 flex items-center justify-between">
          <span className="font-semibold">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            {/* X icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 1 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <nav className="pt-2 space-y-1 bg-background">
          <Link href="/" ref={firstFocusable} className="flex gap-4 rounded-md text-sm mx-2 px-3 py-2 hover:bg-gray-50 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
            <HomeIcon className="w-5 h-5" />
            Home
          </Link>
          <div className="flex flex-col gap-1">
            <div onClick={() => setGamesOpen(!gamesOpen)} className="flex items-center gap-4 rounded-md text-sm mx-2 px-3 py-2 hover:bg-gray-50 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
              <PuzzlePieceIcon className="w-5 h-5" />
              <div className="flex items-center justify-between w-full">
                Games
                <ChevronRightIcon className={clsx("w-3 h-3 transition-transform duration-300", gamesOpen ? "rotate-90" : "")} />
              </div>
            </div>

            <div className={clsx("transition-transform duration-300", gamesOpen ? "flex flex-col gap-1 bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800" : "hidden")}>
              <Link href="/games/wordly" className="flex items-center gap-4 text-sm px-5 py-2 hover:bg-gray-50 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                <Image src="/wordly-small-icon.svg" alt="Wordly" className="w-5 h-5" />
                <span className="text-neutral-200">Wordly</span>
              </Link>
              <Link href="/games/wordly" className="flex items-center gap-4 text-sm px-5 py-2 hover:bg-gray-50 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                <Image src="/spelling-bee-icon.svg" alt="Spelling Bee" className="w-5 h-5" />
                <span className="text-neutral-200">Spelling Bee</span>
              </Link>
            </div>
          </div>
          <Link href="/projects" className="flex gap-4 rounded-md text-sm mx-2 px-3 py-2 hover:bg-gray-50 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
            <CommandLineIcon className="w-5 h-5" />
            Projects
          </Link>
          <Link href="/settings" className="flex gap-4 rounded-md text-sm mx-2 px-3 py-2 hover:bg-gray-50 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
            <Cog6ToothIcon className="w-5 h-5" />
            Account Settings
          </Link>
        </nav>

        {/* Optional footer section inside the sidebar */}
        <div className="mt-auto p-4 border-t border-neutral-800 text-sm text-gray-600 bg-background">
          <p>Signed in as <span className="font-medium">{user?.email}</span></p>
        </div>
      </aside>
    </header>
  );
}
