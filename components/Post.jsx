"use client";
import { useState } from "react";
import Image from "next/image";
const Post = ({ postData, userName, time, profile="" }) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(1);
  };

  return (
    <div className="w-[50vw] min-h-[25vh] mx-auto bg-[rgba(255,255,255,0.09)] rounded-xl shadow-md overflow-hidden my-4">
      <div className="md:flex">
        <div className="p-4 flex items-center">
          <Image
            className="h-12 w-12 rounded-full"
            height={50}
            width={50}
            src={profile}
            alt="User Avatar"
          />
          <div className=" ml-[2vw]">
            <div className="text-[2.5vh] font-semibold ">{userName}</div>
            <div className="text-gray-500 text-sm">{time} hours ago</div>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 text-[2.5vh] w-[90%] mx-auto">
        <p>{postData}</p>
      </div>
      <div className="w-[80%] mx-auto pb-5 flex justify-between items-center mt-[2vh]">
        <button
          className=" bg-[rgba(63,170,116,0.8)] text-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-[rgba(63,170,116,1)]"
          onClick={handleLike}
        >
          Like <span>{likeCount}</span>
        </button>
        {/* <button className="bg-green-500 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-green-600">
          Comment
        </button> */}
        <button className=" bg-[rgba(68,45,127,1)] text-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-[rgba(68,45,127,0.8)]">
          Share
        </button>
      </div>
    </div>
  );
};

export default Post;
