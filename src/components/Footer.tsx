import Link from "next/link";
import Image from "next/image";
import vidiLogo from "/public/images/vidi-logo.png";
import facebook from "/public/images/social-media-logo/facebook-logo.svg";
import instagram from "/public/images/social-media-logo/instagram-logo.svg";
import linkedin from "/public/images/social-media-logo/linkedin-logo.svg";
import xLogo from "/public/images/social-media-logo/x-logo.svg";
import threads from "/public/images/social-media-logo/threads-logo.svg";

export default function Footer() {
  return (
    <footer className="h-[593px] bg-black text-white flex lg:flex-row flex-col justify-evenly items-center">
      <div className="flex lg:justify-evenly gap-x-8 items-center flex-grow-[2]">
        <ul className="list-style-none flex flex-col gap-4">
          <li className="uppercase font-semibold">Menu</li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Projects</Link>
          </li>
          <li>
            <Link href="/">News</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
        <ul className="list-style-none flex flex-col gap-4">
          <li className="uppercase font-semibold">Socials</li>
          <li>
            <Link href="/">Facebook</Link>
          </li>
          <li>
            <Link href="/">LinkedIn</Link>
          </li>
          <li>
            <Link href="/">Twitter</Link>
          </li>
          <li>
            <Link href="/">Instagram</Link>
          </li>
          <li>
            <Link href="/">Threads</Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center flex-grow">
        <Image src={vidiLogo} alt="logo" />
        <div className="flex gap-x-4">
          <Link href="/">
            <Image src={facebook} alt="facebook" className="w-7 h-7" />
          </Link>
          <Link href="/">
            <Image src={linkedin} alt="linkedin" className="w-7 h-7" />
          </Link>
          <Link href="/">
            <Image src={xLogo} alt="x-logo" className="w-7 h-7" />
          </Link>
          <Link href="/">
            <Image src={instagram} alt="instagram" className="w-7 h-7" />
          </Link>
          <Link href="/">
            <Image src={threads} alt="threads" className="w-7 h-7" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
