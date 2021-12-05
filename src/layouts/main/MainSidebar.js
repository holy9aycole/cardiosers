import React from "react";
import { Link } from "react-router-dom";

import Drawer from "@mui/material/Drawer";

import Divider from "@mui/material/Divider";

import ListItemText from "@mui/material/ListItemText";

import CloseIcon from "@mui/icons-material/Close";
import dShadow from "assets/images/drawer-shadow.svg";

import sidebarConfig from "layouts/main/SidebarConfig";
import {
  useStyles,
  LinkContainer,
  CloseIconContainer,
  Links,
} from "./MainSidebarStyles";

export default function MainSidebar(props) {
  const classes = useStyles();

  const closeDrawer = () => {
    props.onCloseDrawer();
  };

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={() => setState(true)}>{anchor}</Button> */}
          <Drawer
            anchor={anchor}
            open={props.isDrawerOpen}
            onClose={closeDrawer}
          >
            <LinkContainer>
              <CloseIconContainer
                onClick={closeDrawer}
                className={classes.closeIconContainer}
              >
                <CloseIcon className="icon" />
              </CloseIconContainer>
              <Divider />
              {sidebarConfig[0].items.map((row, index) => (
                <Links key={index} onClick={closeDrawer} button>
                  <Link style={{ textDecoration: "none" }} to={row.path}>
                    <ListItemText className="linkNav">{row.title}</ListItemText>
                  </Link>
                </Links>
              ))}
              <img className="shadow" src={dShadow} alt="drawer shadow" />
            </LinkContainer>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
