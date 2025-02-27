import RangsCard from "@/components/RangsCard";
import RetailCard from "@/components/RetailCard";
import StoreCard from "@/components/StoreCard";
import Link from "next/link";

import axios from "axios";

export const dynamic = "force-dynamic";

export default async function Home() {
  const devices = (await axios.get(`${process.env.URL}/api/devices`)).data;

  console.log(devices);

  const totalDevices = devices.length;
  const totalInRetail = devices.filter((x) => x.send_to === "Retail");
  const totalInRangs = devices.filter((x) => x.send_to === "Rangs").length;
  const totalInStock = devices.filter((x) => x.send_to === "Store").length;
  const voiceDeviceInStock = devices.filter(
    (x) => x.send_to === "Store" && x.device_type === "Voice"
  ).length;
  const nonVoiceDeviceInStock = devices.filter(
    (x) => x.send_to === "Store" && x.device_type === "Non_Voice"
  ).length;

  const voiceDeviceInRangs = devices.filter(
    (x) => x.send_to === "Rangs" && x.device_type === "Voice"
  ).length;

  const nonVoiceDeviceInRangs = devices.filter(
    (x) => x.send_to === "Rangs" && x.device_type === "Non_Voice"
  ).length;

  return (
    <div className="w-full h-full bg-skyblue-500 flex flex-col">
      <div className="h-[10%] w-full bg-gray-800 text-white flex lg:gap-2 gap-2 md:gap:3 items-center lg:px-2 px-2">
        <button className="px-2 py-1 rounded-md flex items-center justify-center  text-white border border-white text-sm">
          <Link href={"/store"}> STORE</Link>
        </button>
        <button className="px-2 py-1 rounded-md flex items-center justify-center  text-white border border-white text-sm">
          <Link href={"/rangs"}> RANGS</Link>
        </button>
        <button className="px-2 py-1 rounded-md flex items-center justify-center  text-white border border-white text-sm">
          <Link href={"/retail"}>RETAIL</Link>
        </button>

        <div className="flex gap-3 text-white uppercase float-end">
          <p className="hidden lg:flex lg:items-center lg:justify-center">
            Total Device
          </p>
          <p className="font-bold rounded-md lg:bg-gray-800 text-white border border-white lg:px-2 lg:py-1">
            {totalDevices}
          </p>
        </div>
      </div>

      <div className="lg:h-[99%] h-[95%] w-full bg-gray-400 flex flex-col gap-4 md:flex-row lg:flex items-center justify-center">
        <div className="w-[95%] h-[30%] lg:w-[32%] rounded-md lg:h-[95%] bg-white text-center p-2 font-bold uppercase">
          Total In Store
          <StoreCard
            totalDevices={totalInStock}
            voiceDevices={voiceDeviceInStock}
            nonVoiceDevices={nonVoiceDeviceInStock}
          />
        </div>
        <div className="w-[95%] h-[30%] lg:w-[32%] rounded-md lg:h-[95%] bg-white text-center p-2 font-bold uppercase">
          Retail Information
          <RetailCard totalInRetail={totalInRetail} />
        </div>

        <div className="w-[95%] h-[30%] lg:w-[32%] rounded-md lg:h-[95%] bg-white text-center uppercase p-2 font-bold">
          Rangs Information
          <RangsCard
            totalInRangs={totalInRangs}
            voiceInRangs={voiceDeviceInRangs}
            nonVoiceInRangs={nonVoiceDeviceInRangs}
          />
        </div>
      </div>
    </div>
  );
}
