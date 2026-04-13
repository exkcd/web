import { getAllContent } from "@/lib/content";
import { ContentList } from "@/components/layout/content-list";

export default function PostsIndex() {
  const posts = getAllContent("posts");
  const description = "opinionated pieces for more developed thoughts";
  return (
    <ContentList
      posts={posts}
      basePath="/posts"
      title="Posts"
      description={description}
    />
  );
}
