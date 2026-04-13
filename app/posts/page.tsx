import { getAllContent } from "@/lib/content";
import { ContentList } from "@/components/content-list";

export default function PostsIndex() {
  const posts = getAllContent("posts");
  return <ContentList posts={posts} basePath="/posts" title="Posts" />;
}