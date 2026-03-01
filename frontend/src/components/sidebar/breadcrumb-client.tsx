"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

/**
 * Simple breadcrumb: splits path and renders readable segments.
 * Last segment is displayed as the page title as well.
 */
export default function BreadcrumbPageClient() {
  const path = usePathname() || "/";
  const segments = path === "/" ? [""] : path.split("/").filter(Boolean);

  const humanize = (s: string) =>
    s
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
      .replace(/\bId\b/gi, "ID");

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="text-sm font-medium hover:underline">
            Home
          </Link>
        </li>

        {segments.map((seg, i) => {
          const href = "/" + segments.slice(0, i + 1).join("/");
          const isLast = i === segments.length - 1;
          return (
            <li key={href} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 opacity-70" />
              {isLast ? (
                <span className="text-sm font-semibold">{humanize(seg)}</span>
              ) : (
                <Link href={href} className="text-sm hover:underline">
                  {humanize(seg)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}