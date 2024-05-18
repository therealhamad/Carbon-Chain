"use client";

import Image from "next/image";
import Link from "next/link";

import Verification from "@/components/Verification";
import Difference from "@/components/Difference";
import { easeInOut, motion } from "framer-motion";
import Backdrop from "@/components/Backdrop";
import { useState } from "react";

export default function Home() {
  const [isVerifyClicked, setIsVerifyClicked] = useState(false);
  const verifyClicked = () => {
    setIsVerifyClicked(!isVerifyClicked);
  };

  const crossClicked = () => {
    setIsVerifyClicked(!isVerifyClicked);
  };

  return (
    <main className="">
      {isVerifyClicked && <Backdrop onButtonClick={crossClicked} />}
      {!isVerifyClicked ? (
        <>
          <motion.section
            className="flex flex-row justify-between mt-[15vh]  py-3 h-[80vh]  px-[5vw]"
            initial={{ opacity: 0, scale: 1, y: "200px" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-[70%] pl-6">
              <h1 className="text-[12vh]">
                Carbon<span className="text-[rgba(68,45,127,1)]">Chain</span>
              </h1>
              <p className="text-[4.5vh] py-10 px-1">
                Trading, Sustainability, Sharing Responsibility
              </p>
              <div className="w-[100%] flex justify-start  mt-[40px]">
                <Link
                  href="/buy"
                  className="text-[2.5vh]  px-[3vw] py-[2vh] rounded-xl mx-2
                bg-[rgba(63,170,116,0.8)] "
                >
                  Buy
                </Link>
                <Link
                  href="/sell"
                  className="text-[2.5vh]  px-[3vw] py-[2vh] rounded-xl mx-2 
            ml-[5rem]
            bg-[rgba(63,170,116,0.8)]"
                >
                  Sell
                </Link>
              </div>
            </div>
            <div className="w-[50%]">
              <div className="mt-[3vh]  h-[60vh] w-[60vh]">
                <Image
                  height={2000}
                  width={2000}
                  alt="logo"
                  src="/cropped_image (1)/cropped_image (1).png"
                />
              </div>
            </div>
          </motion.section>
          <section
            className="h-[60vh] pt-[5vh] bg-[rgba(68,45,127,0.4)] overflow-visible px-[5vw]"
            /*  */
          >
            <motion.div
              className="w-[50%] text-[1.8rem] px-5 mt-[60px] leading-20"
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: easeInOut }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <p>
                At CarbonChain we're on a mission to empower individuals and
                organisations to make a meaningful impact on our planet's
                future. Through our innovative platform, every action you take
                towards sustainability becomes a step towards a greener, more
                sustainable world.
              </p>
            </motion.div>
            <div></div>
          </section>
          <Verification onButtonClick={verifyClicked} />
          <Difference />
        </>
      ) : (
        ""
      )}
    </main>
  );
}
