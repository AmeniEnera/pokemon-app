import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../../modules/actions/cards";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/reducers";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  OutlinedInput,
} from "@mui/material";
import { CardFilters as CardFiltersType } from "../../modules/types/cards";
import FilterCheckboxInput from "./FilterCheckboxInput";

const CardFilters: React.FC = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.cards.data);
  const filters = useSelector((state: RootState) => state.cards.filters);

  const rarities = [...new Set(cards.map((card) => card.rarity))].filter(
    (rarity) => !!rarity
  );

  const types = [...new Set(cards.map((card) => card.types).flat())];

  const [localFilters, setLocalFilters] = useState<CardFiltersType>(filters);

  const handleFilterChange = (
    property: string,
    value: string | string[] | undefined
  ) => {
    setLocalFilters((prevFilters) => ({ ...prevFilters, [property]: value }));
  };

  useEffect(() => {
    dispatch(setFilters(localFilters));
  }, [localFilters]);

  return (
    <Grid container spacing={6}>
      <Grid item container sm={8}>
        <div>
          <h3>Filters:</h3>
          <FilterCheckboxInput
            property="rarity"
            label="Rarity"
            filters={localFilters.rarity}
            items={rarities}
            handleFilterChange={handleFilterChange}
          />

          <FilterCheckboxInput
            property="types"
            label="Types"
            filters={localFilters.types}
            items={types}
            handleFilterChange={handleFilterChange}
          />
        </div>
      </Grid>
      <Grid item sm={4} display="flex" justifyContent="center">
        <div>
          <h3>Sort:</h3>

          <FormControl sx={{ m: 1, width: 200 }}>
            <InputLabel id="sort-filter-label">Sort by price</InputLabel>
            <Select
              labelId="sort-filter-label"
              id="sort-filter"
              input={<OutlinedInput label="Sort by Price" />}
              value={localFilters.sort || ""}
              onChange={(e) => handleFilterChange("sort", e.target.value)}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="asc">Price: Low to High</MenuItem>
              <MenuItem value="desc">Price: High to Low</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Grid>
    </Grid>
  );
};

export default CardFilters;
