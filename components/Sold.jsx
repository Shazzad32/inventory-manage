"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import SoldTable from "./SoldTable";
import * as XLSX from "xlsx";
import { startOfDay, endOfDay } from "date-fns";

const headers = [
  "Device_id",
  "Model",
  "Type",
  "Issue_To",
  "District",
  "install_purpose",
  "Price",
  "Install_date",
];

function Sold({ devices }) {
  const [state, setState] = useState({
    data: [...devices],
    search: "",
    nextday: false,
    selectedDate: null,
    startDate: "",
    endDate: "",
  });

  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase();
    setState((prev) => ({
      ...prev,
      search: search,
    }));
  };

  useEffect(() => {
    let filterDEvices = [];

    if (state.search === "") {
      filterDEvices = [...devices];
    } else {
      filterDEvices = [...devices].filter((x) =>
        x.device_id.toLowerCase().includes(state.search.toLowerCase())
      );
    }

    setState((prev) => ({
      ...prev,
      data: [...filterDEvices],
    }));
  }, [state.search]);

  const filterByDate = () => {
    const { startDate, endDate } = state;

    if (startDate && endDate) {
      const start = startOfDay(new Date(startDate)).getTime();
      const end = endOfDay(new Date(endDate)).getTime();

      const filteredData = devices.filter((item) => {
        if (item.install_date) {
          const installDate = new Date(item.install_date).getTime();
          return installDate >= start && installDate <= end;
        }
        return false;
      });

      const filteredTotalPrice = filteredData.reduce((total, item) => {
        return total + Number(item.device_price || 0);
      }, 0);

      setState((prev) => ({
        ...prev,
        data: filteredData,
        totalDevicePrice: filteredTotalPrice,
        totalDeviceCount: filteredData.length,
      }));
    }
  };

  const totalDevicePrice = state.data.reduce((total, item) => {
    return total + Number(item.device_price || 0);
  }, 0);

  const handleDateChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onDateChange = (date) => {
    const selectedDate = new Date(date).setHours(0, 0, 0, 0);
    const filteredData = state.dataResults.filter((item) => {
      const itemDate = new Date(item.install_date).setHours(0, 0, 0, 0);
      return itemDate === selectedDate;
    });

    setState((prevState) => ({
      ...prevState,
      selectedDate: date,
      datas: filteredData,
    }));
  };

  const exportToExcel = (startDate, endDate) => {
    const selectedFields = [
      "device_id",
      "device_type",
      "issue_by",
      "district",
      "install_purpose",
      "device_price",
      "install_date",
    ];

    const filteredData = state.data.map((item) =>
      Object.fromEntries(selectedFields.map((key) => [key, item[key]]))
    );

    const worksheet = XLSX.utils.json_to_sheet([]);

    // Add title
    XLSX.utils.sheet_add_aoa(worksheet, [["Device Bill"]], { origin: "A1" });

    // Merge title
    worksheet["!merges"] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: selectedFields.length - 1 } },
    ];

    // Add date range
    XLSX.utils.sheet_add_aoa(
      worksheet,
      [[`Date On: ${startDate || "N/A"} to ${endDate || "N/A"}`]],
      { origin: "A2" }
    );

    // Add actual data
    XLSX.utils.sheet_add_json(worksheet, filteredData, {
      origin: "A4",
      skipHeader: false,
    });

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "SoldDevices");

    XLSX.writeFile(workbook, "sold_devices.xlsx");
  };

  return (
    <div className="h-[100%] w-full flex flex-col">
      <div className="flex w-full justify-between  bg-gray-800 items-center p-4">
        <div className="flex gap-4">
          <button className="text-[8px] h-[20px] w-[40px] lg:w-[60px] bg-orange-400 lg:bg-transparent px-1 lg:text-[16px] lg:border-2 lg:h-[30px] lg:p-4 rounded-md flex items-center justify-center text-white">
            <Link href={"/"}> HOME</Link>
          </button>
          <input
            type="date"
            name="startDate"
            value={state.startDate}
            onChange={handleDateChange}
            className="border rounded px-1"
          />
          <input
            type="date"
            name="endDate"
            value={state.endDate}
            onChange={handleDateChange}
            className="border rounded p-1"
          />
          <button
            onClick={filterByDate}
            className="text-white p-2 rounded bg-red-500"
          >
            GO
          </button>
        </div>
        <div>
          <p className="text-white uppercase">Sold Device</p>
        </div>
        <div className="flex gap-6 items-center justify-end">
          <div className="flex gap-3 text-white uppercase items-center">
            Total Amount :{" "}
            <span className="text-xl font-bold text-white">
              {totalDevicePrice}
            </span>
          </div>
          <button
            onClick={() => exportToExcel(state.startDate, state.endDate)}
            className="bg-green-600 text-white px-2 py-2 rounded"
          >
            Download
          </button>
          <div className="flex gap-3 text-white uppercase">
            <p>Total Devices</p>
            <p>{state.data.length}</p>
          </div>
          <input
            type="search"
            placeholder="Search..."
            className="h-[40px] px-4 rounded-md flex items-center justify-center text-black "
            value={state.searchItem}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 bg-slate-300 w-full p-1">
        <div className=" hidden lg:flex justify-between bg-gray-800 items-center p-4">
          <div className="flex-[9] flex">
            {headers.map((x) => (
              <p key={x} className="text-white uppercase flex-[8]">
                {x}
              </p>
            ))}
          </div>
          <div className="flex-[1] text-white">ACTION</div>
        </div>

        <div className="w-full flex flex-col flex-1">
          {state.data.map((x, i) => (
            <div
              key={i}
              className={`${i % 2 == 0 ? "bg-slate-100" : "bg-slate-200"}`}
            >
              <SoldTable item={x} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sold;
