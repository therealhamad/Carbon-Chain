import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
export default function ModalVerifiy({ onButtonClick }) {
  return (
    <div className="w-[700px] relative left-[25%] top-[25%] h-[450px] border-2 bg-[rgb(68,45,127)] rounded-xl">
      <div
        className="absolute left-[90%] mt-5 cursor-pointer h-[50px] w-[50px] "
        onClick={onButtonClick}
      >
        <Image
          src="/icons8-close-100.png"
          height={500}
          width={500}
          alt="cross"
          className="h-[40px] w-[40px]"
        />
      </div>
      <div className="text-center mt-[60px]  ">
        <h1 className="text-[2rem] mb-5">
          Congratulations, <br /> You have made an Impact
        </h1>
        <div></div>
        <h3 className="text-xl leading-8">
          Your sustailablity efforts have been recognised
        </h3>
        <h3 className="text-xl leading-8">
          Here's the CarbonChain arrtibuted to your impactful contribution
        </h3>

        <div
          className="bg-[rgba(63,170,116,1)] 
        text-[1.5rem] px-4 py-2 rounded-lg w-[40%] mx-auto mt-[30px]"
        >
          {Math.random().toString().slice(0, 10)}cc
        </div>
        <Link
          href="/insights"
          className="bg-[rgba(63,170,116,1)]
        text-[1.5rem] px-4 py-2 rounded-lg w-[40%] mx-auto  mt-[30px] block"
        >
          View Insights
        </Link>
      </div>
    </div>
  );
}
