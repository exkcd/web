import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import { Aside, Ref, Footnotes } from "@/components/layout/aside";
import { AsideProvider } from "@/components/layout/aside-context";
import { TooltipEmail } from "@/components/layout/tooltip-email";
import { CustomLink } from "@/components/ui/custom-link";


const Cover = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
  <figure>
    <Image src={src} alt={alt} width={1200} height={630} className="rounded-xl" loading="eager" />
    <figcaption className="text-center">{caption}</figcaption>
  </figure>
);

const Img = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
  <figure>
    <Image src={src} alt={alt} width={1920} height={1080} className="rounded-xl" loading="lazy" />
    <figcaption className="text-center">{caption}</figcaption>
  </figure>
);

const RefLink = ({href, children}: {href: string; children: string}) => (
  <Link href={href} className="group relative inline-flex shrink-0 items-center gap-1.5 rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-black transition-colors duration-200 hover:bg-zinc-200 hover:text-zinc-950 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 no-underline" target="blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    {children}
  </Link>
)

const Wrapper = ({ children }: { children: React.ReactNode }) => <AsideProvider>{children}</AsideProvider>;

export const mdxComponents: MDXComponents = {
  wrapper: Wrapper,
  Cover,
  Img,
  Aside,
  Ref,
  Footnotes,
  TooltipEmail,
  RefLink,
  a: CustomLink,
  p: ({ children }: ComponentPropsWithoutRef<"p">) => (
    <p className="mb-4 text-zinc-600 dark:text-zinc-400">{children}</p>
  ),
  ul: ({ children }: ComponentPropsWithoutRef<"ul">) => (
    <ul className="paragraph mb-4 list-inside list-disc space-y-1">{children}</ul>
  ),
  li: ({ children }: ComponentPropsWithoutRef<"li">) => (
    <li className="mb-2 text-zinc-600 dark:text-zinc-400">{children}</li>
  ),
};
