import React from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import {
  HeadLine,
  Heading,
  SubHeading,
  DividerStyled,
  TabsBox,
  CapTabContent,
} from "./styles";

function TabPanel(props) {
  const { value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ py: 3 }}>
          <CapTabContent>
            <div className="starting">
              <Typography className="number">01</Typography>
              <Typography className="head">Property Management</Typography>
            </div>
            <Typography className="last-text">
              We oversee daily operations and maintenance of a diverse
              portfolio, comprising commercial, retail, residential, and
              mixed-use properties as well as public private partnerships.
            </Typography>
          </CapTabContent>
          <CapTabContent>
            <div className="starting">
              <Typography className="number">02</Typography>
              <Typography className="head">Leasing & Sales</Typography>
            </div>
            <Typography className="last-text">
              From Class-A commercial office space to luxury apartments, our
              team is dedicated to achieving leasing success in a competitive
              marketplace.
            </Typography>
          </CapTabContent>
          <CapTabContent>
            <div className="starting">
              <Typography className="number">03</Typography>
              <Typography className="head">Marketing</Typography>
            </div>
            <Typography className="last-text">
              Through market research, in-house expertise and a hands-on
              approach, we establish effective campaigns and programs
              highlighting the vision, identity, position and brand for each
              project.
            </Typography>
          </CapTabContent>
        </Box>
      )}
    </div>
  );
}

function Capabilities({ innerRef }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <HeadLine ref={innerRef}>
        <div className="line" />
        <Typography class="text">Capabilities</Typography>
      </HeadLine>
      <Heading>
        Innovation is a cornerstone of
        <br /> RMZ’s culture
      </Heading>
      <SubHeading>
        We're here to disrupt the way the world views work and transform the way
        we work by stretching imagination, adapting to the digital way of life,
        building integrated and engaged communities, and defining new
        benchmarks.
      </SubHeading>
      <SubHeading>
        We take on multiple roles to fulfill our vision:
        <br />
        Owner | Developer | Investor | Manager
      </SubHeading>

      <TabsBox>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Owner" className="tab-style" />
            <Tab label="Developer" className="tab-style" />
            <Tab label="Investor" className="tab-style" />
            <Tab label="Manager" className="tab-style" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} />
        <TabPanel value={value} index={1} />
        <TabPanel value={value} index={2} />
        <TabPanel value={value} index={3} />
      </TabsBox>

      <DividerStyled />
    </>
  );
}

export default Capabilities;
