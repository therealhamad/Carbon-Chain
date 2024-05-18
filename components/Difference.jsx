"use client";
import { easeInOut, motion } from "framer-motion";
export default function Difference() {
  return (
    <>
      <section className=" h-[80vh] px-[5vw] bg-[rgba(68,45,127,0.5)] pt-[30px]">
        <motion.div
          className="mt-[10vh] px-6"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: easeInOut }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="w-[60%]">
            <h1 className="text-[6vh]">Ready to make a difference</h1>
            <h3 className="text-[3vh] my-[40px]">
              Join CarbonChain today and start turning your social media posts
              into real world impacts
            </h3>
            <h3 className="text-[3vh] my-[40px]">
              Together we can forge a path towards a world where the
              sustainability isn't just a goal. It's a way of life{" "}
            </h3>
            <h3 className="text-[3vh] my-[40px] ">
              Join The movement. Join CarbonChain
            </h3>
          </div>
        </motion.div>
      </section>
    </>
  );
}
