import { PaidPage } from "./PaidPage";

const SoldTable = ({ item }) => {
  const formattedDate = item?.install_date
    ? new Date(item.install_date)
        .toLocaleDateString("en-GB")
        .replace(/\//g, "-")
    : new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

  return (
    <div className="h-auto w-full lg:w-[100%] flex lg:flex-row lg:h-12 items-center">
      <div className="hidden flex-[9] lg:flex p-2">
        <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_id}
        </p>
        <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_model}
        </p>
        <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_type}
        </p>
        <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.issue_by}
        </p>
        <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.district}
        </p>
        <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.install_purpose}
        </p>
        <p className="flex-[1.30] overflow-hidden text-ellipsis whitespace-nowrap">
          {item?.device_price}
        </p>
        <p className="flex-[1.14] overflow-hidden text-ellipsis whitespace-nowrap">
          {formattedDate}
        </p>
      </div>
      <div className="block lg:hidden w-full bg-white p-4 border-2 border-black">
        <p>
          <strong>
            Device ID: <span className="text-red-700">{item?.device_id}</span>
          </strong>
        </p>
        <p>
          <strong>From :</strong> {item?.from}
        </p>

        <p>
          <strong>Type :</strong> {item?.type}
        </p>
        <p>
          <strong>Insert Date:</strong> {formattedDate}
        </p>
      </div>
      {/* 
      <div className="flex flex-[1] items-center justify-center">
        <PaidPage device_id={item?.device_id} />
      </div> */}
    </div>
  );
};

export default SoldTable;

// // import { PaidPage } from "./PaidPage";

// // const SoldTable = ({ item }) => {
// //   const formattedDate = item?.install_date
// //     ? new Date(item.install_date)
// //         .toLocaleDateString("en-GB")
// //         .replace(/\//g, "-")
// //     : new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

// //   return (
// //     <div className="h-auto w-full lg:w-[100%] flex lg:flex-row lg:h-12 items-center">
// //       <div className="hidden flex-[9] lg:flex p-2">
// //         <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
// //           {item?.device_id}
// //         </p>
// //         <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
// //           {item?.device_model}
// //         </p>
// //         <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
// //           {item?.device_type}
// //         </p>
// //         <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
// //           {item?.issue_by}
// //         </p>
// //         <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
// //           {item?.district}
// //         </p>
// //         <p className="flex-[1.25] overflow-hidden text-ellipsis whitespace-nowrap">
// //           {item?.install_purpose}
// //         </p>
// //         <p className="flex-[1.30] overflow-hidden text-ellipsis whitespace-nowrap">
// //           {item?.device_price}
// //         </p>
// //         <p className="flex-[1.14] overflow-hidden text-ellipsis whitespace-nowrap">
// //           {formattedDate}
// //         </p>
// //       </div>

// //       <div className="block lg:hidden w-full bg-white p-4 border-2 border-black">
// //         <p>
// //           <strong>
// //             Device ID: <span className="text-red-700">{item?.device_id}</span>
// //           </strong>
// //         </p>
// //         <p>
// //           <strong>From :</strong> {item?.from}
// //         </p>
// //         <p>
// //           <strong>Type :</strong> {item?.type}
// //         </p>
// //         <p>
// //           <strong>Insert Date:</strong> {formattedDate}
// //         </p>
// //       </div>

// //       <div className="flex flex-[1] items-center justify-center">
// //         <PaidPage device_id={item?.device_id} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default SoldTable;
// // "use client";

// // import { useState } from "react";
// // import jsPDF from "jspdf";
// // import "jspdf-autotable";
// // import axios from "axios";
// // import autoTable from "jspdf-autotable";
// // import "jspdf-autotable";

// // const SoldTable = ({ item }) => {
// //   const [customerInfo, setCustomerInfo] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const formattedDate = item?.install_date
// //     ? new Date(item.install_date)
// //         .toLocaleDateString("en-GB")
// //         .replace(/\//g, "-")
// //     : new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

// //   // 🧩 GPS API থেকে ডেটা আনা
// //   const fetchCustomerInfo = async () => {
// //     try {
// //       setLoading(true);
// //       const res = await axios.get(
// //         `https://retail-api.sultantracker.com/devices/inventory/${item.device_id}`,
// //         {
// //           headers: {
// //             Authorization: "Bearer ####rangs.sultantrack.com!!!!$$###",
// //           },
// //         }
// //       );
// //       setCustomerInfo(res.data);
// //     } catch (err) {
// //       alert("Data fetch failed!");
// //       console.error(err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const downloadPDF = (data) => {
// //     const doc = new jsPDF();
// //     doc.setFontSize(18);
// //     doc.text("Customer Device Information", 14, 20);

// //     const tableData = [
// //       ["Device ID", data.id],
// //       ["Registration Number", data.registration_number],
// //       ["Device SIM Number", data.device_sim_number],
// //       ["Customer Number", data.center_number],
// //       ["Customer Name", data.uid?.name],
// //       ["Customer Email", data.uid?.email],
// //       ["Service Charge", data.service_charge],
// //       ["Technician Name", item.issue_by],
// //       ["District", item.district],
// //       ["Assign Date", item.install_date],
// //     ];

// //     autoTable(doc, {
// //       startY: 30,
// //       head: [["Field", "Value"]],
// //       body: tableData,
// //     });

// //     doc.save(`${data.id || "device-info"}.pdf`);
// //   };

