// "use client";
// import Link from "next/link";
// import React, { useEffect, useState, useMemo } from "react";
// import NotPaidTable from "./NotPaidTable";

// const NotPaid = ({ devices, assignIds }) => {
//   const [assignId] = useState({ ...assignIds });
//   const [unSoldDevice] = useState({ ...devices });
//   const deviceList = useMemo(() => Object.values(unSoldDevice), [unSoldDevice]);
//   const assignList = useMemo(() => Object.values(assignId), [assignId]);
//   const assignDevice = useMemo(() => Object.values(assignId), [assignId]);

//   const commonDevices = useMemo(() => {
//     return deviceList.filter((device) => assignList.includes(device.device_id));
//   }, [deviceList, assignList]);

//   const [search, setSearch] = useState("");
//   const [filteredDevices, setFilteredDevices] = useState([]);

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   useEffect(() => {
//     let filtered = [];

//     if (search.trim() === "") {
//       filtered = [...commonDevices];
//     } else {
//       const lowerSearch = search.toLowerCase();
//       filtered = commonDevices.filter(
//         (device) =>
//           device.device_id.toLowerCase().includes(lowerSearch) ||
//           device.device_type.toLowerCase().includes(lowerSearch) ||
//           device.device_model.toLowerCase().includes(lowerSearch) ||
//           device.issue_by?.toLowerCase().includes(lowerSearch) ||
//           device.district?.toLowerCase().includes(lowerSearch)
//       );
//     }

//     filtered.sort((a, b) => {
//       const nameA = a.issue_by?.toLowerCase() || "";
//       const nameB = b.issue_by?.toLowerCase() || "";
//       return nameA.localeCompare(nameB);
//     });

//     setFilteredDevices(filtered);
//   }, [search, commonDevices]);

//   console.log("assign ids", commonDevices.length);

//   return (
//     <div className="h-[100%] w-full flex justify-center flex-col items-center ">
//       <div className="h-[10%] w-full bg-gray-700 text-white flex items-center justify-between px-4">
//         <div className="flex gap-4 items-center uppercase">
//           <Link href={"/retail"} className="font-bold px-2 rounded-md">
//             Back
//           </Link>
//           <span>
//             Total Device:
//             <strong className="font-bold ml-2">{filteredDevices.length}</strong>
//           </span>
//         </div>
//         <h1 className="uppercase tracking-tight">
//           Technician Report on Due List
//         </h1>

//         <input
//           type="search"
//           placeholder="Search..."
//           className="h-[40px] w-[250px] px-4 rounded-md text-black"
//           value={search}
//           onChange={handleSearch}
//         />
//       </div>

//       <div className="h-[90%] w-full bg-white flex justify-center items-center">
//         <div className="h-[99%] w-[99%] flex flex-col">
//           <div className="w-full bg-slate-800 text-white ">
//             <div className="grid grid-cols-[repeat(5,1fr)] p-2 items-center ">
//               <p>Device Id</p>
//               <p>Technician Name</p>
//               <p>District</p>
//               <p>Sending Date</p>
//               <p>Action</p>
//             </div>
//           </div>

//           <div className="w-full overflow-y-auto">
//             {filteredDevices.length > 0 ? (
//               filteredDevices.map((item, i) => (
//                 <div
//                   key={i}
//                   className={`${i % 2 === 0 ? "bg-slate-100" : "bg-slate-200"}`}
//                 >
//                   <NotPaidTable item={item} assignDevice={assignDevice} />
//                 </div>
//               ))
//             ) : (
//               <div className="text-center text-gray-500 py-6">
//                 No devices found
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotPaid;

// "use client";
// import Link from "next/link";
// import React, { useDeferredValue, useMemo, useState } from "react";
// import NotPaidTable from "./NotPaidTable";

// const PAGE_SIZE = 50;

// const NotPaid = ({ devices, assignIds }) => {
//   const [search, setSearch] = useState("");
//   const [visible, setVisible] = useState(PAGE_SIZE);

//   // keeps typing smooth; filtering runs on the deferred value
//   const deferredSearch = useDeferredValue(search);

//   const assignList = useMemo(() => Object.values(assignIds ?? {}), [assignIds]);

//   // Only the assigned devices, sorted ONCE, with a precomputed search string
//   const baseList = useMemo(() => {
//     const assigned = new Set(assignList);
//     return Object.values(devices ?? {})
//       .filter((d) => assigned.has(d.device_id))
//       .sort((a, b) =>
//         (a.issue_by ?? "")
//           .toLowerCase()
//           .localeCompare((b.issue_by ?? "").toLowerCase())
//       )
//       .map((d) => ({
//         device: d,
//         haystack: [
//           d.device_id,
//           d.device_type,
//           d.device_model,
//           d.issue_by,
//           d.district,
//         ]
//           .filter(Boolean)
//           .join(" ")
//           .toLowerCase(),
//       }));
//   }, [devices, assignList]);

//   // Filtering keeps the sorted order, so no re-sorting on each search
//   const filteredDevices = useMemo(() => {
//     const q = deferredSearch.trim().toLowerCase();
//     const rows = q ? baseList.filter((r) => r.haystack.includes(q)) : baseList;
//     return rows.map((r) => r.device);
//   }, [baseList, deferredSearch]);

//   // Render only a slice of rows to keep the DOM light
//   const shown = filteredDevices.slice(0, visible);

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//     setVisible(PAGE_SIZE);
//   };

//   return (
//     <div className="h-full w-full flex justify-center flex-col items-center">
//       <div className="h-[10%] w-full bg-gray-700 text-white flex items-center justify-between px-4">
//         <div className="flex gap-4 items-center uppercase">
//           <Link href="/retail" className="font-bold px-2 rounded-md">
//             Back
//           </Link>
//           <span>
//             Total Device:
//             <strong className="font-bold ml-2">{filteredDevices.length}</strong>
//           </span>
//         </div>
//         <h1 className="uppercase tracking-tight">
//           Technician Report on Due List
//         </h1>
//         <input
//           type="search"
//           placeholder="Search..."
//           className="h-[40px] w-[250px] px-4 rounded-md text-black"
//           value={search}
//           onChange={handleSearch}
//         />
//       </div>

//       <div className="h-[90%] w-full bg-white flex justify-center items-center">
//         <div className="h-[99%] w-[99%] flex flex-col">
//           <div className="w-full bg-slate-800 text-white">
//             <div className="grid grid-cols-5 p-2 items-center">
//               <p>Device Id</p>
//               <p>Technician Name</p>
//               <p>District</p>
//               <p>Sending Date</p>
//               <p>Action</p>
//             </div>
//           </div>

//           <div className="w-full overflow-y-auto">
//             {shown.length > 0 ? (
//               <>
//                 {shown.map((item, i) => (
//                   <div
//                     key={item.device_id}
//                     className={i % 2 === 0 ? "bg-slate-100" : "bg-slate-200"}
//                   >
//                     <NotPaidTable item={item} assignDevice={assignList} />
//                   </div>
//                 ))}
//                 {visible < filteredDevices.length && (
//                   <div className="text-center py-4">
//                     <button
//                       onClick={() => setVisible((v) => v + PAGE_SIZE)}
//                       className="px-4 py-2 rounded-md bg-slate-800 text-white"
//                     >
//                       Load more ({filteredDevices.length - visible} left)
//                     </button>
//                   </div>
//                 )}
//               </>
//             ) : (
//               <div className="text-center text-gray-500 py-6">
//                 No devices found
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default React.memo(NotPaid);

"use client";
import Link from "next/link";
import React, { useDeferredValue, useMemo, useState } from "react";
import NotPaidTable from "./NotPaidTable";

const PAGE_SIZE = 50;

const NotPaid = ({ devices, assignIds }) => {
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  // keeps typing smooth; filtering runs on the deferred value
  const deferredSearch = useDeferredValue(search);

  const assignList = useMemo(() => Object.values(assignIds ?? {}), [assignIds]);

  // Only the assigned devices, sorted ONCE, with a precomputed search string
  const baseList = useMemo(() => {
    const assigned = new Set(assignList);
    return Object.values(devices ?? {})
      .filter((d) => assigned.has(d.device_id))
      .sort((a, b) =>
        (a.issue_by ?? "")
          .toLowerCase()
          .localeCompare((b.issue_by ?? "").toLowerCase())
      )
      .map((d) => ({
        device: d,
        haystack: [
          d.device_id,
          d.device_type,
          d.device_model,
          d.issue_by,
          d.district,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase(),
      }));
  }, [devices, assignList]);

  // Filtering keeps the sorted order, so no re-sorting on each search
  const filteredDevices = useMemo(() => {
    const q = deferredSearch.trim().toLowerCase();
    const rows = q ? baseList.filter((r) => r.haystack.includes(q)) : baseList;
    return rows.map((r) => r.device);
  }, [baseList, deferredSearch]);

  // Render only a slice of rows to keep the DOM light
  const shown = filteredDevices.slice(0, visible);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setVisible(PAGE_SIZE);
  };

  return (
    <div className="h-full w-full flex justify-center flex-col items-center">
      <div className="h-[10%] w-full bg-gray-700 text-white flex items-center justify-between px-4">
        <div className="flex gap-4 items-center uppercase">
          <Link href="/retail" className="font-bold px-2 rounded-md">
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
          <div className="w-full bg-slate-800 text-white">
            <div className="grid grid-cols-5 p-2 items-center">
              <p>Device Id</p>
              <p>Technician Name</p>
              <p>District</p>
              <p>Sending Date</p>
              <p>Action</p>
            </div>
          </div>

          <div className="w-full overflow-y-auto">
            {shown.length > 0 ? (
              <>
                {shown.map((item, i) => (
                  <div
                    key={item.device_id}
                    className={i % 2 === 0 ? "bg-slate-100" : "bg-slate-200"}
                  >
                    <NotPaidTable item={item} assignDevice={assignList} />
                  </div>
                ))}
                {visible < filteredDevices.length && (
                  <div className="text-center py-4">
                    <button
                      onClick={() => setVisible((v) => v + PAGE_SIZE)}
                      className="px-4 py-2 rounded-md bg-slate-800 text-white"
                    >
                      Load more ({filteredDevices.length - visible} left)
                    </button>
                  </div>
                )}
              </>
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

export default React.memo(NotPaid);
