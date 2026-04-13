import { mdxComponents } from "@/components/mdx-components";
import { getContentBySlug, ContentType } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Toc } from "@/components/layout/toc";
import { getTableOfContents } from "@/lib/toc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

interface Props {
  type: ContentType;
  slug: string;
}

export async function ContentPage({ type, slug }: Props) {
  const post = getContentBySlug(type, slug);
  const toc = await getTableOfContents(post.content);

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
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypePrettyCode, { theme: "tokyo-night" }],
                ],
              },
            }}
          />
        </div>
      </article>
      <div className="fixed left-24 top-1/2 -translate-y-1/2 hidden xl:block">
        <Toc toc={toc} title={post.title} />
      </div>
    </div>
  );
}