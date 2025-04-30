import axios from "axios";
import ReturnInfo from "@/components/ReturnInfo";

export const dynamic = "force-dynamic";

const Return = async () => {
  const alldevices = (await axios.get(`${process.env.URL}/api/devices/return`))
    .data;

  return <ReturnInfo devices={alldevices} />;
};

export default Return;
