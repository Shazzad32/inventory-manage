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

// "use client";

// import React from "react";
// import Link from "next/link";
// import RangsMobile from "./mobile_device/RangsMobile";

// const Box = ({ title, value, href }) => {
//   const content = (
//     <div className="w-full min-h-[170px] rounded-3xl bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe] shadow-md hover:shadow-xl duration-300 flex flex-col items-center justify-center border border-white/60 relative overflow-hidden">
//       {/* soft blur shapes */}
//       <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200/40 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-200/40 rounded-full blur-3xl"></div>

//       <p className="text-sm lg:text-base font-semibold uppercase tracking-[3px] text-slate-500 z-10">
//         {title}
//       </p>

//       <h1 className="text-5xl lg:text-6xl font-extrabold mt-3 text-slate-700 z-10">
//         {value}
//       </h1>
//     </div>
//   );

//   if (href) {
//     return <Link href={href}>{content}</Link>;
//   }

//   return content;
// };

// const RangsCard = ({ totalInRangs, voiceInRangs, nonVoiceInRangs }) => {
//   return (
//     <>
//       <div className="hidden lg:flex flex-col gap-5 w-full">
//         <Box title="Total" value={totalInRangs} href="/rangs" />
//         <Box title="Non Voice" value={nonVoiceInRangs} />
//         <Box title="Voice" value={voiceInRangs} />
//       </div>

//       <RangsMobile
//         totalInRangs={totalInRangs}
//         voiceInRangs={voiceInRangs}
//         nonVoiceInRangs={nonVoiceInRangs}
//       />
//     </>
//   );
// };

// export default RangsCard;
