import axios from "axios";
import Rangs from "@/components/Rangs";
export const dynamic = "force-dynamic";

const Retail = async () => {
  const devices = (await axios.get(`${process.env.URL}/api/devices/rangs`))
    .data;

  return <Rangs devices={devices} />;
};

export default Retail;
