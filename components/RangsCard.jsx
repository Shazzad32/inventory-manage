"use client";
import React from "react";
import Link from "next/link";
import RangsMobile from "./mobile_device/RangsMobile";

const RangsCard = ({ totalInRangs, voiceInRangs, nonVoiceInRangs }) => {
  return (
    <div className="h-[85%] lg:h-[95%] w-full flex flex-col gap-4 text-white">
      <Link
        href={"/rangs"}
        className="bg-gray-500 h-[33%] w-full  rounded-md  flex items-center justify-center"
      >
        <p>
          Total
          <strong className="ml-2 text-6xl">{totalInRangs}</strong>
        </p>
      </Link>
      <div className="h-[40%] w-full  rounded-md  bg-gray-500 flex gap-4 justify-center items-center">
        <p>
          non-voice
          <strong className="ml-2 text-6xl">{nonVoiceInRangs}</strong>
        </p>
      </div>
      <div className="h-[40%] w-full  rounded-md  bg-gray-500 flex gap-4 justify-center items-center">
        <p>
          voice
          <strong className="ml-2 text-6xl">{voiceInRangs}</strong>
        </p>
      </div>
      <RangsMobile
        totalInRangs={totalInRangs}
        voiceInRangs={voiceInRangs}
        nonVoiceInRangs={nonVoiceInRangs}
      />
    </div>
  );
};

export default RangsCard;
