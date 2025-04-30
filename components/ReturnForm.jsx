"use client";

import { TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ReturnForm = ({ defaultItem }) => {
  const [item, setItem] = useState({
    ...defaultItem,
  });

  const router = useRouter();

  const updateDevice = async () => {
    const res = await fetch(`/api/devices/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!res.ok) {
      throw new Error("Failed to update topic");
    }
    router.push("/return");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Data:", item);
  };

  const handleCancel = () => {
    router.push("/return");
  };

  return (
    <div className="w-full h-[100%] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-2/3 h-[80%] gap-4 flex flex-col items-center justify-center"
      >
        <TextField
          className="w-2/4"
          type="text"
          name="device_id"
          value={item.device_id}
          label="Device Id"
          disabled
        />
        <TextField
          select
          className="w-2/4"
          name="send_to"
          value={item.send_to}
          label="Send To"
          onChange={handleChange}
        >
          {["Rangs", "Retail", "Store", "Return"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <div className="w-2/4 flex gap-4 justify-end">
          <Button type="button" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={updateDevice}>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default ReturnForm;
