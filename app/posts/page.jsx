"use client";

import Post from "@/components/Post";
import userData from "@/data/data.json";
import CreatePost from "@/components/CreatePost";

import { useState } from "react";

export default function Page() {
  const [postsData, setPostsData] = useState(userData);
  return (
    <main className="px-[5vw]">
      <CreatePost />
      <div className="mt-[10vh]">
        {postsData.map((item, index) => {
          return (
            <Post
              postData={item.postData}
              userName={item.userName}
              time={item.time}
            />
          );
        })}
      </div>
    </main>
  );
}
