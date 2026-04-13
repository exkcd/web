import { getAllContent } from "@/lib/content";
import { ContentList } from "@/components/layout/content-list";

export default function NotesIndex() {
  const posts = getAllContent("notes");
  const description =
    "curation of ideas and topics that I am attempting to understand";
  return (
    <ContentList
      posts={posts}
      basePath="/notes"
      title="Notes"
      description={description}
    />
  );
}
