// material
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
//
import Header from "layouts/main/MainNavbar";
import useProperties from "hooks/useProperties";
import {
  Grid,
  Box,
  List,
  ListItemText,
  ListItemIcon,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

import SvgIconStyle from "components/SvgIconStyle";
import PostCard from "components/PostCard";
import useNewsFeed from "hooks/useNewsFeed";
import moment from "moment";
import MainFooter from "layouts/main/MainFooter";

// ----------------------------------------------------------------------

const Assets = styled(Typography)(({ theme }) => ({
  fontFamily: "Ivypresto Display",
  fontSize: "24px",
  color: "#3D3DD9",
  marginBottom: "10px",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));

const GridStyle = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));

const FilterContainer = styled("div")(({ theme }) => ({
  width: "100%",
  //   border: "1px solid green",
  height: "auto",
  padding: "1px 5%",
  marginTop: "5%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const getIcon = (name) => (
  <SvgIconStyle
    src={`/static/icons/navbar/${name}.svg`}
    sx={{ width: "100%", height: "100%" }}
  />
);

const ICONS = {
  building: getIcon("ic_building"),
};

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;
// ----------------------------------------------------------------------

const ListMain = styled(List)(({ theme }) => ({
  padding: "20px 0px 0px 250px",
  position: "fixed",
  cursor: "pointer",
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const ListItemStyle = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  width: "fit-content",
  display: "flex",
  flexDirection: "row",
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,

  backgroundColor: "#EEEEEE",
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const { properties } = useProperties();
  const [active, setActive] = useState(properties.map((item) => item.id));
  const { newsFeed } = useNewsFeed();

  const [selectvalue, setSelectValue] = React.useState(1);

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <>
      <Header title="News Feed" />
      <RootStyle>
        <Grid container>
          <GridStyle
            item
            md={4}
            xs={12}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <MainStyle>
              <ListMain component="div" disablePadding>
                <ListItemStyle>
                  <ListItemIconStyle>
                    <Box
                      component="span"
                      sx={{
                        width: 30,
                        height: 30,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {ICONS.building}
                    </Box>
                  </ListItemIconStyle>
                  <ListItemText>All Assets</ListItemText>
                </ListItemStyle>
                {properties.map((item, index) => (
                  <ListItemStyle key={index} onClick={() => setActive(!active)}>
                    <ListItemIconStyle>
                      <Box
                        component="span"
                        sx={{
                          width: 30,
                          height: 30,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {ICONS.building}
                      </Box>
                    </ListItemIconStyle>
                    <ListItemText style={{ color: active ? "blue" : "grey" }}>
                      {item.PropertyName}
                    </ListItemText>
                  </ListItemStyle>
                ))}
              </ListMain>

              <FilterContainer>
                <FormControl sx={{ m: 1, minWidth: 180, width: "100%" }}>
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
            </MainStyle>
          </GridStyle>
          <Grid item md={8} xs={12}>
            <MainStyle>
              {newsFeed.map((item, index) => (
                <>
                  <Assets key={index}>{item.property.PropertyName}</Assets>
                  <PostCard
                    link={item.ArticleLink}
                    time={moment(item.updated_at).fromNow()}
                    style={{ margin: "40px 0px" }}
                  />
                </>
              ))}
            </MainStyle>
          </Grid>
        </Grid>
      </RootStyle>
      <MainFooter />
    </>
  );
}
