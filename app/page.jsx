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
    <main className="mx-[5vw]">
      {isVerifyClicked && <Backdrop onButtonClick={crossClicked} />}
      <section
        className="flex flex-row justify-between mt-[150px]  py-3 h-[80vh] "
        /*  initial={{ opacity: 0, scale: 1, y: "200px" }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }} */
      >
        <div className="w-[70%] pl-6">
          <h1 className="text-[6rem]">CarbonChain</h1>
          <p className="text-[2.5rem] py-10 px-1">
            Trading, Sustainability, Sharing Responsibility
          </p>
          <div className="w-[100%] flex justify-start  mt-[40px]">
            <button className="text-lg border-2 border-white px-[3rem] py-3 rounded-xl mx-2 ">
              Buy
            </button>
            <button className="text-lg border-2 border-white px-[3rem] py-3 rounded-xl mx-2 ml-[5rem]">
              Sell
            </button>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="mt-[1rem]">
            <Image
              height={450}
              width={450}
              alt="logo"
              src="/cropped_image (1)/cropped_image (1).png"
            />
          </div>
        </div>
      </section>
      <section
        className="h-[60vh]"
        /* initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: easeInOut }}
        viewport={{ once: true, margin: "-50px" }} */
      >
        <div className="w-[50%] text-[1.8rem] px-5 mt-[60px] leading-20">
          <p>
            At CarbonChain we're on a mission to empower individuals and
            organisations to make a meaningful impact on our planet's future.
            Through our innovative platform, every action you take towards
            sustainability becomes a step towards a greener, more sustainable
            world.
          </p>
        </div>
        <div></div>
      </section>
      <Verification onButtonClick={verifyClicked} />
      <Difference />
    </main>
  );
}
