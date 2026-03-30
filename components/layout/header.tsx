"use client";
import { NAME, ROLE } from "@/data/info";

export function Header() {
  return (
    <header className="relative z-10 mb-8 flex items-center">
      <div className="relative z-10">
        <div className="font-medium text-zinc-800 dark:text-zinc-300">{NAME}</div>
        <div className="text-zinc-600 dark:text-zinc-500">{ROLE}</div>
      </div>
    </header>
  );
}
