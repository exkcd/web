import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto flex w-full flex-1 flex-col dark:text-white">
      <h1 className="font-semibold text-xl mb-8">Writing</h1>
      <ul className="p-0">
        {posts.map((post) => (
          <li key={post.slug} className="group">
            <Link href={`/writing/${post.slug}`}>
              <div className="decoration-0 text-zinc-600 dark:text-zinc-400 duration-300 hover:text-zinc-950 dark:hover:text-zinc-50 flex items-center py-2 transition">
                <div className="flex-1 pr-4">{post.title}</div>
                <time className="text-zinc-600 dark:text-zinc-400 inline-flex items-center text-sm">{post.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
