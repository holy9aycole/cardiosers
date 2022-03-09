import ExperienceCard from "components/ExperienceCard";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MainFooter from "layouts/main/MainFooter";
import filter from "assets/images/filter-icon.png";
import useProperties from "hooks/useProperties";
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
  const { properties } = useProperties();
  const [selectvalue, setSelectValue] = React.useState(1);
  const [DrawerOpen, setDrawerOpen] = React.useState(false);
  const [swipableModalOpen, setSwipableModalOpen] = React.useState(false);

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  function filterArrayElementById(array) {
    return array.filter((element) => element.id === selectvalue);
  }

  const filteredProperties = filterArrayElementById(properties);

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
              value={selectvalue}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {properties.map((item, index) => (
                <MenuItem
                  key={index}
                  value={item.id}
                  divider={index !== properties.length - 1}
                >
                  {item.PropertyName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </FilterContainer>
        <Grid container className={classes.gridItemContainer}>
          {filteredProperties.map((item, index) => (
            <ExperienceCard
              key={index}
              RMZ_Ecoworld={`http://52.172.227.233${item?.About?.image?.url}`}
              category={item?.tag}
              name={item?.PropertyName}
              description={item?.About?.description}
              time={item?.updated_at}
            />
          ))}
        </Grid>
      </MainContainer>
      <MainFooter />
      <FilterSidebar
        isDrawerOpen={DrawerOpen}
        onCloseDrawer={() => setDrawerOpen(false)}
      />
      {window.innerWidth < 768 && (
        <SwipeableEdgeDrawer
          IsModalOpen={swipableModalOpen}
          onCloseModal={() => setSwipableModalOpen(false)}
        />
      )}
    </>
  );
}
