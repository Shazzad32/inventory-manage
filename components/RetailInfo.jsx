"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import RetailTable from "@/components/RetailTable";
import { DropdownMenuDemo } from "./DropdownMenuDemo";

const headers = [
  "Device_id",
  "Model",
  "From",
  "Type",
  "Issue_By",
  "District",
  "Insert_Date",
  "Sending_Date",
];

// const Item = ({ device, index }) => {
//   return (
//     <div
//       className={`w-full justify-between flex p-4 ${
//         index % 2 == 0 ? "bg-slate-100" : "bg-slate-500"
//       }`}
//     >
//       <p>{device.device_id}</p>
//       <p>{device.device_model}</p>
//       <p>{device.from}</p>
//       <p>{device.device_type}</p>
//       <p>{device.from}</p>
//       <p>sdasdal</p>
//     </div>
//   );
// };

const RetailInfo = ({ devices }) => {
  const [state, setState] = useState({
    data: [...devices],
    search: "",
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
      filterDEvices = [...devices].filter(
        (x) =>
          x.device_id.toLowerCase().includes(state.search.toLowerCase()) ||
          x.issue_by.toLowerCase().includes(state.search.toLowerCase()) ||
          x.device_type.toLowerCase().includes(state.search.toLowerCase()) ||
          x.device_model.toLowerCase().includes(state.search.toLowerCase()) ||
          x.district.toLowerCase().includes(state.search.toLowerCase())
      );
    }

    setState((prev) => ({
      ...prev,
      data: [...filterDEvices],
    }));
  }, [state.search]);

  return (
    <div className="h-[100%] w-full flex flex-col">
      <div className="flex h-[10%] w-full justify-between bg-gray-800 items-center p-2">
        <DropdownMenuDemo />
        <div className="lg:flex gap-4 hidden">
          <button className="text-[8px] h-[20px] w-[40px] lg:w-[60px] bg-orange-400 lg:bg-transparent px-1 lg:text-[16px] lg:border-2 lg:h-[25px] lg:p-4 rounded-md flex items-center justify-center text-white">
            <Link href={"/"}> HOME</Link>
          </button>
          <button className="text-[8px] h-[20px] w-[40px] lg:w-[60px] bg-orange-400 lg:bg-transparent px-1 lg:text-[16px] lg:border-2 lg:h-[25px] lg:p-4 rounded-md flex items-center justify-center text-white">
            <Link href={"/retail/add"}> ADD</Link>
          </button>
          <button className="text-[8px] h-[20px] w-[40px] lg:w-[60px] bg-orange-400 lg:bg-transparent px-1 lg:text-[16px] lg:border-2 lg:h-[25px] lg:p-4 rounded-md flex items-center justify-center text-white">
            <Link href={"/retail/sold"}> SOLD</Link>
          </button>
        </div>
        <div>
          <p className="text-white uppercase lg:flex hidden">Total In Retail</p>
        </div>
        <div className="flex gap-6 items-center justify-end">
          <div className="flex gap-3 text-white uppercase">
            <p className="hidden lg:flex">Total Devices</p>
            <p className="bg-white font-bold text-black p-2 rounded-md lg:bg-gray-800 lg:p-0 lg:text-white">
              {state.data.length}
            </p>
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
      <div className="h-[90%] flex items-center justify-center bg-white">
        <div className="h-[99%] w-[99.5%] flex flex-col">
          <div className="hidden h-[8%] lg:flex bg-gray-800 p-2 items-center">
            {headers.map((x) => (
              <p key={x} className="text-white uppercase flex-[9]">
                {x}
              </p>
            ))}
            <p className="flex-[1] text-white text-center">ACTION</p>
          </div>
          <div className="h-[92%] overflow-y-scroll">
            {state.data.map((x, i) => (
              <div
                key={i}
                className={`${i % 2 == 0 ? "bg-slate-100" : "bg-slate-200"}`}
              >
                <RetailTable item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col flex-1 bg-slate-300 w-full p-1">
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

        <div className="w-full flex flex-col flex-1 max-h-[510px] overflow-y-auto">
          {state.data.map((x, i) => (
            <div
              key={i}
              className={`${i % 2 == 0 ? "bg-slate-100" : "bg-slate-200"}`}
            >
              <RetailTable item={x} />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default RetailInfo;
