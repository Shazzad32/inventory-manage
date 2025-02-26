import axios from "axios";
import RetailInfo from "@/components/RetailInfo";

export const dynamic = "force-dynamic";

const Retail = async () => {
  const alldevices = (await axios.get(`${process.env.URL}/api/devices/retail`))
    .data;

  const devices = alldevices.filter((item) => item.is_complete === false);

  return <RetailInfo devices={devices} />;
};

export default Retail;
