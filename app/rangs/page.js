import axios from "axios";
import RangsInfo from "@/components/RangsInfo";
export const dynamic = "force-dynamic";

const Retail = async () => {
  const devices = (await axios.get(`${process.env.URL}/api/devices/rangs`))
    .data;

  return <RangsInfo devices={devices} />;
};

export default Retail;
