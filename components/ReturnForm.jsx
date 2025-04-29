"use client";

import { TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ReturnForm = ({ defaultItem }) => {
  const [item, setItem] = useState({
    device_id: defaultItem.device_id || "",
    send_to: defaultItem.send_to || "",
    problem: defaultItem.problem || "", // You had typo: "problems" but field should be "problem"
  });

  const router = useRouter();

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
    console.log("Canceled");
    router.push("/retail");
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
          className="w-2/4"
          type="text"
          name="issue_by"
          value={item.issue_by}
          label="Technician"
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

        <TextField
          className="w-2/4"
          type="text"
          name="problem"
          value={item.problem}
          label="Problem"
          onChange={handleChange}
        />

        <div className="w-2/4 flex gap-4 justify-end">
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReturnForm;
