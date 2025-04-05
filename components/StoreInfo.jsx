"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ImportFile from "./ImportFile";
import StoreTable from "./StoreTable";
import { StoreDropdownMenue } from "./StoreDropdownMenue";

const headers = ["Device_id", "Model", "From", "Type", "Insert Date"];

const StoreInfo = ({ devices }) => {
  const [state, setState] = useState({
    data: [...devices],
    search: "",
  });

  const sortedData = [...devices]
    .filter((item) => item.send_to === "Store")
    .sort((a, b) => new Date(b.insert_date) - new Date(a.insert_date));

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
          x.device_model.toLowerCase().includes(state.search.toLowerCase())
      );
    }

    setState((prev) => ({
      ...prev,
      data: [...filterDEvices],
    }));
  }, [state.search]);

  const non_voice = state.data.filter(
    (x) => x.send_to === "Store" && x.device_type === "Non_Voice"
  ).length;

  const voice = state.data.filter(
    (x) => x.send_to === "Store" && x.device_type === "Voice"
  ).length;

  return (
    <div className="h-[100%] w-full flex flex-col">
      <div className="flex h-[10%] w-full justify-between  bg-gray-800 items-center p-4">
        <StoreDropdownMenue />
        <div className="hidden lg:flex gap-2">
          <button className="text-[8px] h-[20px] w-[40px] lg:w-[60px] bg-orange-400 lg:bg-transparent px-1 lg:text-[16px] lg:border-2 lg:h-[30px] lg:p-4 rounded-md flex items-center justify-center text-white">
            <Link href={"/"}> HOME</Link>
          </button>
          <button className="text-[8px] h-[20px] w-[40px] lg:w-[60px] bg-orange-400 lg:bg-transparent px-1 lg:text-[16px] lg:border-2 lg:h-[30px] lg:p-4 rounded-md flex items-center justify-center text-white">
            <Link href={"/store/add"}> ADD</Link>
          </button>

          <ImportFile />
        </div>
        <div>
          <p className="text-white uppercase lg:flex hidden">Total In Stock</p>
        </div>
        <div className="flex gap-4 items-center justify-end">
          <div className="flex gap-3 text-white uppercase">
            <p className="hidden lg:flex">Total</p>
            <p className="bg-white text-black p-2 rounded-md lg:bg-none lg:p-0 lg:bg-gray-800 lg:text-white font-bold">
              {devices.length}
            </p>
          </div>
          <div className="flex gap-3 text-white uppercase">
            <p className="hidden lg:flex">Non Voice</p>
            <p className="bg-white text-black p-2 rounded-md lg:bg-none lg:p-0 lg:bg-gray-800 lg:text-white font-bold">
              {non_voice}
            </p>
          </div>
          <div className="flex gap-3 text-white uppercase">
            <p className="hidden lg:flex">Voice</p>
            <p className="bg-white text-black p-2 rounded-md lg:bg-none lg:p-0 lg:bg-gray-800 lg:text-white font-bold">
              {voice}
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
            {headers.map((x, i) => (
              <p key={i} className="text-white uppercase flex-[9]">
                {x}
              </p>
            ))}
            <p className="flex-[1] text-white text-center">ACTION</p>
          </div>
          <div className="h-[92%] overflow-y-scroll">
            {sortedData.map((x, i) => (
              <div
                key={i}
                className={`${i % 2 == 0 ? "bg-slate-100" : "bg-slate-200"}`}
              >
                <StoreTable item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
