import React from 'react'
import { Typography } from '@mui/material';
import { HeadLine, Heading, DividerStyled } from "./styles";

function Timeline() {
    return (
        <>
            <HeadLine>
                <div className="line" />
                <Typography class="text">Timeline</Typography>
            </HeadLine>
            <Heading>Our continuous pursuit to create <br /> the future of spaces</Heading>
            <DividerStyled />
        </>
    )
}

export default Timeline
