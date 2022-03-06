import React from "react";

import Drawer from "@mui/material/Drawer";

import Divider from "@mui/material/Divider";
import useCategory from "hooks/useCategory";
import { Typography } from "@mui/material";

import {
  useStyles,
  LinkContainer,
  Filter,
  //   CloseIconContainer,
} from "./filterSidebarStyles";

export default function FilterSidebar(props) {
  const classes = useStyles();
  const { category } = useCategory();
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
              {category.map((item, index) => (
                <Filter key={index}>
                  <div className="filterContainer">{item.name}</div>
                </Filter>
              ))}
            </LinkContainer>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
