"use client";

import Image from "next/image";
import logo from "/public/images/vidi-logo.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export const Navbar = () => {

  const pathname = usePathname();

  return (
    <nav className="flex items-center absolute w-full z-10">
      <div className="flex-grow flex justify-center">
        <Link href="/"><Image src={logo} alt="logo" /></Link>
      </div>
      <motion.ul
        className="list-none pl-52 lg:flex flex-grow-[2] justify-evenly text-white uppercase hidden"
        initial={{ translateX: "10%", opacity: 0, }}
        whileInView={{ translateX: "0%", opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{once: true}}
      >
        <li>
          <Link
            href="/"
            className=
            {cn("hover:underline underline-offset-4 decoration-red-400 transition-all duration-150 delay-50 active:underline", pathname === "/" && "underline")}
            
          >
            Home</Link>
        </li>
        <li>
          <Link href="/about" className={cn("hover:underline underline-offset-4 decoration-red-400 transition-all", pathname === "/about" && "underline")}>About us</Link>
        </li>
        <li>
          <Link href="/" className={cn("hover:underline underline-offset-4 decoration-red-400 transition-all", pathname === "/projects" && "underline")}>Projects</Link>
        </li>
        <li>
          <Link href="/" className={cn("hover:underline underline-offset-4 decoration-red-400 transition-all", pathname === "/news" && "underline")}>News</Link>
        </li>
        <li>
          <Link href="/" className={cn("hover:underline underline-offset-4 decoration-red-400 transition-all", pathname === "/contactus" && "underline")}>Contact us</Link>
        </li>
      </motion.ul>
    </nav>
  );
};
