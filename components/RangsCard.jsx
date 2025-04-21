"use client";
import React from "react";
import Link from "next/link";
import RangsMobile from "./mobile_device/RangsMobile";

const RangsCard = ({ totalInRangs, voiceInRangs, nonVoiceInRangs }) => {
  return (
    <div className="h-[85%] lg:h-[95%] w-full flex flex-col gap-4 items-center justify-evenly">
      <Link
        href={"/rangs"}
        className="w-[95%] h-[33%] bg-sky-500 rounded-md hidden lg:flex items-center justify-center gap-2 text-white"
      >
        Total Device :<p className="text-2xl">{totalInRangs}</p>
      </Link>
      <div className="w-[98%] h-[33%] bg-sky-500 rounded-md hidden lg:flex items-center justify-center gap-2 text-white">
        Non VOice Device :<p className="text-2xl">{nonVoiceInRangs}</p>
      </div>
      <div className="hidden w-[98%] h-[33%] bg-sky-500 rounded-md lg:flex items-center justify-center gap-2 text-white">
        VOice Device :<p className="text-2xl">{voiceInRangs}</p>
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
