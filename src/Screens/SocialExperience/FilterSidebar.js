import React from "react";

import Drawer from "@mui/material/Drawer";

import Divider from "@mui/material/Divider";

import { Typography } from "@mui/material";

import {
  useStyles,
  LinkContainer,
  Filter,
  //   CloseIconContainer,
} from "./filterSidebarStyles";

export default function FilterSidebar(props) {
  const classes = useStyles();

  const closeDrawer = () => {
    props.onCloseDrawer();
  };

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={props.isDrawerOpen}
            onClose={closeDrawer}
          >
            <LinkContainer>
              <Typography className={classes.heading}>Sort / Filter</Typography>
              <Divider sx={{ mb: 2 }} />
              {[
                "All",
                "Restaurant",
                "Wellness",
                "Art Walk",
                "Retail",
                "Events",
              ].map((f, index) => (
                <Filter key={index}>
                  <div className="filterContainer">{f}</div>
                </Filter>
              ))}
            </LinkContainer>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
