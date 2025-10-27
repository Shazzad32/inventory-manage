import axios from "axios";
import RetailInfo from "@/components/RetailInfo";

export const dynamic = "force-dynamic";

const Retail = async () => {
  const alldevices = (await axios.get(`${process.env.URL}/api/devices/retail`))
    .data;

  const devices = alldevices.filter((item) => item.is_complete === false);

  const kanaphuliassignIds = (
    await axios.get(
      "https://retail-api.sultantracker.com/devices/assign-devices-ids",
      {
        headers: {
          Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
        },
      }
    )
  ).data;
  const tiktikiAssingIDs = (
    await axios.get(
      "https://tiktiki-api.sultantracker.com/devices/assign-devices-ids",
      {
        headers: {
          Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
        },
      }
    )
  ).data;

  const totalassignIDs = [
    ...new Set([...kanaphuliassignIds, ...tiktikiAssingIDs]),
  ];

  return <RetailInfo devices={devices} totalassignIDs={totalassignIDs} />;
};

export default Retail;
