import { mdxComponents } from "@/components/mdx-components";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeStarryNight from "rehype-starry-night";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const entries = getAllPosts();
  return entries.map((entry) => ({
    slug: entry.slug,
  }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const rehypePlugins = [rehypeSlug, rehypeStarryNight, remarkGfm];

  return (
    <div className="prose prose-gray dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-strong:font-medium">
      <article>
        <h1 className="mb-0 text-zinc-800 dark:text-zinc-300">{post.title}</h1>
        <time className="text-zinc-400 dark:text-zinc-600 text-sm">{post.date}</time>
        <div className="text-zinc-600 dark:text-zinc-400">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                rehypePlugins,
              },
            }}
          />
        </div>
      </article>
    </div>
  );
}
