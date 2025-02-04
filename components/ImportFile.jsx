"use client";

import React from "react";
import * as XLSX from "xlsx";
import axios from "axios";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

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

        let insertedCount = 0;
        let skippedCount = 0;

        // console.log(jsonData, "Data");

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
            alert("DEvice Added Succfully");
            router.refresh("/store");
          } else if (saveResponse.status === 200) {
            alert(
              `${saveResponse.data.message}\n${saveResponse.data.data.join(
                "\n"
              )}`
            );
          }
        }

        // for (const row of jsonData) {
        //   try {
        //     if (!row.insert_date || row.insert_date === "undefined") {
        //       row.insert_date = new Date().toISOString();
        //     }

        //     if (!row.device_id) {
        //       console.warn("Skipping row due to missing device_id:", row);
        //       skippedCount++;
        //       continue;
        //     }
        //     const response = await axios.get(
        //       `/api/devices?device_id=${row.device_id}`
        //     );

        //     if (response.data && response.data.exists) {
        //       console.warn(
        //         `Device ID ${row.device_id} already exists! Skipping.`
        //       );
        //       skippedCount++;
        //       continue;
        //     }

        //     const saveResponse = await axios.post("/api/devices", row, {
        //       headers: { "Content-Type": "application/json" },
        //     });

        //     if (saveResponse.status === 201) {
        //       console.log("Inserted:", row);
        //       insertedCount++;
        //     }
        //   } catch (error) {
        //     console.error("Error processing row:", row, error);
        //     skippedCount++;
        //   }
        // }

        // alert(
        //   `Import completed! Inserted: ${insertedCount}, Skipped: ${skippedCount}`
        // );
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
