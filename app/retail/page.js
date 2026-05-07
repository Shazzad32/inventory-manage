import RetailInfo from "@/components/RetailInfo";
import {
  getRetailDevices,
  getKanaphuliAssignIds,
  getTiktikiAssignIds,
} from "@/utils/getDevices";

const Retail = async () => {
  const [alldevices, kanaphuliassignIds, tiktikiAssingIDs] = await Promise.all([
    getRetailDevices(),
    getKanaphuliAssignIds(),
    getTiktikiAssignIds(),
  ]);

  const devices = alldevices.filter((item) => item.is_complete === false);

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
    ...new Set([...kanaphuliassignIds, ...tiktikiAssingIDs]),
  ];

  return <RetailInfo devices={devices} totalassignIDs={totalassignIDs} />;
};

export default Retail;
