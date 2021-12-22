import React from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import Arrow from 'assets/icons/button-arrow.svg';
import { HeadLine, Heading, TabsBox, NumberHeading, MainPoints } from "./styles";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box sx={{ py: 3 }}>
                    <NumberHeading>{children}</NumberHeading>
                    <MainPoints >
                        <div className="point">
                            <div className="icon-back">
                                <img src={Arrow} className="icon" alt="" />
                            </div>
                            <Typography className="subHeadingPoint">CNN News18 - Influential Leader of New India</Typography>
                        </div>
                        <div className="point">
                            <div className="icon-back">
                                <img src={Arrow} className="icon" alt="" />
                            </div>
                            <Typography className="subHeadingPoint">National Award for Excellence in Real Estate - Developer of the Year</Typography>
                        </div>
                        <div className="point">
                            <div className="icon-back">
                                <img src={Arrow} className="icon" alt="" />
                            </div>
                            <Typography className="subHeadingPoint">Times Business Awards - Most Admired Upcoming Project - RMZ One Paramount One Chennai</Typography>
                        </div>
                        <div className="point">
                            <div className="icon-back">
                                <img src={Arrow} className="icon" alt="" />
                            </div>
                            <Typography className="subHeadingPoint">Times Business Awards - The Most Dynamic Real Estate Management Team</Typography>
                        </div>
                        <div className="point">
                            <div className="icon-back">
                                <img src={Arrow} className="icon" alt="" />
                            </div>
                            <Typography className="subHeadingPoint">Times Business Awards - Developer of the Year 2021 - Sustainable Development</Typography>
                        </div>
                        <div className="point">
                            <div className="icon-back">
                                <img src={Arrow} className="icon" alt="" />
                            </div>
                            <Typography className="subHeadingPoint">Economic Times – Best Realty Brands and Prestigious Brands</Typography>
                        </div>
                        <div className="point">
                            <div className="icon-back">
                                <img src={Arrow} className="icon" alt="" />
                            </div>
                            <Typography className="subHeadingPoint">Team Marksmen and CNBC - Most Trusted Brands</Typography>
                        </div>
                    </MainPoints>
                </Box>
            )}
        </div>
    );
}

function Awards() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <HeadLine>
                <div className="line" />
                <Typography class="text">Awards</Typography>
            </HeadLine>
            <Heading>Smart spaces that are recognised <br />for excellence</Heading>
            <TabsBox >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} >
                        <Tab label="2021" className="tab-style" />
                        <Tab label="2020" className="tab-style" />
                        <Tab label="2018" className="tab-style" />
                        <Tab label="2017" className="tab-style" />
                        <Tab label="2014" className="tab-style" />
                        <Tab label="2009" className="tab-style" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    2021
                </TabPanel>
                <TabPanel value={value} index={1}>
                    2020
                </TabPanel>
                <TabPanel value={value} index={2}>
                    2018
                </TabPanel>
                <TabPanel value={value} index={3}>
                    2017
                </TabPanel>
                <TabPanel value={value} index={4}>
                    2014
                </TabPanel>
                <TabPanel value={value} index={5}>
                    2009
                </TabPanel>
            </TabsBox>
        </>
    )
}

export default Awards
