import { Grid, Tab, Tabs, } from '@mui/material';
import React from 'react'
import Achievements from './Achievements';
import Awards from './Awards';
import Capabilities from './Capabilities';
import Story from './Story';
import { MainContainer, TabsGrid } from "./styles";
import Timeline from './Timeline';
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
    return (
        <>
            <MainContainer>
                <Grid container>
                    <Grid item md={9} xs={12} >
                        <Story />
                        <Timeline />
                        <Capabilities />
                        <Achievements />
                        <Awards />
                    </Grid>
                    <TabsGrid item md={3}>
                        <TabsBox sx={{ flexGrow: 1, display: 'flex', marginTop: "50px" }} >
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                orientation="vertical"
                                sx={{
                                    borderLeft: 1,
                                    borderColor: 'divider',
                                    '.MuiTabs-indicator': {
                                        left: 0,
                                        width: '3px',
                                        background: '#e1201c'
                                    }
                                }}>
                                <Tab label="Story" className="tab-style-side" style={{ marginTop: '50px' }} disableRipple />
                                <Tab label="Time" className="tab-style-side" disableRipple />
                                <Tab label="Capabilities" className="tab-style-side" disableRipple />
                                <Tab label="Achievements" className="tab-style-side" disableRipple />
                                <Tab label="Awards" className="tab-style-side" disableRipple />
                            </Tabs>
                        </TabsBox>
                    </TabsGrid>
                </Grid>
            </MainContainer>
        </>
    )
}

export default AboutUs
