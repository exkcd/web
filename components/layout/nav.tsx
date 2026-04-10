"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  /* My profile picture in the corner */
  const pathname = usePathname();

  if (!(pathname === "/")) {
    return (
      <Link href="/" className="h-4 w-4 fixed top-4 left-4 z-10">
        <Image
          src="/images/profile.jpeg"
          alt="Me with a traffic cone on my head"
          width={64}
          height={64}
          className="rounded-[50%] overflow-hidden"
          loading="eager"
        />
      </Link>
    );
  }
}
