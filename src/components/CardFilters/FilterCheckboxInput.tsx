import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";
import React from "react";

type Props = {
  handleFilterChange: (property: string, value: string[]) => void;
  items: string[];
  filters: string[];
  label: string;
  property: string;
};

const FilterCheckboxInput = ({
  handleFilterChange,
  items,
  filters,
  property,
  label,
}: Props) => {
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id={`${property}-filter-label`}>{label}</InputLabel>
      <Select
        labelId={`${property}-filter-label`}
        id={`${property}-filter`}
        multiple
        input={<OutlinedInput label={label} />}
        value={filters || []}
        onChange={(e) =>
          handleFilterChange(property, e.target.value as string[])
        }
        renderValue={(selected) => (selected as string[]).join(", ")}
      >
        {items.map((item) => (
          <MenuItem key={item} value={item}>
            <Checkbox checked={filters.includes(item)} />
            <ListItemText primary={item} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterCheckboxInput;
