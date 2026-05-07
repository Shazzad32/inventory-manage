import axios from "axios";

const api = axios.create({
  timeout: 30000,
});

async function safeGet(url, config = {}) {
  try {
    const res = await api.get(url, config);
    return res.data;
  } catch (error) {
    console.error("FULL ERROR:", {
      url,
      message: error.message,
      code: error.code,
      status: error.response?.status,
    });
    return [];
  }
}

const AUTH_HEADER = {
  headers: {
    Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
  },
};

export const getDevices = () => safeGet(`${process.env.URL}/api/devices`);

export const getSingleDevice = (id) =>
  safeGet(`${process.env.URL}/api/devices/${id}`);

export const getTechnicians = () =>
  safeGet(`${process.env.URL}/api/technician`);

export const getRetailDevices = () =>
  safeGet(`${process.env.URL}/api/devices/retail`);

export const getStoreDevices = () =>
  safeGet(`${process.env.URL}/api/devices/store`);

export const getRangsDevices = () =>
  safeGet(`${process.env.URL}/api/devices/rangs`);

export const getReturnDevices = () =>
  safeGet(`${process.env.URL}/api/devices/return`);

export const getKanaphuliAssignIds = () =>
  safeGet(`${process.env.RETAIL_ASSIGN_ID}`, AUTH_HEADER);

export const getTiktikiAssignIds = () =>
  safeGet(`${process.env.TIKTIKI_ASSIGN_ID}`, AUTH_HEADER);

// export const getKanaphuliAssignIds = () =>
//   safeGet(
//     "https://retail-api.sultantracker.com/devices/assign-devices-ids",
//     AUTH_HEADER
//   );

// export const getTiktikiAssignIds = () =>
//   safeGet(
//     "https://tiktiki-api.sultantracker.com/devices/assign-devices-ids",
//     AUTH_HEADER
//   );

// # RETAIL_ASSIGN_ID='https://retail-api.sultantracker.com/devices/assign-devices-ids'
// # TIKTIKI_ASSIGN_ID='https://tiktiki-api.sultantracker.com/devices/assign-devices-ids'
// # # RETAIL_ASSIGN_ID='https://retail-api.sultantracker.com/devices/assign-devices-ids'
// # # TIKTIKI_ASSIGN_ID='https://tiktiki-api.sultantracker.com/devices/assign-devices-ids'
// # URL_TWO = "https://mongo6.sultantracker.com/api/devices/assign-devices-ids"
// # AUTH_TOKEN='BEARER ####cp-!!!!$$sultantracker.com###'
// # TRANSACTION_URL = "https://mongo2.sultantracker.com//civil/api/projects/6954de2078252e1ac7c78ea8/transactions/"
// # PROJECT_ID = "6954de2078252e1ac7c78ea8"
// # DEVICE_SALE_DEPOSIT_ID = "695531cd78252e4bbcc78fdc"
// # RETAIL_DEVICES_SALES_ID = "695531ba78252e105cc78fda"
