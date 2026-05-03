import Link from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const className =
  "external-link underline decoration-1 decoration-dotted decoration-zinc-400 transition-colors duration-300 hover:text-zinc-950 hover:decoration-zinc-950 dark:hover:text-zinc-50 dark:hover:decoration-zinc-50";

const isExternalLink = (href: string) =>
  href.startsWith("http://") ||
  href.startsWith("https://") ||
  href.startsWith("//");

export function CustomLink({ href, children }: LinkProps) {
  if (isExternalLink(href)) {
    return (
      <Link
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
