import ExperienceCard from "components/ExperienceCard";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";
import Select from "@mui/material/Select";
import MainFooter from "layouts/main/MainFooter";
// import filter from "assets/images/filter-icon.png";
// import useProperties from "hooks/useProperties";
// import FilterSidebar from "./FilterSidebar";
import { data } from "./data";
import {
  MainContainer,
  FilterContainer,
  // FilterButton,
  SelectStyle,
  useStyles,
} from "./styles";
// import SwipeableEdgeDrawer from "./SwipableDrawer";

export default function SocialExperience() {
  const classes = useStyles();
  // const { properties } = useProperties();
  const [selectvalue, setSelectValue] = React.useState(1);
  // const [DrawerOpen, setDrawerOpen] = React.useState(false);
  // const [swipableModalOpen, setSwipableModalOpen] = React.useState(false);

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  function filterArrayElementById(array) {
    return array.find((element) => element.id === selectvalue);
  }

  const filteredData = filterArrayElementById(data);

  // const openOnClick = () => {
  //   const w = window.innerWidth;
  //   if (w >= 768) {
  //     setDrawerOpen(true);
  //   } else {
  //     setSwipableModalOpen(true);
  //   }
  // };

  return (
    <>
      <MainContainer>
        <FilterContainer>
          {/* <FilterButton onClick={openOnClick} sx={{}}>
            <img src={filter} alt="filter" />
          </FilterButton> */}
          <SelectStyle>
            <Select
              style={{
                color: "#3D3DD9",
                fontFamily: "Poppins",
                fontSize: "13px",
                fontWeight: 600,
              }}
              value={selectvalue}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {data.map((item, index) => (
                <MenuItem
                  key={index}
                  value={item.id}
                  divider={index !== data.length - 1}
                >
                  {item.category}
                </MenuItem>
              ))}
            </Select>
          </SelectStyle>
        </FilterContainer>
        <Grid container className={classes.gridItemContainer}>
          {filteredData.posts.map((item, index) => (
            <ExperienceCard
              key={index}
              RMZ_Ecoworld={item?.image}
              category={item?.title}
              name={item?.heading}
              description={item?.content}
              // time={item?.updated_at}
            />
          ))}
        </Grid>
      </MainContainer>
      <MainFooter />
      {/* <FilterSidebar
        isDrawerOpen={DrawerOpen}
        onCloseDrawer={() => setDrawerOpen(false)}
      /> */}
      {/* {window.innerWidth < 768 && (
        <SwipeableEdgeDrawer
          IsModalOpen={swipableModalOpen}
          onCloseModal={() => setSwipableModalOpen(false)}
        />
      )} */}
    </>
  );
}
