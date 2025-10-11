import NotPaid from "@/components/NotPaid";
import axios from "axios";
import React from "react";
export const dynamic = "force-dynamic";

const page = async () => {
  const devicesReq = (await axios.get(`${process.env.URL}/api/devices/retail`))
    .data;

  const devices = devicesReq.filter(
    (item) => item.send_to === "Retail" && item.is_complete === false
  );

  const kanaphuliassignIds = (
    await axios.get(
      "https://retail-api.sultantracker.com/devices/assign-devices-ids",
      {
        headers: {
          Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
        },
      }
    )
  ).data;
  const tiktikiAssingIDs = (
    await axios.get(
      "https://tiktiki-api.sultantracker.com/devices/assign-devices-ids",
      {
        headers: {
          Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
        },
      }
    )
  ).data;

  const totalassignIDs = [
    ...new Set([...kanaphuliassignIds, ...tiktikiAssingIDs]),
  ];

  return <NotPaid devices={devices} assignIds={totalassignIDs} />;
};

export default page;
