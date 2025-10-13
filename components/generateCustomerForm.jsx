"use client";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generateCustomerForm = (data) => {
  const doc = new jsPDF("p", "mm", "a4");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Sultan Tracker", 15, 15);
  doc.text("Customer Registration Form", 125, 15);
  doc.setFontSize(10);
  doc.text("Virtual Control Platform", 15, 25);

  // === BASIC INFO ===
  autoTable(doc, {
    startY: 30,
    head: [["Date", "Device ID", "Package"]],
    body: [
      [
        new Date().toLocaleDateString(),
        data.device_id || "",
        data.package || "Standard",
      ],
    ],
    theme: "grid",
  });

  // === CUSTOMER INFO ===
  doc.setFont("helvetica", "bold");
  doc.text("Customer Information", 15, doc.lastAutoTable.finalY + 10);
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 15,
    head: [["Customer Name", "Company Name", "Contact No", "Alternative No"]],
    body: [
      [
        data.customer_name || "",
        data.company_name || "",
        data.contact_no || "",
        data.alternative_no || "",
      ],
    ],
    theme: "grid",
  });

  autoTable(doc, {
    startY: doc.lastAutoTable.finalY,
    head: [["Customer Address", "Email", "NID/Passport No"]],
    body: [[data.customer_address || "", data.email || "", data.nid || ""]],
    theme: "grid",
  });

  // === VEHICLE INFO ===
  doc.text("Vehicle Information", 15, doc.lastAutoTable.finalY + 10);
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 15,
    head: [["Vehicle Brand", "Model", "Chassis No", "Engine No"]],
    body: [
      [
        data.vehicle_brand || "",
        data.vehicle_model || "",
        data.chassis_no || "",
        data.engine_no || "",
      ],
    ],
    theme: "grid",
  });

  autoTable(doc, {
    startY: doc.lastAutoTable.finalY,
    head: [["Registration No", "Device Phone No", "Others (If any)"]],
    body: [
      [
        data.registration_no || "",
        data.device_phone_no || "",
        data.others || "",
      ],
    ],
    theme: "grid",
  });

  // === APP INFO ===
  doc.text("App Information", 15, doc.lastAutoTable.finalY + 10);
  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 15,
    head: [["Login Email", "Password"]],
    body: [[data.login_email || "", data.password || ""]],
    theme: "grid",
  });

  // === FOOTER ===
  doc.text(
    "Authorized Person for Sultan Tracker",
    15,
    doc.lastAutoTable.finalY + 25
  );
  doc.text("Customer Signature", 140, doc.lastAutoTable.finalY + 25);

  doc.save(`${data.device_id || "customer_form"}.pdf`);
};
