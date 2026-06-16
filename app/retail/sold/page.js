import axios from "axios";
import Sold from "@/components/Sold";
export const dynamic = "force-dynamic";
import { getDevices } from "@/utils/getDevices";

const RetailSold = async () => {
  // const alldevices = (await axios.get(`${process.env.URL}/api/devices/retail`))
  //   .data;

  const devices = await getDevices();

  const soldDevices = devices.filter(
    (item) => (item.send_to === "Retail") & item.is_complete
  );

  // const devices = alldevices.filter((item) => item.is_complete);

  return <Sold devices={soldDevices} />;
};

export default RetailSold;
