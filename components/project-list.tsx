import Link from "next/link";
import { PROJECTS } from "@/data/info";

export function ProjectList() {
  const linkClass =
    "external-link underline decoration-1 decoration-dotted decoration-zinc-400 transition-colors duration-300 hover:text-zinc-950 hover:decoration-zinc-950 dark:hover:text-zinc-50 dark:hover:decoration-zinc-50";

  return (
    <ul className="paragraph mb-4 list-inside list-disc space-y-1">
      {PROJECTS.map((project) => (
        <li key={project.name} data-id={project.id} className="mb-2 text-zinc-600 dark:text-zinc-400">
          <Link className={linkClass} href={project.link}>
            {project.name}
          </Link>
          &nbsp;&mdash; {project.description}
        </li>
      ))}
    </ul>
  );
}
