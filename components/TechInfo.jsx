// // "use client";
// // import React, { useState } from "react";
// // import { Button } from "./ui/button";
// // import Link from "next/link";

// // const headers = [
// //   "device_id",
// //   "Tech Name",
// //   "District",
// //   "install_date",
// //   "Device_price",
// // ];

// // const TechInfo = ({ devices }) => {
// //   const [state, setState] = useState({
// //     data: [...devices],
// //     search: "",
// //   });

// //   const formateInsdDate = state.data.install_date
// //     ? new Date(state.data.install_date)
// //         .toLocaleDateString("en-GB")
// //         .replace(/\//g, "-")
// //     : new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

// //   return (
// //     <div className="h-[100%] w-full bg-orange-500 flex flex-col">
// //       <div className="h-[10%] bg-black flex items-center px-4">
// //         <div className="flex gap-4 lg:text-lg uppercase text-red-400">
// //           Technician Report{" "}
// //           <span className="info-box text-white">
// //             Done :
// //             <strong className="text-orange-300 ml-2">
// //               {state.data.length}
// //             </strong>
// //           </span>
// //           <Link href="/retail" className="info-box text-white">
// //             Back
// //           </Link>
// //         </div>
// //       </div>
// //       <div className="h-[90%] bg-white flex items-center justify-center p-1">
// //         <div className="h-[100%] w-full bg-slate-300 flex  flex-col">
// //           <div className="h-[8%] w-[99%] grid grid-cols-[repeat(5,1fr)] bg--200 uppercase font-bold border-b-2 px-1">
// //             {headers.map((header, i) => {
// //               return (
// //                 <p key={i} className="flex items-center">
// //                   {header}
// //                 </p>
// //               );
// //             })}
// //           </div>
// //           <div className="h-[92%] w-full bg-white overflow-auto">
// //             {state.data.map((item, i) => {
// //               return (
// //                 <div
// //                   key={i}
// //                   className={`w-full grid grid-cols-[repeat(5,1fr)] py-2 px-1  ${
// //                     i % 2 == 0 ? "bg-slate-200" : "bg-slate-300"
// //                   }`}
// //                 >
// //                   <p className="">{item.device_id}</p>
// //                   <p className="">{item.issue_by}</p>
// //                   <p className="">{item.district}</p>
// //                   <p className="">{formateInsdDate}</p>
// //                   <p className="">{item.device_price}</p>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TechInfo;
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";

// const headers = [
//   "device_id",
//   "Tech Name",
//   "District",
//   "install_date",
//   "Device_price",
// ];

// const TechInfo = ({ devices }) => {
//   const [state, setState] = useState({
//     data: [...devices],
//     search: "",
//     selectedTech: "",
//   });

//   const technicianNames = [
//     ...new Set(devices.map((device) => device.issue_by)),
//   ];

//   // Count completed works for each technician
//   const technicianWorkSummary = state.data.reduce((acc, device) => {
//     if (device.issue_by && device.is_complete) {
//       acc[device.issue_by] = (acc[device.issue_by] || 0) + 1;
//     }
//     return acc;
//   }, {});

//   const filteredData =
//     state.selectedTech === ""
//       ? state.data
//       : state.data.filter((item) => item.issue_by === state.selectedTech);

//   const formateInsdDate = state.data.install_date
//     ? new Date(state.data.install_date)
//         .toLocaleDateString("en-GB")
//         .replace(/\//g, "-")
//     : new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

//   return (
//     <div className="h-[100%] w-full bg-orange-500 flex flex-col">
//       {/* Header Section */}
//       <div className="h-[10%] bg-black flex items-center px-4 justify-between">
//         <div className="flex gap-4 lg:text-lg uppercase text-red-400">
//           Technician Report
//           <span className="info-box text-white">
//             Done:{" "}
//             <strong className="text-orange-300 ml-2">
//               {filteredData.length}
//             </strong>
//           </span>
//           <Link href="/retail" className="info-box text-white">
//             Back
//           </Link>
//         </div>

//         <Select
//           onValueChange={(value) => setState({ ...state, selectedTech: value })}
//         >
//           <SelectTrigger className="w-[200px] bg-white">
//             <SelectValue placeholder="Select Technician" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="all">All</SelectItem>
//             {technicianNames.map((tech, i) => (
//               <SelectItem key={i} value={tech}>
//                 {tech}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>

