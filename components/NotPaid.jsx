"use client";

import Link from "next/link";
import React, { useEffect, useState, useMemo } from "react";
import NotPaidTable from "./NotPaidTable";

const NotPaid = ({ devices, assignIds }) => {
  const [assignId] = useState({ ...assignIds });

  const [unSoldDevice] = useState({ ...devices });

  const deviceList = useMemo(() => Object.values(unSoldDevice), [unSoldDevice]);
  const assignList = useMemo(() => Object.values(assignId), [assignId]);

  const commonDevices = useMemo(() => {
    return deviceList.filter((device) => assignList.includes(device.device_id));
  }, [deviceList, assignList]);

  const [search, setSearch] = useState("");

  const [filteredDevices, setFilteredDevices] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let filtered = [];

    if (search.trim() === "") {
      filtered = [...commonDevices];
    } else {
      const lowerSearch = search.toLowerCase();
      filtered = commonDevices.filter(
        (device) =>
          device.device_id.toLowerCase().includes(lowerSearch) ||
          device.device_type.toLowerCase().includes(lowerSearch) ||
          device.device_model.toLowerCase().includes(lowerSearch) ||
          device.issue_by?.toLowerCase().includes(lowerSearch) ||
          device.district?.toLowerCase().includes(lowerSearch)
      );
    }

    filtered.sort((a, b) => {
      const nameA = a.issue_by?.toLowerCase() || "";
      const nameB = b.issue_by?.toLowerCase() || "";
      return nameA.localeCompare(nameB);
    });

    setFilteredDevices(filtered);
  }, [search, commonDevices]);

  return (
    <div className="h-[100%] w-full flex justify-center flex-col items-center ">
      <div className="h-[10%] w-full bg-gray-700 text-white flex items-center justify-between px-4">
        <div className="flex gap-4 items-center uppercase">
          <Link href={"/retail"} className="font-bold px-2 rounded-md">
            Back
          </Link>
          <span>
            Total Device:
            <strong className="font-bold ml-2">{filteredDevices.length}</strong>
          </span>
        </div>
        <h1 className="uppercase tracking-tight">
          Technician Report on Due List
        </h1>

        <input
          type="search"
          placeholder="Search..."
          className="h-[40px] w-[250px] px-4 rounded-md text-black"
          value={search}
          onChange={handleSearch}
        />
      </div>

      <div className="h-[90%] w-full bg-white flex justify-center items-center">
        <div className="h-[99%] w-[99%] flex flex-col">
          <div className="w-full bg-slate-800 text-white ">
            <div className="grid grid-cols-[repeat(4,1fr)] p-2 items-center ">
              <p>Device Id</p>
              <p>Technician Name</p>
              <p>District</p>
              <p>Download Form</p>
            </div>
          </div>

          <div className="w-full overflow-y-auto">
            {filteredDevices.length > 0 ? (
              filteredDevices.map((item, i) => (
                <div
                  key={i}
                  className={`${i % 2 === 0 ? "bg-slate-100" : "bg-slate-200"}`}
                >
                  <NotPaidTable item={item} />
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-6">
                No devices found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotPaid;
