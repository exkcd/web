import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { Aside, Ref, Footnotes } from "@/components/layout/aside";
import { AsideProvider } from "@/components/layout/aside-context";
import { TooltipEmail } from "@/components/tooltip-email";

const Cover = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
  <figure>
    <Image src={src} alt={alt} width={1200} height={630} className="rounded-xl" />
    <figcaption className="text-center">{caption}</figcaption>
  </figure>
);

const Img = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
  <figure>
    <Image src={src} alt={alt} width={1920} height={1080} className="rounded-xl" />
    <figcaption className="text-center">{caption}</figcaption>
  </figure>
);

const Wrapper = ({ children }: { children: React.ReactNode }) => <AsideProvider>{children}</AsideProvider>;

export const mdxComponents: MDXComponents = {
  wrapper: Wrapper,
  Cover,
  Img,
  Aside,
  Ref,
  Footnotes,
  TooltipEmail,
  a: ({ href, children, ...props }: ComponentPropsWithoutRef<"a">) => (
    <Link
      href={href ?? "#"}
      className="external-link underline decoration-1 decoration-dotted decoration-zinc-400 transition-colors duration-300 hover:text-zinc-950 hover:decoration-zinc-950 dark:hover:text-zinc-50 dark:hover:decoration-zinc-50"
      {...props}
    >
      {children}
    </Link>
  ),
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
