"use client";
import Image from "next/image";
import Link from "next/link";

export function Nav() {
  /* My profile picture in the corner */
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
