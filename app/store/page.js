import axios from "axios";
export const dynamic = "force-dynamic";
import StoreInfo from "@/components/StoreInfo";
import { getStoreDevices } from "@/utils/getDevices";

const Store = async () => {
  const devices = (await axios.get(`${process.env.URL}/api/devices/store`))
    .data;
  // const devices = await getStoreDevices();

  return <StoreInfo devices={devices} />;
};

export default Store;