// //   return (
// //     <div className="h-auto w-full lg:w-[100%] flex lg:flex-row lg:h-12 items-center border-b border-gray-300">
// //       <div className="hidden flex-[9] lg:flex p-2">
// //         <p className="flex-[1.25]">{item?.device_id}</p>
// //         <p className="flex-[1.25]">{item?.device_model}</p>
// //         <p className="flex-[1.25]">{item?.device_type}</p>
// //         <p className="flex-[1.25]">{item?.issue_by}</p>
// //         <p className="flex-[1.25]">{item?.district}</p>
// //         <p className="flex-[1.25]">{item?.install_purpose}</p>
// //         <p className="flex-[1.25]">{item?.device_price}</p>
// //         <p className="flex-[1.25]">{formattedDate}</p>
// //       </div>

// //       <div className="flex flex-[1] items-center justify-center gap-2">
// //         <button
// //           onClick={fetchCustomerInfo}
// //           className="bg-blue-600 text-white text-xs px-3 py-1 rounded"
// //           disabled={loading}
// //         >
// //           {loading ? "Loading..." : "Customer Info"}
// //         </button>

// //         {customerInfo && (
// //           <button
// //             onClick={() => downloadPDF(customerInfo)}
// //             className="bg-green-600 text-white text-xs px-3 py-1 rounded"
// //           >
// //             Download PDF
// //           </button>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SoldTable;

// "use client";

// import { useState } from "react";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";
// import axios from "axios";
// import { MdDownload } from "react-icons/md";

// const SoldTable = ({ item }) => {
//   const [customerInfo, setCustomerInfo] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const formattedDate = item?.install_date
//     ? new Date(item.install_date)
//         .toLocaleDateString("en-GB")
//         .replace(/\//g, "-")
//     : new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

//   const fetchCustomerInfo = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(
//         `https://retail-api.sultantracker.com/devices/inventory/${item.device_id}`,
//         {
//           headers: {
//             Authorization: "Bearer ####rangs.sultantrack.com!!!!$$###",
//           },
//         }
//       );
//       setCustomerInfo(res.data);
//     } catch (err) {
//       alert("Data fetch failed!");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const downloadPDF = (data) => {
//     const doc = new jsPDF("p", "mm", "a4");
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(20);
//     doc.setTextColor(255, 102, 0);
//     doc.text("Sultan Tracker", 14, 18);
//     doc.setFontSize(14);
//     doc.setTextColor(0, 0, 0);
//     doc.text("Customer Registration Form", 14, 26);

//     doc.setLineWidth(0.5);
//     doc.line(14, 28, 195, 28);

//     doc.setFillColor(255, 140, 0);
//     doc.rect(14, 35, 182, 8, "F");
//     doc.setTextColor(255, 255, 255);
//     doc.text("Customer Information", 16, 41);
//     doc.setTextColor(0, 0, 0);

//     autoTable(doc, {
//       startY: 46,
//       theme: "grid",
//       styles: { fontSize: 10, cellPadding: 3 },
//       body: [
//         ["Customer Name", data.uid?.name || "N/A"],
//         ["Customer Number", data.center_number || "N/A"],
//       ],
//     });

//     const deviceY = doc.lastAutoTable.finalY + 8;
//     doc.setFillColor(255, 140, 0);
//     doc.rect(14, deviceY, 182, 8, "F");
//     doc.setTextColor(255, 255, 255);
//     doc.text("Device Information", 16, deviceY + 6);
//     doc.setTextColor(0, 0, 0);

//     autoTable(doc, {
//       startY: deviceY + 10,
//       theme: "grid",
//       styles: { fontSize: 10, cellPadding: 3 },
//       body: [
//         ["Device ID", data.id || "N/A"],
//         ["Registration Number", data.registration_number || "N/A"],
//         ["Device SIM Number", data.device_sim_number || "N/A"],
//         ["Center Number", data.center_number || "N/A"],
//         ["Customer Email", data.uid?.email || "N/A"],
//         ["Device Type", item.device_type || "N/A"],
//         ["Device Price", `${item.device_price} BDT`],
//         ["Service Charge", `${data.service_charge || 0} BDT`],
//         ["Purpose", item.install_purpose || "N/A"],
//         ["Technician Name", item.issue_by || "N/A"],
//         ["Assign Date", item.install_date || "N/A"],
//       ],
//     });

//     const footerY = doc.lastAutoTable.finalY + 12;
//     doc.setFontSize(9);
//     doc.setTextColor(100);
//     doc.text(
//       "Authorized by Sultan Tracker | www.sultantracker.com | 24/7 Customer Support",
//       14,
//       footerY
//     );

//     doc.save(`${data.id || "device"}.pdf`);
//   };

//   return (
//     <div className="h-auto w-full lg:w-[100%] flex lg:flex-row lg:h-12 items-center border-b border-gray-300">
//       <div className="hidden flex-[9] lg:flex p-2">
//         <p className="flex-[1.25]">{item?.device_id}</p>
//         <p className="flex-[1.25]">{item?.device_model}</p>
//         <p className="flex-[1.25]">{item?.device_type}</p>
//         <p className="flex-[1.25]">{item?.issue_by}</p>
//         <p className="flex-[1.25]">{item?.district}</p>
//         <p className="flex-[1.25]">{item?.install_purpose}</p>
//         <p className="flex-[1.25]">{item?.device_price}</p>
//         <p className="flex-[1.25]">{formattedDate}</p>
//       </div>

//       <div className="flex flex-[1] items-center justify-center gap-2">
//         <button
//           onClick={fetchCustomerInfo}
//           className="bg-blue-600 text-white h-[30px] text-xs px-3 py-1 rounded"
//           disabled={loading}
//         >
//           {loading ? "Loading..." : "Create Form"}
//         </button>

//         {customerInfo && (
//           <button
//             onClick={() => downloadPDF(customerInfo)}
//             className="bg-green-600 text-white text-xs h-[30px] px-3 py-1 rounded"
//           >
//             <MdDownload />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SoldTable;
