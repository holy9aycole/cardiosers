// material
import { styled } from "@mui/material/styles";
import { useState } from "react";
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
} from "@mui/material";
import SvgIconStyle from "components/SvgIconStyle";
import PostCard from "components/PostCard";
import useNewsFeed from "hooks/useNewsFeed";
import moment from "moment";

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

const ListMain = styled(List)({
  padding: "20px 0px 0px 250px",
  position: "fixed",
  cursor: "pointer",
});

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
  paddingBottom: theme.spacing(10),
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
  return (
    <>
      <Header title="News Feed" />
      <RootStyle>
        <Grid container>
          <Grid
            item
            md={4}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <MainStyle>
              <ListMain
                component="div"
                disablePadding
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                }}
              >
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
            </MainStyle>
          </Grid>
          <Grid item md={8}>
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
    </>
  );
}
