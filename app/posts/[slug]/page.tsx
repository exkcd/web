import { getAllContent } from "@/lib/content";
import { ContentPage } from "@/components/content-page";

export async function generateStaticParams() {
  return getAllContent("posts").map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ContentPage type="posts" slug={slug} />;
}