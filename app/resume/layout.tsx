import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Nav } from "@/components/layout/nav";

export default function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col pt-20 px-8">
      <Nav />
      <Header />
      {children}
      <Footer />
    </main>
  );
}
