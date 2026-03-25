import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, "");
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: new Date(data.date).toLocaleDateString("en-US", {
          month: "2-digit",
          year: "numeric",
        }),
      };
    })
    .sort((a, b) => (a.date < b.date ? -1 : 1));
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const date = new Date(data.date);

  return {
    slug,
    title: data.title,
    date: new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()).toLocaleDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    content,
  };
}
