import axios from "axios";
import Sold from "@/components/Sold";
export const dynamic = "force-dynamic";

const RetailSold = async () => {
  const alldevices = (await axios.get(`${process.env.URL}/api/devices/retail`))
    .data;

  const devices = alldevices.filter((item) => item.is_complete);

  return <Sold devices={devices} />;
};

export default RetailSold;
