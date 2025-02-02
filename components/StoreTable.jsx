"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import StoreTableInfo from "./StoreTableInfo";

const headers = ["Device_id", "Model", "From", "Type", "Insert Date"];

const Item = ({ device, index }) => {
  return (
    <div
      className={`w-full justify-between flex p-4 ${
        index % 2 == 0 ? "bg-slate-100" : "bg-slate-500"
      }`}
    >
      <p>{device.device_id}</p>
      <p>{device.device_model}</p>
      <p>{device.from}</p>
      <p>{device.device_type}</p>
      <p>{device.from}</p>
      <p>sdasdal</p>
    </div>
  );
};

function StoreTable({ devices }) {
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
      filterDEvices = [...devices].filter((x) =>
        x.device_id.toLowerCase().includes(state.search.toLowerCase())
      );
    }

    setState((prev) => ({
      ...prev,
      data: [...filterDEvices],
    }));
  }, [state.search]);

  return (
    <div className="h-[100%] w-full flex flex-col">
      <div className="flex w-full justify-between  bg-gray-800 items-center p-4">
        <div className="flex gap-6">
          <button className="text-[8px] h-[20px] w-[40px] lg:w-[60px] bg-orange-400 lg:bg-transparent px-1 lg:text-[16px] lg:border-2 lg:h-[30px] lg:p-4 rounded-md flex items-center justify-center text-white">
            <Link href={"/"}> HOME</Link>
          </button>
          <button className="text-[8px] h-[20px] w-[40px] lg:w-[60px] bg-orange-400 lg:bg-transparent px-1 lg:text-[16px] lg:border-2 lg:h-[30px] lg:p-4 rounded-md flex items-center justify-center text-white">
            <Link href={"/store/add"}> ADD</Link>
          </button>
        </div>
        <div>
          <p className="text-white uppercase">Total Stock</p>
        </div>
        <div className="flex gap-6 items-center justify-end">
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
              <StoreTableInfo item={x} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StoreTable;
