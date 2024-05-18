"use client";
import { motion } from "framer-motion";
import { useState } from "react";
export default function Verification({ onButtonClick }) {
  const [postLink, setPostLink] = useState("");
  return (
    <>
      <section
      /* className="w-[100%]  h-[70vh]"
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-50px" }} */
      >
        <div className="mt-[60px] px-6 ">
          <h1 className="text-[3rem] mb-10">Certify Your Green Efforts</h1>
          <h2 className="text-[1.5rem]">
            Turn your social media posts into real world impacts
          </h2>
          <div className="w-[50%] my-10 flex flex-col items-end ">
            <form action="" className="w-[100%]">
              <input
                type="text"
                placeholder="enter the link to your tweets here"
                className="w-[100%] bg-[rgba(68,45,127,1)]  leading-10 text-xl px-3 py-2 rounded-lg focus:outline-none "
                onChange={(e) => setPostLink(e.target.value)}
              />
            </form>
            <button
              className="text-[1.2rem] font-light my-5 px-5 py-2 rounded-lg bg-[rgba(63,170,116,0.5)]"
              onClick={onButtonClick}
            >
              Verify And Earn
            </button>
          </div>
          <h2 className="mt-[10px] text-[1.5rem] w-[50%]">
            Unlock Rewards for every verifed contribution. <br /> By Clicking
            Verify my Impact you're not just sharing a post. You're making a
            difference
          </h2>
        </div>
      </section>
    </>
  );
}
