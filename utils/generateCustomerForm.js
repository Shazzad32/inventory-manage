"use client";

import axios from "axios";
import { useState, useEffect } from "react";

const RetailPage = () => {
  const [inventory, setInventory] = useState([]);
  const [gpsDevices, setGpsDevices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Inventory থেকে device list আনো
      const invRes = await axios.get(
        "https://retail-api.sultantracker.com/devices/inventory",
        {
          headers: {
            Authorization: "Bearer ####rangs.sultantrack.com!!!!$$###",
          },
        }
      );

      // GPS প্ল্যাটফর্ম থেকে device + customer info আনো
      const gpsRes = await axios.get(
        "https://gps-api.sultantracker.com/devices",
        {
          headers: { Authorization: "Bearer ####gpsplatform.token###" },
        }
      );

      setInventory(invRes.data);
      setGpsDevices(gpsRes.data);
    };

    fetchData();
  }, []);

  const handleDownload = (invItem) => {
    // device_id match করো
    const gpsMatch = gpsDevices.find((g) => g.id === invItem.device_id);

    if (!gpsMatch) {
      alert("No matching customer found for this device ID!");
      return;
    }

    // দুই ডেটা merge করো
    const mergedData = {
      ...invItem,
      customer_name: gpsMatch?.uid?.name,
      company_name: gpsMatch?.uid?.organization_name,
      contact_no: gpsMatch?.uid?.contact,
      alt_no: "",
      customer_address: gpsMatch?.uid?.address,
      email: gpsMatch?.uid?.email,
      vehicle_model: gpsMatch.vehicle_model,
      chasis_no: gpsMatch.chasis_number,
      registration_no: gpsMatch.registration_number,
      device_phone_no: gpsMatch.device_sim_number,
    };

    // এখন PDF generate করো
    generateCustomerForm(mergedData);
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">Inventory Devices</h2>
      {inventory.map((item, i) => (
        <div key={i} className="flex justify-between border p-2 mb-2 rounded">
          <span>{item.device_id}</span>
          <button
            onClick={() => handleDownload(item)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
          >
            Download PDF
          </button>
        </div>
      ))}
    </div>
  );
};

export default RetailPage;
