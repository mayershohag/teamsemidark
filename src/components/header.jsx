"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assests/teamsemidark.webp";
export default function Header() {
     return (
          <div className="py-4">
               <header className="flex items-center px-4 xl:px-0 justify-between max-w-7xl mx-auto">
                    <Link href={"/"}>
                         <Image
                              src={logo}
                              alt="teamSemiDark logo"
                              className="sm:w-15 w-12 h-12 sm:h-15 rounded-full"
                         />
                    </Link>
                    <nav className="hidden sm:flex border px-8 py-3 rounded-full border-white/10 shadow-[inset_0_0_10px_white]/13 hover:shadow-[inset_0_0_10px_white]/30 duration-300 backdrop-blur-2xl items-center gap-6 text-white text-lg">
                         <Link href={"/"}>Home</Link>
                         <Link href={"/about"}>About</Link>
                         <Link href={"/services"}>Services</Link>
                         <Link href={"/projects"}>Projects</Link>
                         <Link href={"/testimonials"}>Testimonials</Link>
                    </nav>
                    <Link
                         className="text-white sm:text-lg text-sm"
                         href={"/contact"}
                    >{`Let's Go`}</Link>
               </header>
          </div>
     );
}
