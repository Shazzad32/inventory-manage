import TechInfo from "@/components/TechInfo";
import React from "react";
export const dynamic = "force-dynamic";
import { getRetailDevices } from "@/utils/getDevices";

const TechnicianReport = async () => {
  // const alldevices = (await axios.get(`${process.env.URL}/api/devices/retail`))
  //   .data;
  const devices = await getRetailDevices();

  const soldDevices = devices.filter((item) => item.is_complete);
  // const devices = alldevices.filter((item) => item.is_complete);

  return <TechInfo devices={soldDevices} />;
};

export default TechnicianReport;
