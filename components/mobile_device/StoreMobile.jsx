import React from "react";

const StoreMobile = ({ totalDevices, voiceDevices, nonVoiceDevices }) => {
  return (
    <div className="h-[100%] w-[95%] lg:hidden flex flex-col gap-2 bg-orange-400 justify-center p-2 rounded-md">
      <div className="flex-[3] w-[80%] text-sm ml-3 bg-white rounded-md flex items-center gap-4 px-2">
        Total Device:
        <span className="text-orange-400 text-xl">{totalDevices}</span>
      </div>
      <div className="flex-[3] w-[80%] text-sm ml-3 bg-white rounded-md flex items-center gap-4 px-2">
        Voice Device:
        <span className="text-orange-400 text-xl">{voiceDevices}</span>
      </div>
      <div className="flex-[3] w-[80%] text-sm ml-3 bg-white rounded-md flex items-center gap-4 px-2">
        Non Voice Device:
        <span className="text-orange-400 text-xl">{nonVoiceDevices}</span>
      </div>
      {/*  // <div className="flex-[5] bg-orange-400 text-sm gap-3 flex flex-col items-start justify-center align-left rounded-md">
    //   <div className="text-sm ml-3 bg-white">
    //     Total Device:
    //     <span className="text-orange-400 text-xl">{totalDevices}</span>
    //   </div>
    //   <div className="text-sm ml-3 bg-white">
    //     Voice Device:{voiceDevices}
    //   </div>
    //   <div className="text-sm ml-3 bg-white">
    //     Non Voice Device:{nonVoiceDevices}
    //   </div>
    // </div>
    // <div className="flex-[5] bg-orange-600"></div>*/}
    </div>
  );
};

export default StoreMobile;
