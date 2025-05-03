import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

import { district } from "../data"; // Assumes district is an array of strings

const DistrictName = ({ value, onChange, error }) => {
  const sortedDistricts = [...district].sort((a, b) => a.localeCompare(b));

  return (
    <FormControl fullWidth error={!!error}>
      <InputLabel>District</InputLabel>
      <Select value={value || ""} onChange={onChange} name="district">
        {sortedDistricts.map((dist, i) => (
          <MenuItem key={i} value={dist}>
            {dist}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default DistrictName;
