// import React from "react";

// const NotPaidTable = ({ item }) => {
//   return (
//     <div className="h-auto w-[100%]  flex lg:flex-row lg:h-14 items-center justify-center">
//       <div className="hidden lg:flex lg:w-[100%] p-2">
//         <p className="flex-[1.5] overflow-hidden text-ellipsis whitespace-nowrap">
//           {item?.device_id}
//         </p>
//         <p className="flex-[1.45] overflow-hidden text-ellipsis whitespace-nowrap">
//           {item?.issue_by}
//         </p>
//         <p className="flex-[1.45] overflow-hidden text-ellipsis whitespace-nowrap">
//           {item?.district}
//         </p>
//       </div>
//       <div className="block lg:hidden w-[100%] bg-white border-2 border-black justify-center items-center rounded-md p-4">
//         <p>
//           <strong>
//             Device ID: <span className="text-red-700">{item?.device_id}</span>
//           </strong>
//         </p>
//         <p>
//           <strong>From :</strong> {item?.issue_by}
//         </p>
//         <p>
//           <strong>Type :</strong> {item?.district}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default NotPaidTable;

"use client";

import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import axios from "axios";
import { MdDownload } from "react-icons/md";

const NotPaidTable = ({ item }) => {
  const [customerInfo, setCustomerInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCustomerInfo = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://retail-api.sultantracker.com/devices/inventory/${item.device_id}`,
        {
          headers: {
            Authorization: "Bearer ####rangs.sultantrack.com!!!!$$###",
          },
        }
      );
      setCustomerInfo(res.data);
      downloadPDF(res.data);
    } catch (err) {
      alert("Data fetch failed!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = (data) => {
    const doc = new jsPDF("p", "mm", "a4");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(255, 102, 0);
    doc.text("Sultan Tracker", 14, 18);
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Customer Registration Form", 14, 26);

    doc.setLineWidth(0.5);
    doc.line(14, 28, 195, 28);

    doc.setFillColor(255, 140, 0);
    doc.rect(14, 35, 182, 8, "F");
    doc.setTextColor(255, 255, 255);
    doc.text("Customer Information", 16, 41);
    doc.setTextColor(0, 0, 0);

    autoTable(doc, {
      startY: 46,
      theme: "grid",
      styles: { fontSize: 10, cellPadding: 3 },
      body: [
        ["Customer Name", data.uid?.name || "N/A"],
        ["Customer Number", data.center_number || "N/A"],
      ],
    });

    const deviceY = doc.lastAutoTable.finalY + 8;
    doc.setFillColor(255, 140, 0);
    doc.rect(14, deviceY, 182, 8, "F");
    doc.setTextColor(255, 255, 255);
    doc.text("Device Information", 16, deviceY + 6);
    doc.setTextColor(0, 0, 0);

    autoTable(doc, {
      startY: deviceY + 10,
      theme: "grid",
      styles: { fontSize: 10, cellPadding: 3 },
      body: [
        ["Device ID", data.id || "N/A"],
        ["Registration Number", data.registration_number || "N/A"],
        ["Device SIM Number", data.device_sim_number || "N/A"],
        ["Center Number", data.center_number || "N/A"],
        ["Customer Email", data.uid?.email || "N/A"],
        ["Device Price"],
        ["Service Charge", `${data.service_charge || 0} BDT`],
        ["Technician Name", item.issue_by || "N/A"],
        ["District", item.district || "N/A"],
        ["Assign Date", item.install_date || "N/A"],
      ],
    });

    const footerY = doc.lastAutoTable.finalY + 12;
    doc.setFontSize(9);
    doc.setTextColor(100);
    doc.text(
      "Authorized by Sultan Tracker | www.sultantracker.com | 24/7 Customer Support",
      14,
      footerY
    );
    doc.save(`${data.id || "device"}.pdf`);
  };

  return (
    <div className="grid grid-cols-[repeat(4,1fr)] p-2 items-center">
      <p>{item?.device_id}</p>
      <p>{item?.issue_by}</p>
      <p>{item?.district}</p>
      <button
        onClick={fetchCustomerInfo}
        disabled={loading}
        className="bg-green-600 text-white rounded h-[30px] w-[30px] flex items-center justify-center"
        title="Download Form"
      >
        {loading ? (
          <span className="text-[10px]">...</span>
        ) : (
          <MdDownload size={18} />
        )}
      </button>
    </div>
  );
};

export default NotPaidTable;
