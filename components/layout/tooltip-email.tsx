"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { EMAIL } from "@/data/info";

export function TooltipEmail() {
  const buttonClass =
    "text-zinc-600 dark:text-zinc-400 external-link underline decoration-1 decoration-dotted decoration-zinc-400 transition-colors duration-300 hover:text-zinc-950 hover:decoration-zinc-950 dark:hover:text-zinc-50 dark:hover:decoration-zinc-50";

  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger
        closeOnClick={false}
        render={
          <button className={buttonClass} onClick={handleCopy}>
            {EMAIL}
          </button>
        }
      />
      <TooltipContent
        className={
          " bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-100"
        }
      >
        {copied ? "Copied!" : "Copy"}
      </TooltipContent>
    </Tooltip>
  );
}
