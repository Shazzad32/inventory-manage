import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

const TechName = ({ value, onChange, error, technicians }) => {
  const sortedTechnicians = [...technicians].sort((a, b) =>
    a.tech_name.localeCompare(b.tech_name)
  );

  return (
    <FormControl fullWidth error={!!error}>
      <InputLabel>Issue To</InputLabel>
      <Select value={value || ""} onChange={onChange} name="issue_by">
        {sortedTechnicians.map((tech, i) => (
          <MenuItem key={i} value={tech.tech_name}>
            {tech.tech_name}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default TechName;
