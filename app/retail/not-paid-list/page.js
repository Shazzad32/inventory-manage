import NotPaid from "@/components/NotPaid";
import axios from "axios";
import React from "react";
export const dynamic = "force-dynamic";
const [search, setSearch] = useState("");

const page = async () => {
  // const devicesReq = (await axios.get(`${process.env.URL}/api/devices/retail`))
  //   .data;

  // const devices = devicesReq.filter(
  //   (item) => item.send_to === "Retail" && item.is_complete === false
  // );

  const res = await fetch(`${process.env.URL}/api/devices/retail`, {
    next: { revalidate: 60 },
  });

  const devicesReq = await res.json();

  const devices = devicesReq.filter(
    (item) => item.send_to === "Retail" && item.is_complete === false
  );

  const kanaphuliassignIds = (
    await axios.get(process.env.RETAIL_ASSIGN_ID, {
      headers: {
        Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
      },
    })
  ).data;

  const tiktikiAssingIDs = (
    await axios.get(process.env.TIKTIKI_ASSING_ID, {
      headers: {
        Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
      },
    })
  ).data;

  const totalassignIDs = [
    ...new Set([...kanaphuliassignIds, ...tiktikiAssingIDs]),
  ];

  return <NotPaid devices={devices} assignIds={totalassignIDs} />;
};

export default page;
