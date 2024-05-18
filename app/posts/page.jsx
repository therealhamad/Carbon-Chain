"use client";

import Post from "@/components/Post";
import userData from "@/data/data.json";

import { useState } from "react";

export default function Page() {
  const [postsData, setPostsData] = useState([{}]);
  return (
    <main className="px-[5vw]">
      <div className="mt-[10vh]">
        {userData.map((item, index) => {
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
