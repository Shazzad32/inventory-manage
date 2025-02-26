import axios from "axios";
export const dynamic = "force-dynamic";
import StoreInfo from "@/components/StoreInfo";

const Store = async () => {
  const devices = (await axios.get(`${process.env.URL}/api/devices/store`))
    .data;

  return <StoreInfo devices={devices} />;
};

export default Store;
