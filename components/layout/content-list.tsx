"use client";

import Link from "next/link";
import { useState } from "react";
import { ContentMeta } from "@/lib/content";
import { Header } from "./header";

interface Props {
  posts: ContentMeta[];
  basePath: string;
  title: string;
  description: string;
}

export function ContentList({ posts, basePath, title, description }: Props) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Deduplicate and sort all tags across every post
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

  const filtered = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  return (
    <main className="mx-auto flex w-full flex-1 flex-col dark:text-white">
      <Header title={title} description={description} />
      {/* Tag filter bar */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`text-xs px-2 py-1 rounded-full transition-colors duration-200 ${
                activeTag === tag
                  ? "bg-zinc-800 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Post list */}
      <ul className="p-0">
        {filtered.map((post) => (
          <li key={post.slug} className="group">
            <Link href={`${basePath}/${post.slug}`}>
              <div className="decoration-0 text-zinc-600 dark:text-zinc-400 duration-300 hover:text-zinc-950 dark:hover:text-zinc-50 flex items-center py-2 transition">
                <div className="flex-1 pr-4">{post.title}</div>
                <div className="flex items-center gap-2">
                  {/* {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))} */}
                  <time className="text-zinc-600 dark:text-zinc-400 text-sm">
                    {post.date}
                  </time>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
