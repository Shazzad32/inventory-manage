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
// "use client";

// import Link from "next/link";
// import React from "react";
// import StoreMobile from "./mobile_device/StoreMobile";

// const Box = ({ title, value, href }) => {
//   const content = (
//     <div className="w-full min-h-[170px] rounded-3xl bg-gradient-to-br from-[#fff7ed] via-[#fef3c7] to-[#ecfeff] shadow-md hover:shadow-xl duration-300 flex flex-col items-center justify-center border border-amber-100/60 relative overflow-hidden">
//       {/* soft premium glow */}
//       <div className="absolute -top-10 -right-10 w-44 h-44 bg-amber-200/40 rounded-full blur-3xl"></div>
//       <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-cyan-200/40 rounded-full blur-3xl"></div>

//       {/* subtle top highlight */}
//       <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-300/40 to-transparent"></div>

//       <p className="text-sm lg:text-base font-semibold uppercase tracking-[3px] text-slate-500 z-10">
//         {title}
//       </p>

//       <h1 className="text-5xl lg:text-6xl font-extrabold mt-3 text-slate-800 z-10">
//         {value}
//       </h1>
//     </div>
//   );

//   if (href) {
//     return <Link href={href}>{content}</Link>;
//   }

//   return content;
// };

// const StoreCard = ({ totalDevices, voiceDevices, nonVoiceDevices }) => {
//   return (
//     <>
//       <div className="hidden lg:flex flex-col gap-5 w-full">
//         <Box title="Total" value={totalDevices} href="/store" />
//         <Box title="Non Voice" value={nonVoiceDevices} />
//         <Box title="Voice" value={voiceDevices} />
//       </div>

//       <StoreMobile
//         totalDevices={totalDevices}
//         voiceDevices={voiceDevices}
//         nonVoiceDevices={nonVoiceDevices}
//       />
//     </>
//   );
// };

// export default StoreCard;
