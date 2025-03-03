import React from "react";

const RangsMobile = ({ totalInRangs, voiceInRangs, nonVoiceInRangs }) => {
  return (
    <div className="h-[100%] w-[100%] lg:hidden flex flex-col gap-2 bg-gray-400 justify-center p-2 rounded-md">
      <div className="flex-[3] w-[90%] text-sm ml-3 bg-white rounded-md flex items-center gap-4 px-2">
        Total Device:
        <span className="text-orange-400 text-xl">{totalInRangs}</span>
      </div>
      <div className="flex-[3] w-[90%] text-sm ml-3 bg-white rounded-md flex items-center gap-4 px-2">
        Voice Device:
        <span className="text-orange-400 text-xl">{voiceInRangs}</span>
      </div>
      <div className="flex-[3] w-[90%] text-sm ml-3 bg-white rounded-md flex items-center gap-4 px-2">
        Non Voice Device:
        <span className="text-orange-400 text-xl">{nonVoiceInRangs}</span>
      </div>
    </div>
  );
};

export default RangsMobile;
