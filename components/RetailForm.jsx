"use client";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import dayjs from "dayjs";
import TechName from "./TechnicianName";
import DistrictName from "./DistrictName";

const RetailForm = ({ defaultItem, isUpdate, technicians }) => {
  const [state, setState] = useState({
    datas: [],
  });

  const router = useRouter();

  const [item, setItem] = useState({
    ...defaultItem,
  });

  const [errors, setErrors] = useState({
    device_price: "",
  });

  // const validateFields = () => {
  //   let newErrors = { device_price: "" };

  //   if (item.is_complete) {
  //     const price = parseFloat(item.device_price);
  //     if (isNaN(price) || price < 1500 || price > 8000) {
  //       newErrors.device_price = "Device Price must be between 1500 and 8000";
  //     }
  //   }

  //   if (!item.device_price) {
  //     newErrors.device_price = "Price required";
  //   }

  //   setErrors(newErrors);
  //   return Object.values(newErrors).every((error) => error === "");
  // };

  const validateFields = () => {
    let newErrors = {};

    if (item.is_complete && item.install_purpose === "New_Install") {
      const price = parseFloat(item.device_price);

      if (!item.device_price) {
        newErrors.device_price = "Price required";
      } else if (isNaN(price) || price < 1500 || price > 8000) {
        newErrors.device_price = "Device Price must be between 1500 and 8000";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveDevice = async () => {
    const res = await fetch("/api/devices", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (res.ok) {
      router.refresh();
      router.push("/retail");
    } else {
      const responseData = await res.json();
      if (
        responseData.error &&
        responseData.error.includes("Device with this ID already exists")
      ) {
        alert(`Device with ID: ${item.device_id} already exists!`);
      } else {
        throw new Error(responseData.error || "Failed to save data");
      }
    }
  };

  const updateDevice = async () => {
    if (!validateFields()) return;

    const res = await fetch(`/api/devices/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!res.ok) {
      throw new Error("Failed to update device");
    }

    router.push("/retail");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSwitchChange = (name) => {
    setItem((prevValue) => ({
      ...prevValue,
      [name]: !prevValue[name],
    }));
  };

  return (
    <div className="w-full flex items-center justify-center p-4 lg:p-6 lg:w-[50%] lg:gap-2 flex-col">
      <div className="w-full h-[100%] lg:h-[90%] flex gap-2 flex-col">
        <TextField
          type="text"
          name="device_id"
          value={item.device_id || ""}
          label="Device Id"
          onChange={handleChange}
          disabled={isUpdate}
        />
        {!isUpdate && (
          <TextField
            type="text"
            name="device_model"
            value={item.device_model || ""}
            label="Device Model"
            onChange={handleChange}
          />
        )}
        <FormControl fullWidth>
          <InputLabel>Device Type</InputLabel>
          <Select
            type="text"
            name="device_type"
            value={item.device_type || ""}
            onChange={handleChange}
            disabled={isUpdate}
          >
            <MenuItem value="Voice">Voice</MenuItem>
            <MenuItem value="Non_Voice">Non_Voice</MenuItem>
          </Select>
        </FormControl>

        {!isUpdate && (
          <TextField
            type="text"
            name="from"
            value={item.from || ""}
            label="From"
            onChange={handleChange}
          />
        )}
        {!isUpdate && (
          <>
            {/* {" "}
            <TechName
              value={item.issue_by}
              onChange={handleChange}
              technicians={technicians}
            />
            <DistrictName
              value={item.district}
              onChange={handleChange}
              technicians={technicians}
            /> */}
            <TechName
              value={item.issue_by}
              onChange={handleChange}
              // error={errors.issue_by}
              technicians={technicians}
            />
            <DistrictName
              value={item.district}
              onChange={handleChange}
              // error={errors.district}
              technicians={technicians}
            />
          </>
        )}

        {!isUpdate && (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className="w-[100%]"
              label="Sending Date"
              type="date"
              name="sending_date"
              value={item.sending_date ? dayjs(item.sending_date) : null}
              onChange={(newValue) => {
                handleChange({
                  target: {
                    name: "sending_date",
                    value: newValue ? newValue.toISOString() : "", // Use ISO format
                  },
                });
              }}
            />
          </LocalizationProvider>
        )}
        {isUpdate && (
          <div className="flex">
            <p className="lg:w-[25%] w-[40%] h-[40px] flex items-center">
              COMPLETE
              {
                <Switch
                  value={item.is_complete || ""}
                  name="is_complete"
                  onChange={() => handleSwitchChange("is_complete")}
                  checked={item.is_complete || ""}
                />
              }
            </p>
            <div className="flex gap-4 w-full">
              {item.is_complete && (
                <FormControl className="w-[50%]">
                  <InputLabel>Install Purpose</InputLabel>
                  <Select
                    type="text"
                    name="install_purpose"
                    value={item.install_purpose || ""}
                    onChange={handleChange}
                  >
                    <MenuItem value="New_Install">New_Install</MenuItem>
                    <MenuItem value="Replace">Replace</MenuItem>
                  </Select>
                </FormControl>
              )}

              {item.is_complete && (
                <TextField
                  className="w-[50%]"
                  type="number"
                  label="Device Price"
                  name="device_price"
                  value={item.device_price || ""}
                  onChange={handleChange}
                  error={!!errors.device_price}
                  helperText={errors.device_price}
                />
              )}
            </div>
          </div>
        )}
      </div>
      <div className="flex w-full justify-end gap-4">
        <Button variant="outlined">
          <Link href="/retail">Cancel</Link>
        </Button>
        <Button
          onClick={isUpdate ? updateDevice : saveDevice}
          variant="outlined"
        >
          {isUpdate ? "Update" : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default RetailForm;
