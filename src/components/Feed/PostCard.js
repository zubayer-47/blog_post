"use client";
import Image from "next/image";
import React from "react";
import "../../styles/hreoSection.css";
import { captilize } from "@utils/captilize";

const PostCard = ({ post }) => {
  return (
    <div className="min-w-0 max-w-md px-3 py-3 min-h-0 border-2 shadow-lg border-sky-300/60 rounded-md m-2 bg-red-200/75 opacity-80">
      <div className="flex text-center justify-center">
        <div>
          <Image
            src={post.creator.image}
            alt="user"
            width={40}
            height={40}
            className="rounded-full border-2 border-red-300 opacity-100"
          />
        </div>
        <div>
          <h2 className="font-mono font-bold">
            {captilize(post.creator.username)}
          </h2>
          <span className="ml-2">{post.creator.email}</span>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="w-2/3 mt-2 bg-gray-800 border-1" />
      </div>
      <div className="mt-2 ">
        <p className="text-gray-600">{post?.post}</p>
        <p className="text-start text-blue-500">{post?.tag}</p>
      </div>
    </div>
  );
};

export default PostCard;
