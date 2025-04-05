import TechInfo from "@/components/TechInfo";
import axios from "axios";
import React from "react";
export const dynamic = "force-dynamic";

const TechnicianReport = async () => {
  const alldevices = (await axios.get(`${process.env.URL}/api/devices/retail`))
    .data;

  const devices = alldevices.filter((item) => item.is_complete);

  return <TechInfo devices={devices} />;
};

export default TechnicianReport;
