"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import RangsTable from "./RangsTable";

const headers = [
  "Device_id",
  "Model",
  "Type",
  "From",
  "Workshop",
  "Insert_Date",
  "Sending_Date",
];

const RangsInfo = ({ devices }) => {
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
          x.device_type.toLowerCase().includes(state.search.toLowerCase()) ||
          x.workshop.toLowerCase().includes(state.search.toLowerCase())
      );
    }

    setState((prev) => ({
      ...prev,
      data: [...filterDEvices],
    }));
  }, [state.search]);

  return (
    <div className="h-[100%] w-full flex flex-col">
      <div className="flex h-[10%] w-full justify-between  bg-gray-800 items-center p-4">
        <div className="flex gap-4">
          <button className="text-[8px] h-[20px] w-[40px] lg:w-[60px] bg-orange-400 lg:bg-transparent px-1 lg:text-[16px] lg:border-2 lg:h-[30px] lg:p-4 rounded-md flex items-center justify-center text-white">
            <Link href={"/"}> HOME</Link>
          </button>
          <button className="text-[8px] h-[20px] w-[40px] lg:w-[60px] bg-orange-400 lg:bg-transparent px-1 lg:text-[16px] lg:border-2 lg:h-[30px] lg:p-4 rounded-md flex items-center justify-center text-white">
            <Link href={"/rangs/add"}> ADD</Link>
          </button>
        </div>
        <div>
          <p className="text-white uppercase">Total In Rangs</p>
        </div>
        <div className="flex gap-6 items-center justify-end">
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
      <div className="h-[90%] flex items-center justify-center bg-white">
        <div className="h-[99%] w-[99.5%] flex flex-col">
          <div className="hidden lg:flex h-[8%] bg-gray-800 p-2 items-center">
            {headers.map((x) => (
              <p key={x} className="text-white uppercase flex-[1]">
                {x}
              </p>
            ))}
          </div>
          <div className="h-[92%] overflow-y-auto">
            {state.data.map((x, i) => (
              <div
                key={i}
                className={`${i % 2 == 0 ? "bg-slate-100" : "bg-slate-200"}`}
              >
                <RangsTable item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangsInfo;
