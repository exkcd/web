"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StickyNote } from "lucide-react";
import { PenLine } from "lucide-react";
import { ScrollText } from "lucide-react";
import { FolderOpen } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const navLinks = [
  { href: "/posts", label: "posts", icon: <PenLine size={15} /> },
  { href: "/projects", label: "projects", icon: <FolderOpen size={15} /> },
  { href: "/notes", label: "notes", icon: <StickyNote size={15} /> },
  { href: "/resume", label: "resume", icon: <ScrollText size={15} /> },
];

export function Header({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const pathname = usePathname();
  const isRoot = pathname === "/";
  return (
    <header className="relative z-10 mb-4 flex items-start justify-between">
      <div className="relative">
        {isRoot ? (
          <div>
            <div className="font-medium text-zinc-800 dark:text-zinc-300">
              {title}
            </div>
            <div className="text-sm text-zinc-500">{description}</div>
          </div>
        ) : (
          <Link href="/">
            <div className="font-medium text-zinc-800 dark:text-zinc-300">
              {title}
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-500">
              {description}
            </div>
          </Link>
        )}
      </div>

      {/* Nav links */}
      <nav className="relative z-10 flex gap-2">
        {navLinks.map(({ href, label, icon }) => {
          const isActive = pathname === href;
          return (
            <Tooltip key={`${href}-${pathname}`}>
              <TooltipTrigger
                closeOnClick={true}
                render={
                  <Link
                    key={href}
                    href={href}
                    className={`font-medium text-sm transition-colors ${
                      isActive
                        ? "text-zinc-900 dark:text-zinc-100"
                        : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                    }`}
                  >
                    {icon}
                  </Link>
                }
              ></TooltipTrigger>
              <TooltipContent className=" bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-100">
                {label}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </nav>
    </header>
  );
}
