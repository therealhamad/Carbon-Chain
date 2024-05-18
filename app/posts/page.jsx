"use client";

import Post from "@/components/Post";

import { useState } from "react";

export default function Page() {
  const [postsData, setPostsData] = useState([{}]);
  return (
    <main className="px-[5vw]">
      <div className="mt-[10vh]">
        <Post
          postData="This is just a random comment"
          userName="Joe"
          time="2"
        />
        <Post
          postData="This is just a random comment"
          userName="Joe"
          time="2"
        />{" "}
        <Post
          postData="This is just a random comment"
          userName="Joe"
          time="2"
        />{" "}
        <Post
          postData="This is just a random comment"
          userName="Joe"
          time="2"
        />
      </div>
    </main>
  );
}
