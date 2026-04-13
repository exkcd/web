"use client";

import * as React from "react";

import Link from "next/link";
import { TableOfContents } from "@/lib/toc";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";

interface TocProps {
  toc: TableOfContents;
  title: string;
}

export function Toc({ toc, title }: TocProps) {
  const itemIds = React.useMemo(
    () =>
      toc.items
        ? toc.items
            .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split("#")[1])
        : [],
    [toc],
  );
  const activeHeading = useActiveItem(itemIds);
  const mounted = useMounted();

  if (!toc?.items) {
    return null;
  }

  return mounted ? (
    <div className="toc-container">
      <Link
        href=""
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="focus:ring-opacity-50 text-primary-light-12 dark:text-primary-dark-12 focus-visible:ring-primary-light-8 dark:focus-visible:ring-primary-dark-8 relative cursor-default rounded-sm text-left text-sm font-medium no-underline transition-colors focus:outline-hidden focus-visible:ring-2 leading-6"
      >
        {title}
      </Link>
      <Tree tree={toc} activeItem={activeHeading} />
    </div>
  ) : null;
}

function useActiveItem(itemIds: (string | undefined)[]) {
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` },
    );

    itemIds?.forEach((id) => {
      if (!id) {
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        if (!id) {
          return;
        }

        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

interface TreeProps {
  tree: TableOfContents;
  level?: number;
  activeItem?: string | null;
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree?.items?.length && level < 3 ? (
    <ul className={cn("m-0 list-none p-0")}>
      {tree.items.map((item, index) => {
        return (
          <li key={index} className="py-0">
            <a
              href={item.url}
              className={cn(
                "inline-block no-underline transition-colors",
                item.url.replace("#", "") === activeItem
                  ? "font-medium text-xs text-zinc-800 dark:text-zinc-100"
                  : "text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-100",
              )}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree tree={item} level={level + 1} activeItem={activeItem} />
            ) : null}
          </li>
        );
      })}
    </ul>
  ) : null;
}
