import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image src="/logo-tami.png" alt="logo" width={50} height={50} priority className="w-auto h-10" />
      <span className="text-lg font-semibold">NextTami</span>
    </Link>
  );
}
