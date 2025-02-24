import axios from "axios";
import RetailTable from "@/components/Retail";

export const dynamic = "force-dynamic";

const Retail = async () => {
  const alldevices = (await axios.get(`${process.env.URL}/api/devices/retail`))
    .data;

  const devices = alldevices.filter((item) => item.is_complete === false);

  return <RetailTable devices={devices} />;
};

export default Retail;
