export const dynamic = "force-dynamic";
import RangsInfo from "@/components/RangsInfo";
import { getDevices } from "@/utils/getDevices";

const Retail = async () => {
  const devices = await getDevices();
  const rangsDevices = devices.filter((device) => device.send_to === "Rangs");

  return <RangsInfo devices={rangsDevices} />;
};

export default Retail;
