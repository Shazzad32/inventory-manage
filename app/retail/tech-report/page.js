import TechInfo from "@/components/TechInfo";
import React from "react";
export const dynamic = "force-dynamic";
import { getDevices } from "@/utils/getDevices";

const TechnicianReport = async () => {
  const devices = await getDevices();
  const soldDevices = devices.filter(
    (device) => device.send_to === "Retail" && device.is_complete
  );

  // const soldDevices = devices.filter((item) => item.is_complete);

  return <TechInfo devices={soldDevices} />;
};

export default TechnicianReport;

// "old code "
// import TechInfo from "@/components/TechInfo";
// import React from "react";
// export const dynamic = "force-dynamic";
// import { getRetailDevices } from "@/utils/getDevices";

// const TechnicianReport = async () => {
//   // const alldevices = (await axios.get(`${process.env.URL}/api/devices/retail`))
//   //   .data;
//   const devices = await getRetailDevices();

//   const soldDevices = devices.filter((item) => item.is_complete);
//   // const devices = alldevices.filter((item) => item.is_complete);

//   return <TechInfo devices={soldDevices} />;
// };

// export default TechnicianReport;
