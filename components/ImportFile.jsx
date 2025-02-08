"use client";

import React from "react";
import * as XLSX from "xlsx";
import axios from "axios";

import { useRouter } from "next/navigation";

const ImportFile = () => {
  const router = useRouter();
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        if (jsonData.length > 0) {
          const saveResponse = await axios.post(
            "/api/devices/store/file",
            jsonData,
            {
              headers: { "Content-Type": "application/json" },
            }
          );

          console.log(saveResponse);

          if (saveResponse.status === 201) {
            alert("Device Added Succfully");
            router.push("/store");
            router.refresh();
          } else if (saveResponse.status === 200) {
            alert(
              `${saveResponse.data.message}\n${saveResponse.data.data.join(
                "\n"
              )}`
            );
          }
        }
      } catch (error) {
        // if (error.status === 401) {
        //   console.log(error.response);
        //   alert(`DEvice Already Exist ${error.response.data.data.join("\n")}`);
        // } else {

        // }
        alert("Error processing the file. Please check the format.");
        console.error("Error reading file:", error);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <label className="border-2 h-[30px] lg:p-4 rounded-md flex items-center justify-center text-white cursor-pointer">
        <span className="lg:flex hidden">Import Excel</span>
        <input
          type="file"
          className="hidden"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
        />
      </label>
    </div>
  );
};

export default ImportFile;
