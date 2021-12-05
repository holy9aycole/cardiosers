import React from 'react'
import indiaMap from '../../assets/images/india-map.svg'
import { IndiaMap, MainContainer, Text1 } from './styles'
import Navbar from '../../layouts/dashboard/DashboardNavbar'


function Index() {

    return (
        <>
            <Navbar />
            <MainContainer>
                <Text1>We are the<br /> Future of Space</Text1>
                <IndiaMap src={indiaMap} alt="" />

            </MainContainer>
        </>
    )
}

export default Index;
