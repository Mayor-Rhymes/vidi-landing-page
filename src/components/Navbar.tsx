"use client";

import Image from "next/image";
import logo from "/public/images/vidi-logo.png";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <nav className="flex items-center absolute w-full z-10">
      <div className="flex-grow flex justify-center">
        <Link href="/"><Image src={logo} alt="logo" /></Link>
      </div>
      <ul className="list-none pl-52 lg:flex flex-grow-[2] justify-evenly text-white uppercase hidden">
        <li>
          <Link href="/" className={cn("hover:underline underline-offset-4 decoration-red-400 transition-all duration-150 delay-50")}>Home</Link>
        </li>
        <li>
          <Link href="/" className={cn("hover:underline underline-offset-4 decoration-red-400 transition-all")}>About us</Link>
        </li>
        <li>
          <Link href="/" className={cn("hover:underline underline-offset-4 decoration-red-400 transition-all")}>Projects</Link>
        </li>
        <li>
          <Link href="/" className={cn("hover:underline underline-offset-4 decoration-red-400 transition-all")}>News</Link>
        </li>
        <li>
          <Link href="/" className={cn("hover:underline underline-offset-4 decoration-red-400 transition-all")}>Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};
