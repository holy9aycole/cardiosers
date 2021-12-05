import React from 'react'
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { Line, Heading, SubHeading, DividerStyled, TabsBox } from "./styles";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function Capabilities() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Line className="line" />
            <Heading>Innovation is a cornerstone of<br /> RMZ’s culture</Heading>
            <SubHeading>
                We're here to disrupt the way the world views work and transform the way we work by
                stretching imagination, adapting to the digital way of life, building integrated
                and engaged communities, and defining new benchmarks.
            </SubHeading>
            <SubHeading>
                We take on multiple roles to fulfill our vision:<br />
                Owner | Developer | Investor | Manager
            </SubHeading>

            <TabsBox >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} >
                        <Tab label="Owner" className="tab-style" />
                        <Tab label="Developer" className="tab-style" />
                        <Tab label="Investor" className="tab-style" />
                        <Tab label="Manager" className="tab-style" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
                </TabPanel>
            </TabsBox>

            <DividerStyled />
        </>
    )
}

export default Capabilities
