"use client";

import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import axios from "axios";
import { MdDownload } from "react-icons/md";

const CustomerFormGenerator = ({
  deviceId,
  issueBy,
  district,
  installDate,
  install_purpose,
}) => {
  const [loading, setLoading] = useState(false);

  const generatePDF = (data) => {
    const doc = new jsPDF("p", "mm", "a4");

    const pageWidth = doc.internal.pageSize.getWidth();
    const logoWidth = 30;
    const logoHeight = 15;
    const marginRight = 14;
    const x = pageWidth - marginRight - logoWidth;
    const y = 10;

    const addLogo = async () => {
      try {
        const resp = await fetch("/logo.png");
        const blob = await resp.blob();
        const reader = new FileReader();

        reader.onloadend = () => {
          const base64data = reader.result;
          if (base64data)
            doc.addImage(base64data, "PNG", x, y, logoWidth, logoHeight);
          drawForm(data);
          doc.save(`${data.id || "device"}.pdf`);
        };

        reader.readAsDataURL(blob);
      } catch (err) {
        console.error("Logo fetch failed:", err);
        drawForm(data);
        doc.save(`${data.id || "device"}.pdf`);
      }
    };

    const drawForm = (data) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(20);
      doc.setTextColor(255, 102, 0);
      doc.text("Sultan Tracker", 14, 18);
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0);
      doc.text("Customer Registration Form", 14, 26);
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
          ["Customer Email", data.uid?.email || "N/A"],
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
          ["Service Charge", `${data.service_charge || 0} BDT`],
          ["Install Purpose", install_purpose || "N/A"],
          ["Technician Name", issueBy || "N/A"],
          ["District", district || "N/A"],
          ["Install Date", installDate || "N/A"],
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
    };

    addLogo();
  };

  const handleDownload = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://retail-api.sultantracker.com/devices/inventory/${deviceId}`,
        {
          headers: {
            Authorization: "Bearer ####rangs.sultantrack.com!!!!$$###",
          },
        }
      );
      generatePDF(res.data);
    } catch (err) {
      alert("Failed to fetch customer info!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="bg-green-600 text-white rounded h-[30px] w-[30px] flex items-center justify-center hover:bg-green-700 transition"
      title="Download Customer Form"
    >
      {loading ? (
        <span className="text-[10px]">...</span>
      ) : (
        <MdDownload size={18} />
      )}
    </button>
  );
};

export default CustomerFormGenerator;
