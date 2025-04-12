"use client";

import React, { useState } from "react";

const page = () => {
  const [inputvalue, setinputvalue] = useState<string>("");
  const [post, setpost] = useState<string[]>([]); //array

  const handlesend = () => {
    if (inputvalue.trim() == "") return;

    setpost([...post, inputvalue]);
    setinputvalue("");
  };

  return (
    <div className=" h-screen">
      <div className=" flex justify-center mt-4">Post</div>
      <div className="  flex mt-4 justify-center">
        <input
          type="text"
          placeholder="Write your text"
          value={inputvalue}
          className=" text-white"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>setinputvalue(e.target.value)}
        />
      </div>
      <div className=" flex justify-center">
        <button
          className=" flex items-center justify-center mt-4 h-8 w-16 bg-blue-400"
          onClick={handlesend}
        >
          post
        </button>
      </div>
      <div className=" flex justify-center">
        <div className=" mt-6 space-y-2 ">
          {post.map((post, index) => (
            <div
              key={index}
              className=" border p-2 rounded bg-gray-100 text-black"
            >
              {post}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
