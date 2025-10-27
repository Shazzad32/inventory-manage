"use client";
import Link from "next/link";
import React from "react";
import StoreMobile from "./mobile_device/StoreMobile";

const StoreCard = ({ totalDevices, voiceDevices, nonVoiceDevices }) => {
  return (
    <div className="h-[85%] lg:h-[95%] w-full flex flex-col gap-4 items-center justify-evenly">
      <Link
        href={"/store"}
        className="w-[95%] h-[33%] bg-gray-500 rounded-md hidden lg:flex items-center flex-col justify-center gap-2 text-white"
      >
        <p>
          Total <strong className="text-6xl">{totalDevices}</strong>
        </p>
      </Link>
      <div className="w-[95%] h-[33%] bg-gray-500 rounded-md hidden lg:flex flex-col items-center justify-center gap-2 text-white">
        <p>
          Non VOice <strong className="text-6xl">{nonVoiceDevices}</strong>
        </p>
      </div>
      <div className="hidden w-[95%] h-[33%] bg-gray-500 rounded-md lg:flex flex-col items-center justify-center gap-2 text-white">
        <p>
          Voice<strong className="ml-2 text-6xl">{voiceDevices}</strong>
        </p>
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
