"use client";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Autocomplete,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import TechName from "./TechnicianName";
import DistrictName from "./DistrictName";
import workshop from "@/data";

const StoreForm = ({ defaultItem, isUpdate, technicians }) => {
  const router = useRouter();
  const [item, setItem] = useState({ ...defaultItem });
  const [errors, setErrors] = useState({
    issue_by: "",
    district: "",
    workshop: "",
  });
  const [loading, setLoading] = useState(false);

  console.log(item, "item");

  const validateFields = () => {
    let newErrors = {
      issue_by: "",
      district: "",
    };

    if (item.send_to === "Retail") {
      if (!item.issue_by) newErrors.issue_by = "Issue By is required";
      if (!item.district) newErrors.district = "District Name is required";
    } else if (item.send_to === "Rangs") {
      if (!item.workshop) newErrors.workshop = "Workshop Name is required";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const saveDevice = async () => {
    try {
      const res = await fetch("/api/devices", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(item),
      });

      const { message, error } = await res.json();
      alert(res.ok ? message : error || "Failed to save data");
      if (res.ok) router.push("/store");
    } catch (err) {
      console.error("Error saving device:", err);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  const updateDevice = async () => {
    if (!validateFields()) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/devices/${item._id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(item),
      });

      if (!res.ok) throw new Error("Failed to update device");
      router.push("/store");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update device");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (item[name] !== value) {
      setItem((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleAutocompleteChange = (name, newValue) => {
    setItem((prevUser) => ({
      ...prevUser,
      [name]: newValue,
    }));
  };

  return (
    <div className="w-full h-[100%] flex items-center justify-center gap-2 p-4 lg:p-6 lg:w-[50%] lg:gap-4 flex-col">
      <div className="w-full h-[90%] flex gap-4 flex-col">
        <TextField
          type="text"
          name="device_id"
          value={item.device_id || ""}
          label="Device Id"
          onChange={handleChange}
          disabled={isUpdate}
          error={errors.device_id}
          helperText={errors.device_id || ""}
        />

        {!isUpdate && (
          <>
            <TextField
              type="text"
              name="device_model"
              value={item.device_model || ""}
              label="Device Model"
              onChange={handleChange}
            />
            <TextField
              type="text"
              name="from"
              value={item.from || ""}
              label="From"
              onChange={handleChange}
            />
          </>
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

        {isUpdate && (
          <FormControl fullWidth>
            <InputLabel>Send To</InputLabel>
            <Select
              type="text"
              name="send_to"
              value={item.send_to || ""}
              onChange={handleChange}
            >
              <MenuItem value="Store">Store</MenuItem>
              <MenuItem value="Retail">Retail</MenuItem>
              <MenuItem value="Rangs">Rangs</MenuItem>
            </Select>
          </FormControl>
        )}

        {isUpdate && item.send_to === "Retail" && (
          <div className="w-full flex gap-2">
            <TechName
              value={item.issue_by}
              onChange={handleChange}
              error={errors.issue_by}
              technicians={technicians}
            />
            <DistrictName
              value={item.district}
              onChange={handleChange}
              error={errors.district}
              technicians={technicians}
            />
          </div>
        )}

        {isUpdate && item.send_to === "Rangs" && (
          <Autocomplete
            fullWidth
            options={workshop}
            value={item.workshop || ""}
            onChange={(e, newValue) =>
              handleAutocompleteChange("workshop", newValue)
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Workshop"
                error={!!errors.workshop}
                helperText={errors.workshop || ""}
              />
            )}
          />
        )}
      </div>

      <div className="flex w-full justify-end gap-2">
        <Button variant="outlined">
          <Link href="/store">Cancel</Link>
        </Button>
        <Button
          onClick={isUpdate ? updateDevice : saveDevice}
          variant="outlined"
          disabled={loading}
        >
          {loading ? "Processing..." : isUpdate ? "Update" : "Submit"}
        </Button>
      </div>
    </div>
  );
};
export default StoreForm;
