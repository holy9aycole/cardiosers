import React from 'react'
import { Typography } from '@mui/material';
import Time from 'assets/images/timeline.jpg';
import { HeadLine, Heading, DividerStyled, MainImage } from "./styles";

function Timeline() {
    return (
        <>
            <HeadLine>
                <div className="line" />
                <Typography class="text">Timeline</Typography>
            </HeadLine>
            <Heading>Our continuous pursuit to create <br /> the future of spaces</Heading>
            <MainImage src={Time} />
            <DividerStyled />
        </>
    )
}

export default Timeline
