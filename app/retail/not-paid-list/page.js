import NotPaid from "@/components/NotPaid";
import axios from "axios";
import React from "react";
export const dynamic = "force-dynamic";

const page = async () => {
  const res = await fetch(`${process.env.URL}/api/devices/retail`, {
    next: { revalidate: 60 },
  });

  const devicesReq = await res.json();

  const devices = devicesReq.filter(
    (item) => item.send_to === "Retail" && item.is_complete === false
  );

  // const kanaphuliassignIds = (
  //   await axios.get(process.env.RETAIL_ASSIGN_ID, {
  //     headers: {
  //       Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
  //     },
  //   })
  // ).data;

  // const tiktikiAssingIDs = (
  //   await axios.get(process.env.TIKTIKI_ASSING_ID, {
  //     headers: {
  //       Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
  //     },
  //   })
  // ).data;

  const kanaphuliRes = await fetch(process.env.RETAIL_ASSIGN_ID, {
    headers: {
      Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
    },
    cache: "no-store",
  });

  const tiktikiRes = await fetch(process.env.TIKTIKI_ASSING_ID, {
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
