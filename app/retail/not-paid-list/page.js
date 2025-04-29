import NotPaid from "@/components/NotPaid";
import axios from "axios";
import React from "react";
export const dynamic = "force-dynamic";

const page = async () => {
  const devicesReq = (await axios.get(`${process.env.URL}/api/devices/retail`))
    .data;

  const assignIds = (
    await axios.get(
      "https://mongo6.sultantracker.com/api/devices/assign-devices-ids",
      {
        headers: {
          Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
        },
      }
    )
  ).data;

  const devices = devicesReq.filter(
    (item) => item.send_to === "Retail" && item.is_complete === false
  );

  return <NotPaid devices={devices} assignIds={assignIds} />;
};

export default page;
