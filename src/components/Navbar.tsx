"use client"


import Image from "next/image";
import logo from "/public/images/vidi-logo.png";
import Link from "next/link";


export const Navbar = () => {

  return (
    <nav className="flex items-center absolute w-full z-10">
      <Image className="flex-grow-0" src={logo} alt="logo" />

      <ul className="list-none lg:flex flex-grow-[2] justify-evenly text-white uppercase hidden">
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/">
            About us
          </Link>
        </li>
        <li>
          <Link href="/">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/">
              News
          </Link>
        </li>
        <li>
          <Link href="/">
            Contact us
          </Link>
        </li>
       
      </ul>

    </nav>
  )
}