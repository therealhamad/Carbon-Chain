"use client";
import { motion, easeInOut } from "framer-motion";
import Link from "next/link";
export default function Home() {
  return (
    <main className="">
      <motion.section
        className="mt-[40px] px-[5vw] h-[80vh]"
        initial={{
          y: "-20%",
          opacity: 0,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-[3.5rem] text-[rgba(63,170,116,0.8)] font-bold">
          <Link href="/buy">Key Post Insights</Link>
        </h1>
        <h3 className="text-[2.5rem] mt-[30px] ">
          Here are some key insights from your post that contributed <br />
          to the determination of your Carbon credit value:
        </h3>
        <ul className="text-[2rem] my-[50px] ">
          <li className="py-3">Impression: 13671</li>
          <li className="py-3">Engagements: 3212</li>
          <li className="py-3">Likes: 12877</li>
          <li className="py-3">Comments: 1018</li>
          <li className="py-3">Reposts: 305</li>
        </ul>
      </motion.section>
      <section className="px-[5vw] w-[100%] flex flex-row justify-between mt-[50px] h-[60vh] bg-[rgba(68,45,127,0.4)]">
        <motion.div
          className="w-[50%]"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: easeInOut }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {" "}
          <h1 className="text-[2.5rem] mt-[30px] font-bold text-[rgba(63,170,116,1)]">
            What's Next?
          </h1>
          <p className="mt-[50px] text-[1.5rem]">
            Your journey towards sustainability doesn't end here. Keep sharing
            your eco-friendly actions and inspiring others to join the movement.
            Together we can make a significant difference in combatting climate
            change and creating a brighter future for the generations to come.
          </p>
          <Link
            href="/"
            className="w-[90%] text-center mt-[50px] text-[1.5rem] px-5 py-2 rounded-lg bg-[rgba(63,170,116,0.6)] block"
          >
            Share your next sustainabiliy milestone
          </Link>
        </motion.div>
        <div></div>
      </section>
    </main>
  );
}
