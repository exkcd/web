import Image from "next/image";

export function Avatar({ id, alt, w, h }: { id: string; alt: string; w: number; h: number }) {
  return (
    <Image
      src={`/images/${id}.jpeg`}
      alt={alt}
      width={`${w}`}
      height={`${h}`}
      className="rounded-[50%] overflow-hidden"
      loading="lazy"
    />
  );
}