//       <div className="h-[90%] bg-white flex items-center justify-center p-1">
//         <div className="h-[100%] w-full bg-slate-300 flex flex-col">
//           <div className="h-[8%] w-[99%] grid grid-cols-[repeat(5,1fr)] uppercase font-bold border-b-2 px-1">
//             {headers.map((header, i) => (
//               <p key={i} className="flex items-center">
//                 {header}
//               </p>
//             ))}
//           </div>
//           <div className="h-[92%] w-full bg-white overflow-auto">
//             {filteredData.map((item, i) => {
//               return (
//                 <div
//                   key={i}
//                   className={`w-full grid grid-cols-[repeat(5,1fr)] py-2 px-1 ${
//                     i % 2 === 0 ? "bg-slate-200" : "bg-slate-300"
//                   }`}
//                 >
//                   <p>{item.device_id}</p>
//                   <p>{item.issue_by}</p>
//                   <p>{item.district}</p>
//                   <p>{formateInsdDate}</p>
//                   <p>{technicianWorkSummary[item.issue_by] || 0}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechInfo;
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const headers = ["Tech Name", "District", "Completed Works"];

const TechInfo = () => {
  const [data, setData] = useState({
    devices: [],
    technicians: [],
  });

  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("desc"); // Default: Descending order
  const [selectedTech, setSelectedTech] = useState("all"); // Default: Show all technicians

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [devicesRes, techniciansRes] = await Promise.all([
          axios.get("/api/devices"),
          axios.get("/api/technician"),
        ]);

        setData({
          devices: devicesRes.data,
          technicians: techniciansRes.data,
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Count completed works for each technician
  const technicianWorkSummary = data.technicians.map((tech) => {
    const completedWorks = data.devices.filter(
      (device) => device.issue_by === tech.tech_name && device.is_complete
    ).length;

    return {
      tech_name: tech.tech_name,
      district: tech.district,
      completedWorks,
    };
  });

  const doneWork = data.devices.filter(
    (item) => item.send_to === "Retail" && item.is_complete
  );

  // Filter by selected technician
  const filteredTechnicians =
    selectedTech === "all"
      ? technicianWorkSummary
      : technicianWorkSummary.filter((tech) => tech.tech_name === selectedTech);

  // Sort based on completedWorks
  const sortedTechnicians = [...filteredTechnicians].sort((a, b) => {
    return sortOrder === "asc"
      ? a.completedWorks - b.completedWorks // Ascending order
      : b.completedWorks - a.completedWorks; // Descending order
  });

  return (
    <div className="h-full w-full bg-orange-500 flex flex-col">
      {/* Header Section */}
      <div className="h-[10%] bg-black flex items-center px-4 justify-between">
        <div className="flex gap-4 lg:text-lg uppercase text-red-400">
          Technician Report
          <span className="info-box text-white">
            Done:{" "}
            <strong className="text-orange-300 ml-2">{doneWork.length}</strong>
          </span>
          <Link href="/retail" className="info-box text-white">
            Back
          </Link>
        </div>

        {/* Select Dropdown for Technician Filtering */}
        <Select onValueChange={(value) => setSelectedTech(value)}>
          <SelectTrigger className="w-[200px] bg-white">
            <SelectValue placeholder="Select Technician" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {data.technicians.map((tech, i) => (
              <SelectItem key={i} value={tech.tech_name}>
                {tech.tech_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Sorting Button */}
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="bg-white text-black px-4 py-2 rounded-md"
        >
          Sort: {sortOrder === "asc" ? "Ascending" : "Descending"}
        </button>
      </div>

      {/* Table Section */}
      <div className="h-[90%] bg-white flex items-center justify-center p-1">
        <div className="h-[100%] w-full bg-slate-300 flex flex-col">
          {/* Table Headers */}
          <div className="h-[8%] w-[99%] grid grid-cols-[repeat(3,1fr)] uppercase font-bold border-b-2 px-1">
            {headers.map((header, i) => (
              <p key={i} className="flex items-center">
                {header}
              </p>
            ))}
          </div>

          {/* Table Data */}
          <div className="h-[92%] w-full bg-white overflow-auto">
            {sortedTechnicians.map((tech, i) => (
              <div
                key={i}
                className={`w-full grid grid-cols-[repeat(3,1fr)] py-2 px-1 ${
                  i % 2 === 0 ? "bg-slate-200" : "bg-slate-300"
                }`}
              >
                <p>{tech.tech_name}</p>
                <p>{tech.district}</p>
                <p>{tech.completedWorks}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechInfo;
