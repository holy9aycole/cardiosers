import { Grid, Tab, Tabs } from "@mui/material";
import React, { useRef } from "react";
import Achievements from "./Achievements";
import Awards from "./Awards";
import Capabilities from "./Capabilities";
import Story from "./Story";
import { MainContainer, TabsGrid } from "./styles";
import Timeline from "./Timeline";
import { TabsBox } from "./styles";

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

function AboutUs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const story = useRef(null);
  const timeline = useRef(null);
  const capabilities = useRef(null);
  const achievements = useRef(null);
  const awards = useRef(null);

  return (
    <>
      <MainContainer>
        <Grid container>
          <Grid item md={9} xs={12}>
            <Story innerRef={story} />
            <Timeline innerRef={timeline} />
            <Capabilities innerRef={capabilities} />
            <Achievements innerRef={achievements} />
            <Awards innerRef={awards} />
          </Grid>
          <TabsGrid item md={3}>
            <TabsBox sx={{ flexGrow: 1, display: "flex", marginTop: "50px" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                orientation="vertical"
                sx={{
                  borderLeft: 1,
                  borderColor: "divider",
                  ".MuiTabs-indicator": {
                    left: 0,
                    width: "3px",
                    background: "#e1201c",
                  },
                }}
              >
                <Tab
                  label="Story"
                  className="tab-style-side"
                  style={{ marginTop: "50px" }}
                  disableRipple
                  onClick={() =>
                    story.current.scrollIntoView({ behavior: "smooth" })
                  }
                />
                <Tab
                  label="Time"
                  className="tab-style-side"
                  disableRipple
                  onClick={() =>
                    timeline.current.scrollIntoView({ behavior: "smooth" })
                  }
                />
                <Tab
                  label="Capabilities"
                  className="tab-style-side"
                  disableRipple
                  onClick={() =>
                    capabilities.current.scrollIntoView({ behavior: "smooth" })
                  }
                />
                <Tab
                  label="Achievements"
                  className="tab-style-side"
                  disableRipple
                  onClick={() =>
                    achievements.current.scrollIntoView({ behavior: "smooth" })
                  }
                />
                <Tab
                  label="Awards"
                  className="tab-style-side"
                  disableRipple
                  onClick={() =>
                    awards.current.scrollIntoView({ behavior: "smooth" })
                  }
                />
              </Tabs>
            </TabsBox>
          </TabsGrid>
        </Grid>
      </MainContainer>
    </>
  );
}

export default AboutUs;
