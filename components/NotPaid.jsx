"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const NotPaid = ({ devices, assignIds }) => {
  const [assignId] = useState({ ...assignIds });
  const [unSoldDevice] = useState({ ...devices });

  // const [state, setState] = useState({
  //   data: [...devices],
  //   search: "",
  // });

  // const handleSearch = (e) => {
  //   const search = e.target.value.toLowerCase();
  //   setState((prev) => ({
  //     ...prev,
  //     search: search,
  //   }));
  // };
  // console.log(assignId);

  const deviceList = Object.values(unSoldDevice);
  const assignList = Object.values(assignId);

  const commonDevices = deviceList.filter((device) =>
    assignList.includes(device.device_id)
  );

  // useEffect(() => {
  //   let filterDEvices = [];

  //   if (state.search === "") {
  //     filterDEvices = [...devices];
  //   } else {
  //     filterDEvices = [...devices].filter(
  //       (x) =>
  //         x.device_id.toLowerCase().includes(state.search.toLowerCase()) ||
  //         x.issue_by.toLowerCase().includes(state.search.toLowerCase())
  //     );
  //   }

  //   setState((prev) => ({
  //     ...prev,
  //     data: [...filterDEvices],
  //   }));
  // }, [state.search]);

  return (
    <div className="h-[100%] w-[100%] flex justify-center items-center">
      <div className="h-[99%] w-[99%] bg-red-200 flex flex-col">
        <div className="w-full bg-slate-800 text-white grid grid-cols-[repeat(4,1fr)] p-2 items-center">
          <p>Device Id</p>
          <p>Technician Name</p>
          <p>District</p>
          {/* <input
            type="search"
            placeholder="Search..."
            className="h-[40px] px-4 rounded-md flex items-center justify-center text-black "
            value={state.searchItem}
            onChange={handleSearch}
          /> */}
          <div className=" flex gap-4">
            <Link
              href={"/retail"}
              className=" font-bold ml-4 border border-white px-2 rounded-md"
            >
              Back
            </Link>
            Total Devie ={" "}
            <strong className="text-orange-700 text-xl font-bold">
              {commonDevices.length}
            </strong>
          </div>
        </div>
        <div className="w-full  overflow-auto">
          {commonDevices.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-[repeat(4,1fr)] p-2 ${
                index % 2 === 0 ? "bg-slate-200" : "bg-slate-300"
              }`}
            >
              <p>{item.device_id}</p>
              <p>{item.issue_by}</p>
              <p>{item.district}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotPaid;

// "use client";

// import React, { useEffect, useState } from "react";

// const NotPaid = ({ devices, assignIds }) => {
//   const [assignId] = useState({ ...assignIds });
//   const [devicesId] = useState({ ...devices });

//   const deviceList = Object.values(devicesId);
//   const assignList = Object.values(assignId);

//   const commonDevices = deviceList.filter((device) =>
//     assignList.includes(device.device_id)
//   );

//   console.log("commonDevices", commonDevices.length);

//   return (
//     <div>
//       {commonDevices.length > 0 ? (
//         commonDevices.map((item, index) => (
//           <div key={index}>{item.device_id.length}</div>
//         ))
//       ) : (
//         <div>No Common Devices Found</div>
//       )}
//     </div>
//   );
// };

// export default NotPaid;
