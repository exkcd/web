import { getAllContent } from "@/lib/content";
import { ContentList } from "@/components/layout/content-list";

export default function ProjectsIndex() {
  const posts = getAllContent("projects");
  const description = "writeups for various projects that I have completed";
  return (
    <ContentList
      posts={posts}
      basePath="/projects"
      title="Projects"
      description={description}
    />
  );
}
