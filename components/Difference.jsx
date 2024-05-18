"use client";
import { easeInOut, motion } from "framer-motion";
export default function Difference() {
  return (
    <>
      <section
        className=" h-[80vh]"
        /* initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: easeInOut }}
        viewport={{ once: true, margin: "-50px" }} */
      >
        <div className="mt-[60px] px-6">
          <div className="w-[60%]">
            <h1 className="text-[3rem]">Ready to make a differnece</h1>
            <h3 className="text-[1.5rem] my-[40px]">
              Join Carbon Chain today and start turning your social media posts
              into real world impacts
            </h3>
            <h3 className="text-[1.5rem] my-[40px]">
              Together we can forge a path towards a world where the
              sustainability isn't just a goal. It's a way of life{" "}
            </h3>
            <h3 className="text-[1.5rem] my-[40px] ">
              Join The movement. Join CarbonChain
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
