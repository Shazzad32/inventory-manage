import Link from "next/link";
import React from "react";

const RetailMobile = ({
  totalSoldDevices,
  unSoldDevice,
  nonVocieInRetail,
  voiceDeviceInRetail,
}) => {
  return (
    <div className="h-[100%] w-[100%] lg:hidden flex flex-col gap-2 bg-sky-400 justify-center items-center p-2 rounded-md">
      <Link
        href={"/retail"}
        className="flex-[3] w-[90%] text-sm  bg-white rounded-md flex items-center gap-4 px-2"
      >
        Unsold Device:
        <span className="text-orange-400 text-xl">{unSoldDevice.length}</span>
      </Link>
      <div className="flex-[3] w-[90%] text-sm  rounded-md flex gap-2 items-center">
        <div className="w-[50%] bg-white rounded-md p-1">
          {" "}
          Voice:
          <span className="text-orange-400 text-xl ml-2">
            {voiceDeviceInRetail.length}
          </span>
        </div>
        <div className="w-[50%] bg-white rounded-md p-1">
          Non Voice:
          <span className="text-orange-400 text-xl ml-2">
            {nonVocieInRetail.length}
          </span>
        </div>
      </div>
      <Link
        href={"/retail/sold"}
        className="flex-[3] w-[90%] text-sm bg-white rounded-md flex items-center gap-4 px-2"
      >
        Sold Device:
        <span className="text-orange-400 text-xl">
          {totalSoldDevices.length}
        </span>
      </Link>
    </div>
  );
};

export default RetailMobile;
