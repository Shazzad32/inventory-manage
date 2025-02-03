// import RangsCard from "@/components/RangsCard";
// import RetailCard from "@/components/RetailCard";
// import StoreCard from "@/components/StoreCard";
// import Link from "next/link";

// export default async function Home() {
//   const baseUrl = process.env.URL || "http://localhost:3000";

//   const devicesRes = await fetch(`${baseUrl}/api/devices`);
//   const devices = await devicesRes.json();
//   const totalDevices = devices.length;

//   const totalInRetail = devices.filter((x) => x.send_to === "Retail");
//   const totalInRangs = devices.filter((x) => x.send_to === "Rangs").length;
//   const totalInStock = devices.filter((x) => x.send_to === "Store").length;
//   const voiceDeviceInStock = devices.filter(
//     (x) => x.send_to === "Store" && x.device_type === "Voice"
//   ).length;
//   const nonVoiceDeviceInStock = devices.filter(
//     (x) => x.send_to === "Store" && x.device_type === "Non_Voice"
//   ).length;
//   const voiceDeviceInRangs = devices.filter(
//     (x) => x.send_to === "Rangs" && x.device_type === "Voice"
//   ).length;
//   const nonVoiceDeviceInRangs = devices.filter(
//     (x) => x.send_to === "Rangs" && x.device_type === "Non_Voice"
//   ).length;

//   return (
//     <div className="w-full h-full bg-skyblue-500 flex flex-col">
//       <div className="h-[10%] w-full bg-gray-800 text-white flex lg:gap-2 gap-2 md:gap:3 items-center lg:px-2 px-2">
//         <button className="border-2 h-[30px] lg:p-2 p-2 rounded-md flex items-center justify-center">
//           <Link href={"/store"}> STORE</Link>
//         </button>
//         <button className="border-2 h-[30px] lg:p-2 p-2 rounded-md flex items-center justify-center">
//           <Link href={"/rangs"}> RANGS</Link>
//         </button>
//         <button className="border-2 h-[30px] lg:p-2 p-2 rounded-md flex items-center justify-center">
//           <Link href={"/retail"}>RETAIL</Link>
//         </button>

//         <div className="h-[30px] w-[120px] bg-white p-2 rounded-md text-black flex items-center justify-center">
//           Total :{" "}
//           <p className="text-orange-500 ml-2 font-bold">{totalDevices}</p>
//         </div>
//       </div>
//       <div className="lg:h-[90%] h-[95%] w-full bg-gray-400 flex flex-col gap-4 md:flex-row lg:flex items-center justify-center">
//         <div className="w-[98%] h-[33%] lg:w-[33%] rounded-md lg:h-[95%] bg-white text-center uppercase p-2 font-bold">
//           Total Stock
//           <StoreCard
//             totalDevices={totalInStock}
//             voiceDevices={voiceDeviceInStock}
//             nonVoiceDevices={nonVoiceDeviceInStock}
//           />
//         </div>
//         <div className="w-[95%] h-[30%] lg:w-[32%] rounded-md lg:h-[95%] bg-white text-center p-2 font-bold">
//           Retail Information
//           <RetailCard totalInRetail={totalInRetail} />
//         </div>
//         <div className="w-[90%] h-[30%] lg:w-[32%] rounded-md lg:h-[95%] bg-white text-center uppercase p-2 font-bold">
//           Rangs Information
//           <RangsCard
//             totalInRangs={totalInRangs}
//             voiceInrangs={voiceDeviceInRangs}
//             nonVoiceInRangs={nonVoiceDeviceInRangs}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import RangsCard from "@/components/RangsCard";
import RetailCard from "@/components/RetailCard";
import StoreCard from "@/components/StoreCard";
import Link from "next/link";

import axios from "axios";

export const dynamic = "force-dynamic";

export default async function Home() {
  // const baseUrl = process.env.URL || "http://localhost:3000";
  // let devices = [];
  // try {
  //   const devicesRes = await fetch(`${baseUrl}/api/devices`, {
  //     cache: "no-store",
  //   });
  //   if (!devicesRes.ok) throw new Error("Failed to fetch devices");
  //   devices = await devicesRes.json();
  // } catch (error) {
  //   console.error("Error fetching devices:", error);
  // }

  const devices = (
    await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/devices`)
  ).data;

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
        <button className="border-2 h-[30px] lg:p-2 p-2 rounded-md flex items-center justify-center">
          <Link href={"/store"}> STORE</Link>
        </button>
        <button className="border-2 h-[30px] lg:p-2 p-2 rounded-md flex items-center justify-center">
          <Link href={"/rangs"}> RANGS</Link>
        </button>
        <button className="border-2 h-[30px] lg:p-2 p-2 rounded-md flex items-center justify-center">
          <Link href={"/retail"}>RETAIL</Link>
        </button>

        <div className="h-[30px] w-[120px] bg-white p-2 rounded-md text-black flex items-center justify-center">
          Total :{" "}
          <p className="text-orange-500 ml-2 font-bold">{totalDevices}</p>
        </div>
      </div>

      <div className="lg:h-[90%] h-[95%] w-full bg-gray-400 flex flex-col gap-4 md:flex-row lg:flex items-center justify-center">
        <div className="w-[98%] h-[33%] lg:w-[33%] rounded-md lg:h-[95%] bg-white text-center uppercase p-2 font-bold">
          Total Stock
          <StoreCard
            totalDevices={totalInStock}
            voiceDevices={voiceDeviceInStock}
            nonVoiceDevices={nonVoiceDeviceInStock}
          />
        </div>
        <div className="w-[95%] h-[30%] lg:w-[32%] rounded-md lg:h-[95%] bg-white text-center p-2 font-bold">
          Retail Information
          <RetailCard totalInRetail={totalInRetail} />
        </div>

        <div className="w-[90%] h-[30%] lg:w-[32%] rounded-md lg:h-[95%] bg-white text-center uppercase p-2 font-bold">
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
