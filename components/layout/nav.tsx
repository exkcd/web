"use client";
import { Avatar } from "@/components/layout/avatar";
import Link from "next/link";

export function Nav() {
  /* My profile picture in the corner */
  return (
    <Link href="/" className="h-4 w-4 fixed top-4 left-4 z-10">
      <Avatar id="profile" alt="Profile picture of me with a traffic cone on my head" w={64} h={64} />
    </Link>
  );
}
