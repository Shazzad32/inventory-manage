export const dynamic = "force-dynamic";
import ReturnInfo from "@/components/ReturnInfo";
import { getReturnDevices } from "@/utils/getDevices";

const Return = async () => {
  const returnDevice = await getReturnDevices();
  return <ReturnInfo devices={returnDevice} />;
};

export default Return;
