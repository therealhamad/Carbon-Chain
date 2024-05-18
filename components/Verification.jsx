"use client";
import { motion } from "framer-motion";
import { useState } from "react";
export default function Verification({ onButtonClick, handleChange }) {
  return (
    <>
      <section
        className="h-[70vh] px-[5vw]"
        /* className="w-[100%]  h-[70vh]"
         */
      >
        <motion.div
          className="mt-[60px] px-6 "
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h1 className="text-[6vh] mb-10">
            Certify Your <span className="text-green-600 font-bold">Green</span>{" "}
            Efforts
          </h1>
          <h2 className="text-[3.5vh]">
            Turn your social media posts into real world impacts
          </h2>
          <div className="w-[50%] my-10 flex flex-col items-end ">
            <form
              action=""
              className="w-[100%]"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="text"
                placeholder="enter the link to your tweets here"
                className="w-[100%] bg-[rgba(68,45,127,1)]  leading-10 text-[3vh] px-[3vh] py-[1.5vh] rounded-lg focus:outline-none "
                onChange={handleChange}
              />
            </form>
            <button
              className="text-[2.4vh] font-light my-5 px-5 py-2 rounded-lg bg-[rgba(63,170,116,0.5)]"
              onClick={onButtonClick}
            >
              Verify And Earn
            </button>
          </div>
          <h2 className="mt-[10px] text-[3vh] w-[50%]">
            Unlock Rewards for every verifed contribution. <br /> By Clicking
            Verify my Impact you're not just sharing a post. You're making a
            difference
          </h2>
        </motion.div>
      </section>
    </>
  );
}
