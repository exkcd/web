import { mdxComponents } from "@/components/mdx-components";
import { Toc } from "@/components/layout/toc";
import { getTableOfContents } from "@/lib/toc";
import { getAllEntries, getEntryBySlug } from "@/lib/entries";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeStarryNight from "rehype-starry-night";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const entries = getAllEntries();
  return entries.map((entry) => ({
    slug: entry.slug,
  }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getEntryBySlug(slug);

  const toc = await getTableOfContents(post.content);

  const remarkPlugins = [remarkGfm];
  const rehypePlugins = [rehypeSlug, rehypeStarryNight];

  return (
    <div className="prose prose-gray dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-strong:font-medium prose-headings:scroll-mt-20">
      <article>
        <h1 className="text-zinc-800 dark:text-zinc-300">{post.title}</h1>
        <div className="text-zinc-600 dark:text-zinc-400">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins,
                rehypePlugins,
              },
            }}
          />
        </div>
      </article>

      <div className="fixed left-24 top-48 hidden xl:block">
        <Toc toc={toc} title={post.title} />
      </div>
    </div>
  );
}
