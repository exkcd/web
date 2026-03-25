import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
export default function WritingLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-32 py-48 px-8">
      <Nav />
      {children}
      <Footer />
    </main>
  );
}
