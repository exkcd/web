"use client";
import { NAME, ROLE } from "@/data/info";
import { Avatar } from "@/components/layout/avatar";

export function Header() {
  return (
    <header className="relative z-10 mb-8 flex items-center">
      <div className="relative z-10">
        <Avatar id="profile" alt="Profile picture of me with a traffic cone on my head" w={64} h={64} />
      </div>
      <div className="ml-4">
        <div className="font-medium text-zinc-800 dark:text-zinc-300">{NAME}</div>
        <div className="text-zinc-600 dark:text-zinc-500">{ROLE}</div>
      </div>
    </header>
  );
}
