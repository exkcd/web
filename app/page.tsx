import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { mdxComponents } from "@/components/mdx-components";

export default async function Home() {
  const filePath = path.join(process.cwd(), "content", "home.mdx");
  const source = fs.readFileSync(filePath, "utf-8");

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-8 pt-20">
      <Header />
      <MDXRemote source={source} components={mdxComponents} />
      <Footer />
    </main>
  );
}
