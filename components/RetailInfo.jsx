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

  const non_voice = state.data.filter(
    (x) => x.send_to === "Retail" && x.device_type === "Non_Voice"
  ).length;

  const voice = state.data.filter(
    (x) => x.send_to === "Retail" && x.device_type === "Voice"
  ).length;

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
          <button className="text-[8px] h-[20px] w-[40px] lg:w-[60px] bg-orange-400 lg:bg-transparent px-1 lg:text-[16px] lg:border-2 lg:h-[25px] lg:p-4 rounded-md flex items-center justify-center text-white">
            <Link href={"/retail/tech-report"}> Tech</Link>
          </button>
        </div>
        <div>
          <p className="text-white uppercase lg:flex hidden">Total In Retail</p>
        </div>
        <div className="flex gap-6 items-center justify-end">
          <div className="flex gap-3 text-white uppercase">
            <p className="hidden lg:flex">Total</p>
            <p className="bg-white font-bold text-black p-2 rounded-md lg:bg-gray-800 lg:p-0 lg:text-white">
              {state.data.length}
            </p>
          </div>
          <div className="flex gap-3 text-white uppercase">
            <p className="hidden lg:flex">Non Voice</p>
            <p className="bg-white font-bold text-black p-2 rounded-md lg:bg-gray-800 lg:p-0 lg:text-white">
              {non_voice}
            </p>
          </div>
          <div className="flex gap-3 text-white uppercase">
            <p className="hidden lg:flex">Voice </p>
            <p className="bg-white font-bold text-black p-2 rounded-md lg:bg-gray-800 lg:p-0 lg:text-white">
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
    </div>
  );
};

export default RetailInfo;
