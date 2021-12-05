import { Grid } from '@mui/material';
import React from 'react'
import Achievements from './Achievements';
import Awards from './Awards';
import Capabilities from './Capabilities';
import Story from './Story';
import { MainContainer, TabsGrid } from "./styles";
import Timeline from './Timeline';

function AboutUs() {
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
                        vxcz
                    </TabsGrid>
                </Grid>
            </MainContainer>
        </>
    )
}

export default AboutUs
