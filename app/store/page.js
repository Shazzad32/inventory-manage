import axios from "axios";
import StoreTable from "@/components/Store";
export const dynamic = "force-dynamic";

const Store = async () => {
  const devices = (await axios.get(`${process.env.URL}/api/devices/store`))
    .data;

  return <StoreTable devices={devices} />;
};

export default Store;
