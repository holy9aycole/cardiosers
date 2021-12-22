import ExperienceCard from "components/ExperienceCard";
import React from "react";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Restaurant from "assets/images/restaurant.png";
// import Button from "@mui/material/Button";

import filter from "assets/images/filter-icon.png";

import FilterSidebar from "./FilterSidebar";

import {
  MainContainer,
  FilterContainer,
  FilterButton,
  useStyles,
} from "./styles";
import SwipeableEdgeDrawer from "./SwipableDrawer";

export default function SocialExperience() {
  const classes = useStyles();

  const [age, setAge] = React.useState("");
  const [DrawerOpen, setDrawerOpen] = React.useState(false);
  const [swipableModalOpen, setSwipableModalOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const openOnClick = () => {
    const w = window.innerWidth;
    console.log(w);
    if (w >= 768) {
      setDrawerOpen(true);
    } else {
      setSwipableModalOpen(true);
    }
  };

  return (
    <>
      <MainContainer>
        <FilterContainer>
          <FilterButton onClick={openOnClick} sx={{}}>
            <img src={filter} alt="filter" />
          </FilterButton>
          <FormControl sx={{ m: 1, minWidth: 180, width: 280 }}>
            <Select
              style={{
                color: "#3D3DD9",
                fontFamily: "Poppins",
                fontSize: "13px",
                fontWeight: 600,
              }}
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem className={classes.option} value={10}>
                Ten
              </MenuItem>
              <MenuItem className={classes.option} value={20}>
                Twenty
              </MenuItem>
              <MenuItem className={classes.option} value={30}>
                Thirty
              </MenuItem>
            </Select>
          </FormControl>
        </FilterContainer>

        <ExperienceCard
          RMZ_Ecoworld={Restaurant}
          cetegory="Restaurant"
          name="RMZ Ecoworld"
          description="An architectural marvel redefining the idea of tech parks in
Bangalore, India."
          time="1h"
        />
      </MainContainer>
      <FilterSidebar
        isDrawerOpen={DrawerOpen}
        onCloseDrawer={() => setDrawerOpen(false)}
      />
      {window.innerWidth < 768 && (
        <SwipeableEdgeDrawer
          IsModalOpen={swipableModalOpen}
          // eslint-disable-next-line
          onCloseModal={() => setSwipableModalOpen(false)}
        />
      )}
    </>
  );
}
