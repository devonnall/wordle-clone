'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Heading = { id: string; text: string; level: number };

function getLevel(tagName: string) {
  const n = Number(tagName.replace('H', ''));
  return Number.isFinite(n) ? n : 2;
}

export default function OnThisPage({
  containerSelector = 'article',
  minLevel = 2,
  maxLevel = 4,
  offsetPx = 120, // adjust for your header height
}: {
  containerSelector?: string;
  minLevel?: number;
  maxLevel?: number;
  offsetPx?: number;
}) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Collect headings after mount
  useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const selector = Array.from(
      { length: maxLevel - minLevel + 1 },
      (_, i) => `h${i + minLevel}`
    ).join(', ');

    const nodes = Array.from(container.querySelectorAll(selector)) as HTMLElement[];

    // Ensure each heading has an id
    nodes.forEach((node) => {
      if (!node.id) {
        node.id = node.textContent
          ?.toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]/g, '')
          .slice(0, 80) || '';
      }
    });

    const collected = nodes.map((el) => ({
      id: el.id,
      text: el.textContent || '',
      level: getLevel(el.tagName),
    }));

    setHeadings(collected);
  }, [containerSelector, minLevel, maxLevel]);

  // IntersectionObserver that updates activeId
  useEffect(() => {
    if (!headings.length) return;

    const options: IntersectionObserverInit = {
      // Root margin moves the "active line" down so content under a sticky header counts as active
      rootMargin: `-${offsetPx}px 0px -60% 0px`,
      threshold: [0, 1.0],
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      // Pick the entry closest to the top that is intersecting.
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop);

      if (visible.length > 0) {
        const topMost = visible[0];
        setActiveId((topMost.target as HTMLElement).id);
      } else {
        // Fallback: find the last heading above the viewport
        const scrollY = window.scrollY + offsetPx + 1;
        const lastAbove = headings
          .map((h) => document.getElementById(h.id))
          .filter(Boolean)
          .sort((a, b) => (a!.offsetTop - b!.offsetTop))
          .filter((el) => el!.offsetTop <= scrollY)
          .pop();
        if (lastAbove) setActiveId(lastAbove.id);
      }
    };

    // (Re)create observer each time we have headings
    observerRef.current?.disconnect();
    const obs = new IntersectionObserver(handleIntersect, options);
    observerRef.current = obs;

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [headings, offsetPx]);

  // Build simple indentation for nested levels
  const baseLevel = useMemo(
    () => (headings.length ? Math.min(...headings.map((h) => h.level)) : minLevel),
    [headings, minLevel]
  );

  if (!headings.length) return null;

  return (
    <nav aria-label="On this page" className="sticky top-20 max-h-[80vh] overflow-auto pr-2">
      <div className="text-sm font-semibold mb-2">On this page</div>
      <ul className="space-y-1">
        {headings.map((h) => {
          const indent = (h.level - baseLevel) * 12; // px
          const isActive = h.id === activeId;
          return (
            <li key={h.id} style={{ paddingLeft: indent }}>
              <a
                href={`#${h.id}`}
                onClick={(e) => {
                  // smooth scroll without changing sticky header overlap
                  e.preventDefault();
                  const el = document.getElementById(h.id);
                  if (!el) return;
                  const y = el.getBoundingClientRect().top + window.scrollY - 100; // tune vs. offsetPx
                  window.history.pushState(null, '', `#${h.id}`);
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }}
                className={[
                  'block rounded px-2 py-1 text-sm leading-5',
                  isActive ? 'bg-gray-100 dark:bg-zinc-800 font-medium' : 'hover:bg-gray-50 dark:hover:bg-zinc-900',
                ].join(' ')}
                aria-current={isActive ? 'true' : undefined}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}