import { Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex sticky underline bottom-0 justify-center items-center py-2 bg-[#272727] text-white">
      <Link
        href="https://www.instagram.com/gdsc.mpstme/"
        className="underline italic "
      >
        <Image src="footer.svg" height={350} width={350} alt="Footer"></Image>
      </Link>
    </footer>
  );
}
