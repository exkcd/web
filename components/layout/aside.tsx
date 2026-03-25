"use client";

import { useAside } from "@/components/layout/aside-context";
import { ReactNode } from "react";

export function Ref({ id }: { id: string }) {
  const { register } = useAside();
  const n = register(id);
  return (
    <sup id={`ref-${id}`}>
      <span className="aside-ref-wide cursor-default text-[0.75em] font-medium text-zinc-600 dark:text-zinc-400">
        {n}
      </span>
      <a
        href={`#fn-${id}`}
        className="aside-ref-narrow text-[0.75em] font-medium text-zinc-500 no-underline decoration-zinc-600 dark:text-zinc-400"
      >
        {n}
      </a>
    </sup>
  );
}

export function Aside({ id, children }: { id: string; children: ReactNode }) {
  const { register } = useAside();
  const n = register(id, children);
  return (
    <aside
      data-aside-id={id}
      aria-label={`Note ${n}`}
      className="aside-float not-prose text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 [&>p]:inline [&>p]:m-0 text-zinc"
    >
      {n}: {children}
    </aside>
  );
}

export function Footnotes() {
  const { getEntries } = useAside();
  const entries = getEntries();

  if (entries.length === 0) return null;
  return (
    <footer className="aside-footnotes not-prose mt-10 border-t border-zinc-200 pt-6 dark:border-zinc-700">
      <ol className="space-y-3">
        {entries.map(({ number, content, id }) => (
          <li
            key={number}
            id={`fn-${id}`}
            className="flex gap-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400"
          >
            <span className="shrink-0 text-zinc-600 dark:text-zinc-400">{number}:</span>
            <span>{content}</span>
          </li>
        ))}
      </ol>
    </footer>
  );
}
