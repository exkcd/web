"use client";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const cycleTheme = () => {
    if (theme == "light") setTheme("dark");
    else if (theme == "dark") setTheme("system");
    else setTheme("light");
  };
  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={true}
    >
      <button
        onClick={cycleTheme}
        className="inline-flex items-center justify-center px-2 py-1 text-zinc-700 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
        type="button"
        aria-label={`Switch theme`}
      >
        {theme === "light" && <div>Light</div>}
        {theme === "dark" && <div>Dark</div>}
        {theme === "system" && <div>System</div>}
      </button>
    </AnimatedBackground>
  );
}

export function Footer() {
  return (
    <footer className="absolute right-4 bottom-4 z-10 flex items-center gap-4">
      <div className="text-xs">
        <ThemeSwitch />
      </div>
    </footer>
  );
}
