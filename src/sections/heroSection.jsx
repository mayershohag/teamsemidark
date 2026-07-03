"use client";
import Prism from "@/components/react-bits/prism";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function HeroSection() {
     return (
          <div
               style={{
                    width: "100%",
               }}
               className="bg-black -mt-23 h-screen relative"
          >
               <div className="absolute z-10 sm:top-[35%] top-[20%] sm:left-30 left-15">
                    <motion.h1
                         initial={{
                              y: 20,
                              opacity: 0,
                         }}
                         whileInView={{
                              y: 0,
                              opacity: 1,
                         }}
                         transition={{
                              duration: 0.6,
                         }}
                         className="md:text-7xl text-4xl text-white font-bold"
                    >
                         Web Today. Ai <br /> Tomorrow
                    </motion.h1>
                    <motion.p
                         initial={{
                              y: 20,
                              opacity: 0,
                         }}
                         whileInView={{
                              y: 0,
                              opacity: 1,
                         }}
                         transition={{
                              duration: 0.6,
                         }}
                         className="text-lg mt-5 text-white/80 font-light lg:w-6/12 w-10/12 text-justify"
                    >
                         TeamSemiDark is a modern web development studio
                         crafting fast, scalable, and user-focused digital
                         experiences. {`We're`} building {`today's`} web while
                         preparing for {`tomorrow's`} AI.
                    </motion.p>
                    <motion.button
                         initial={{
                              y: 20,
                              opacity: 0,
                         }}
                         whileInView={{
                              y: 0,
                              opacity: 1,
                         }}
                         transition={{
                              duration: 0.6,
                         }}
                    >
                         <Link
                              href={"/contact"}
                              className="text-white inline-flex gap-2 items-center px-5 py-2 mt-5 border-white/10 shadow-[inset_0_0_10px_white]/13 hover:shadow-[inset_0_0_10px_white]/30 duration-300 backdrop-blur-2xl rounded-full"
                         >
                              <span>Contact Us</span>
                              <ArrowUpRight strokeWidth={1} />
                         </Link>
                    </motion.button>
               </div>
               <Prism />
          </div>
     );
}
