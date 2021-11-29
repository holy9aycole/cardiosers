import React from 'react'
// import {Typography} from '@mui/material'
import indiaMap from '../../assets/images/india-map.svg'
import {useStyles, IndiaMap, MainContainer, Text1} from './styles'
import Navbar from '../../layouts/dashboard/DashboardNavbar'
import LocationPoint from '../../assets/images/location-point.svg'
import Location1 from '../../assets/images/location-tag (1).svg'
// import Location2 from '../../assets/location-tag-2.svg'
// import Location3 from '../../assets/location-tag.svg'


function Index() {
    const classes = useStyles();
    return (
        <>
         <Navbar/>
        <MainContainer>
            <Text1>We are the<br/> Future of Space</Text1>
            <IndiaMap src={indiaMap} alt="" />
            <div>
                <img src={Location1} alt="" className={classes.location1}/>
                <div className={classes.border1}/>
                <img src={LocationPoint} alt="" className={classes.locationPoint1}/>
            </div>
        </MainContainer>
        </>
    )
}

export default Index;
