export const dynamic = "force-dynamic";
import RetailInfo from "@/components/RetailInfo";

import {
  getDevices,
  getKanaphuliAssignIds,
  getTiktikiAssignIds,
} from "@/utils/getDevices";

const Retail = async () => {
  const [alldevices, kanaphuliassignIds, tiktikiAssignIDs] = await Promise.all([
    getDevices(),
    getKanaphuliAssignIds(),
    getTiktikiAssignIds(),
  ]);

  const devices = alldevices.filter(
    (item) => (item.send_to === "Retail") & (item.is_complete === false)
  );

  // const kanaphuliassignIds = (
  //   await axios.get(
  //     "https://retail-api.sultantracker.com/devices/assign-devices-ids",
  //     {
  //       headers: {
  //         Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
  //       },
  //     }
  //   )
  // ).data;
  // const tiktikiAssingIDs = (
  //   await axios.get(
  //     "https://tiktiki-api.sultantracker.com/devices/assign-devices-ids",
  //     {
  //       headers: {
  //         Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
  //       },
  //     }
  //   )
  // ).data;

  const totalassignIDs = [
    ...new Set([...kanaphuliassignIds, ...tiktikiAssignIDs]),
  ];

  return <RetailInfo devices={devices} totalassignIDs={totalassignIDs} />;
};

export default Retail;
