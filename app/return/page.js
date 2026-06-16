export const dynamic = "force-dynamic";
import ReturnInfo from "@/components/ReturnInfo";
import { getDevices } from "@/utils/getDevices";

const Return = async () => {
  const devices = await getDevices();

  const returnDevice = devices.filter((device) => device.send_to === "Return");
  // const returnDevice = await getReturnDevices();
  return <ReturnInfo devices={returnDevice} />;
};

export default Return;
