export const dynamic = "force-dynamic";
import RangsInfo from "@/components/RangsInfo";
import { getRangsDevices } from "@/utils/getDevices";

const Retail = async () => {
  // const devices = (await axios.get(`${process.env.URL}/api/devices/rangs`))
  //   .data;

  const devices = await getRangsDevices();

  return <RangsInfo devices={devices} />;
};

export default Retail;
