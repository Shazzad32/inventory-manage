import NotPaid from "@/components/NotPaid";
import React from "react";
export const dynamic = "force-dynamic";
import {
  getDevices,
  kanaphuliassignIds,
  tiktikiAssingIDs,
} from "@/utils/getDevices";

const page = async () => {
  const allDevices = await getDevices();

  const devices = allDevices.filter(
    (item) => item.send_to === "Retail" && item.is_complete === false
  );

  const kanaphuliRes = await fetch(process.env.RETAIL_ASSIGN_ID, {
    headers: {
      Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
    },
    cache: "no-store",
  });

  const tiktikiRes = await fetch(process.env.TIKTIKI_ASSIGN_ID, {
    headers: {
      Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
    },
    cache: "no-store",
  });

  const kanaphuliassignIds = await kanaphuliRes.json();
  const tiktikiAssingIDs = await tiktikiRes.json();

  const totalassignIDs = [
    ...new Set([...kanaphuliassignIds, ...tiktikiAssingIDs]),
  ];

  return <NotPaid devices={devices} assignIds={totalassignIDs} />;
};

export default page;

// import NotPaid from "@/components/NotPaid";

// import { getDevices } from "@/utils/getDevices";

// const page = async () => {
//   try {
//     const [res, kanaphuliRes, tiktikiRes] = await Promise.all([
//       getDevices(),

//       fetch(process.env.RETAIL_ASSIGN_ID, {
//         headers: {
//           Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
//         },
//         cache: "no-store",
//       }),

//       fetch(process.env.TIKTIKI_ASSIGN_ID, {
//         headers: {
//           Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
//         },
//         cache: "no-store",
//       }),
//     ]);

//     const devices = res.filter((item) => item.is_complete === false);

//     let kanaphuliassignIds = [];
//     let tiktikiAssingIDs = [];

//     if (kanaphuliRes.ok) {
//       kanaphuliassignIds = await kanaphuliRes.json();
//     }

//     if (tiktikiRes.ok) {
//       tiktikiAssingIDs = await tiktikiRes.json();
//     }

//     const totalassignIDs = [
//       ...new Set([...kanaphuliassignIds, ...tiktikiAssingIDs]),
//     ];

//     return <NotPaid devices={devices} assignIds={totalassignIDs} />;
//   } catch (error) {
//     console.error("NOT PAID PAGE ERROR:", error);

//     return <div className="p-10 text-red-500">Something went wrong</div>;
//   }
// };

// export default page;
