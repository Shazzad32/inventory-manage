import NotPaid from "@/components/NotPaid";
import React from "react";
export const dynamic = "force-dynamic";
import { getRetailDevices } from "@/utils/getDevices";

const page = async () => {
  const res = await getRetailDevices();

  const devices = res.filter((item) => item.is_complete === false);

  const kanaphuliRes = await fetch(process.env.NEXT_PUBLIC_RETAIL_ASSIGN_ID, {
    headers: {
      Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
    },
    cache: "no-store",
  });

  const tiktikiRes = await fetch(process.env.NEXT_PUBLIC_TIKTIKI_ASSIGN_ID, {
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
