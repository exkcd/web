import { getAllContent } from "@/lib/content";
import { ContentList } from "@/components/content-list";

export default function ProjectsIndex() {
  const posts = getAllContent("projects");
  return <ContentList posts={posts} basePath="/projects" title="Projects" />;
}