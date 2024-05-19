"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" justify-between bg-[rgba(68,45,127,0.3)] h-[12vh]">
      <div className="w-[90vw] mx-auto  flex justify-between h-[100%]">
        <Link href="/" className="mt-[3vh] h-[6vh] w-[6vh]">
          <Image
            height={500}
            width={500}
            alt="logo"
            src="/cropped_image (1)/cropped_image (2).png"
          />
        </Link>
        <ul className="flex flex-row w-[35vw] justify-between px-5 text-[2.5vh] h-[40%] mt-[4vh] cursor-pointer">
          <motion.li className="px-5 py-0" whileHover={{ scale: 1.2 }}>
            <Link href="/posts" className="block h-[100%] px-5">
              {" "}
              Posts
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} className="px-5 py-0">
            Rate
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} className=" px-3 py-0">
            Why Us
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} className=" px-5 py-0">
            Login
          </motion.li>
        </ul>
      </div>
    </nav>
  );
}
