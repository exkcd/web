import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ContentType = "posts" | "projects" | "notes";

export interface ContentMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
}

export interface ContentFull extends ContentMeta {
  content: string;
}

function getDirectory(type: ContentType) {
  return path.join(process.cwd(), "content", type);
}

export function getAllContent(type: ContentType): ContentMeta[] {
  const dir = getDirectory(type);
  const filenames = fs.readdirSync(dir);

  return filenames
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, "");
      const fileContents = fs.readFileSync(path.join(dir, filename), "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: new Date(data.date).toLocaleDateString("en-US", {
          month: "2-digit",
          year: "numeric",
        }),
        tags: (data.tags as string[]) ?? [],
        _rawDate: new Date(data.date).getTime(), // temporary sort key
      };
    })
    .sort((a, b) => b._rawDate - a._rawDate) // newest first
    .map(({ _rawDate, ...rest }) => rest); // strip the temp field
}

export function getContentBySlug(type: ContentType, slug: string): ContentFull {
  const dir = getDirectory(type);
  const filePath = path.join(dir, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const date = new Date(data.date);

  return {
    slug,
    title: data.title,
    date: new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
    ).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    tags: (data.tags as string[]) ?? [],
    content,
  };
}
