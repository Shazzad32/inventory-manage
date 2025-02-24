"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import SoldTable from "./SoldTable";

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

  // const filterByDate = () => {
  //   const { startDate, endDate, data } = state;
  //   if (startDate && endDate) {
  //     const filteredData = data.filter((item) => {
  //       if (item.install_date) {
  //         const installDate = new Date(item.install_date).toLocaleDateString(
  //           "en-CA",
  //           {
  //             timeZone: "Asia/Dhaka",
  //             year: "numeric",
  //             month: "2-digit",
  //             day: "2-digit",
  //           }
  //         );
  //         const start = new Date(startDate).toLocaleDateString("en-CA", {
  //           timeZone: "Asia/Dhaka",
  //           year: "numeric",
  //           month: "2-digit",
  //           day: "2-digit",
  //         });
  //         const end = new Date(endDate).toLocaleDateString("en-CA", {
  //           timeZone: "Asia/Dhaka",
  //           year: "numeric",
  //           month: "2-digit",
  //           day: "2-digit",
  //         });
  //         return installDate >= start && installDate <= end;
  //       }
  //       return false;
  //     });
  //     setState({ ...state, datas: filteredData });
  //   }
  // };

  const filterByDate = () => {
    const { startDate, endDate } = state;

    if (startDate && endDate) {
      const filteredData = devices.filter((item) => {
        if (item.install_date) {
          const installDate = new Date(item.install_date);
          const start = new Date(startDate);
          const end = new Date(endDate);

          return installDate >= start && installDate <= end;
        }
        return false;
      });

      // Calculate total price for the filtered devices
      const filteredTotalPrice = filteredData.reduce((total, item) => {
        return total + Number(item.device_price || 0);
      }, 0);

      setState((prev) => ({
        ...prev,
        data: filteredData, // Update filtered data
        totalDevicePrice: filteredTotalPrice, // Update total price
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

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(soldDevice);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, "device_list.xlsx");
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
            className="border rounded p-1"
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
          <p className="text-white uppercase">Total Sold Device</p>
        </div>
        <div className="flex gap-6 items-center justify-end">
          <div className="bg-white p-1.5 rounded-md flex items-center">
            Total Amount :{" "}
            <span className="text-xl font-bold text-orange-500">
              {totalDevicePrice}
            </span>
          </div>
          <button
            onClick={exportToExcel}
            className="bg-green-600 text-white px-2 py-2 rounded"
          >
            Download
          </button>
          <div className="flex gap-3 text-white uppercase">
            <p>Total Devices</p>
            <p>{devices.length}</p>
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
        <div className="flex justify-between bg-gray-800 items-center p-4">
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
