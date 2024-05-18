"use client";
import { useState } from "react";
export default function createPost({ submitHandler, changeFucntion }) {
  const [post, setPost] = useState("");
  return (
    <div className="w-[60%] mx-auto mt-[5vh]">
      <div className="w-[100%] text-[2.2vh] border  py-2">
        <form action="" className="w-[100%]" onSubmit={submitHandler}>
          <input
            onChange={(e) => setPost(e.target.value)}
            type="text"
            placeholder="Type your post here"
            className="w-[100%] bg-transparent focus:outline-none"
          />
        </form>
      </div>
    </div>
  );
}
