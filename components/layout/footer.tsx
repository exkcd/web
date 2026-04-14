"use client";
import * as React from "react";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { useTheme } from "next-themes";

function LocalTime() {
  const [time, setTime] = React.useState<Date>(new Date());
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = React.useMemo<string>(() => {
    if (!mounted) return "";

    const denverTime = new Date(
      time.toLocaleString("en-US", { timeZone: "America/Denver" }),
    );
    const hours = denverTime.getHours().toString().padStart(2, "0");
    const minutes = denverTime.getMinutes().toString().padStart(2, "0");
    const seconds = denverTime.getSeconds().toString().padStart(2, "0");

    // Use Intl API to get Denver's current UTC offset
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Denver",
      timeZoneName: "shortOffset",
    });
    const offsetString =
      formatter.formatToParts(time).find((p) => p.type === "timeZoneName")
        ?.value ?? ""; // e.g. "GMT-6" or "GMT-7"
    const offset = offsetString.replace("GMT", "UTC"); // reformat to "UTC-6"

    return `it's ${hours}:${minutes}:${seconds} ${offset}`;
  }, [time, mounted]);

  const [showTime, setShowTime] = React.useState(false);
  const toggleFooter = () => {
    setShowTime(true);
    setTimeout(() => setShowTime(false), 3000);
  };

  return (
    <button onClick={toggleFooter} className="text-zinc-600 dark:text-zinc-400">
      {showTime ? (
        <p className="font-mono">{formattedTime}</p>
      ) : (
        <p>© 2026 Rey Stone</p>
      )}
    </button>
  );
}

function ThemeSwitch() {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
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
        onClick={toggleTheme}
        className="inline-flex items-center justify-center px-2 py-1 text-zinc-600 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
        type="button"
        aria-label={`Switch theme`}
      >
        {resolvedTheme === "light" ? <div>Light</div> : <div>Dark</div>}
      </button>
    </AnimatedBackground>
  );
}

export function Footer() {
  return (
    // <footer className="absolute right-4 bottom-4 z-10 flex items-center gap-4">
    <footer className="mx-auto mt-auto w-full max-w-2xl">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="text-xs">
          <LocalTime />
        </div>
        <div className="text-xs">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  );
}
