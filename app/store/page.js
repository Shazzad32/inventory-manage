import axios from "axios";
export const dynamic = "force-dynamic";
import StoreInfo from "@/components/StoreInfo";
import { getDevices } from "@/utils/getDevices";

const Store = async () => {
  const devices = await getDevices();

  const storeDevices = devices.filter((device) => device.send_to === "Store");

  return <StoreInfo devices={storeDevices} />;
};

export default Store;
