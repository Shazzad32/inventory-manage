"use client";
import Link from "next/link";
import React from "react";
import StoreMobile from "./mobile_device/StoreMobile";

const StoreCard = ({ totalDevices, voiceDevices, nonVoiceDevices }) => {
  return (
    <div className="h-[85%] lg:h-[95%] w-full flex flex-col gap-4 items-center justify-evenly">
      <Link
        href={"/store"}
        className="w-[95%] h-[33%] bg-rose-500 rounded-md hidden lg:flex items-center justify-center gap-2 text-white"
      >
        Total Device :<p className="text-2xl">{totalDevices}</p>
      </Link>
      <div className="w-[95%] h-[33%] bg-rose-500 rounded-md hidden lg:flex items-center justify-center gap-2 text-white">
        Non VOice Device :<p className="text-2xl">{nonVoiceDevices}</p>
      </div>
      <div className="hidden w-[95%] h-[33%] bg-rose-500 rounded-md lg:flex items-center justify-center gap-2 text-white">
        VOice Device :<p className="text-2xl">{voiceDevices}</p>
      </div>
      <StoreMobile
        totalDevices={totalDevices}
        voiceDevices={voiceDevices}
        nonVoiceDevices={nonVoiceDevices}
      />
    </div>
  );
};

export default StoreCard;
