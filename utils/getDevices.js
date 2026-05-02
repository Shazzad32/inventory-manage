import axios from "axios";

const api = axios.create({
  timeout: 30000,
});

async function safeGet(url, config = {}) {
  try {
    const res = await api.get(url, config);
    return res.data;
  } catch (error) {
    console.error("API Error:", url, error.message);
    return [];
  }
}

const AUTH_HEADER = {
  headers: {
    Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
  },
};

export const getDevices = () => safeGet(`${process.env.URL}/api/devices`);

export const getRetailDevices = () =>
  safeGet(`${process.env.URL}/api/devices/retail`);

export const getStoreDevices = () =>
  safeGet(`${process.env.URL}/api/devices/store`);

export const getKanaphuliAssignIds = () =>
  safeGet(`${process.env.RETAIL_ASSIGN_ID}`, AUTH_HEADER);

export const getTiktikiAssignIds = () =>
  safeGet(`${process.env.TIKTIKI_ASSING_ID}`, AUTH_HEADER);
