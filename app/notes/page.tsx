import { getAllContent } from "@/lib/content";
import { ContentList } from "@/components/content-list";

export default function NotesIndex() {
  const posts = getAllContent("notes");
  return <ContentList posts={posts} basePath="/notes" title="Notes" />;
}