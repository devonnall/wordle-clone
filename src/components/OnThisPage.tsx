// components/TableOfContents.tsx
import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

export default function TableOfContents({ className = '' }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from the page
    const headingElements = document.querySelectorAll('h2, h3, h4, h5, h6');
    const headingData: Heading[] = [];

    headingElements.forEach((heading, index) => {
      // Create ID if it doesn't exist
      if (!heading.id) {
        heading.id = heading.textContent
          ?.toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-') || `heading-${index}`;
      }

      headingData.push({
        id: heading.id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1))
      });
    });

    setHeadings(headingData);
    setActiveId(headingData[0].id)
  }, []);

  useEffect(() => {
    // Intersection Observer to track which heading is currently visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px', // Adjust based on your header height
        threshold: 0.1
      }
    );

    // Observe all headings
    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const getIndentClass = (level: number) => {
    const indentMap = {
      1: 'pl-2',
      2: 'pl-2',
      3: 'pl-4',
      4: 'pl-6',
      5: 'pl-8',
      6: 'pl-10'
    };
    return indentMap[level as keyof typeof indentMap] || 'pl-2';
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className={`sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto p-4 bg-card border border-border rounded-lg w-64 ${className}`}>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
        On this page
      </h4>
      <ul className="space-y-0">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={`
                block w-full py-1.5 text-left text-sm leading-5 transition-colors duration-200
                border-l-2 border-transparent
                ${getIndentClass(heading.level)}
                ${
                  activeId === heading.id
                    ? 'text-blue-600 border-blue-600 font-medium'
                    : ''
                }
              `}
              title={heading.text}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}