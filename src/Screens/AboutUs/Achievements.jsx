import React from 'react';
import { Typography } from '@mui/material';
import { HeadLine, Heading, DividerStyled } from "./styles";

function Achievements() {
    return (
        <>
            <HeadLine>
                <div className="line" />
                <Typography class="text">Achievements</Typography>
            </HeadLine>
            <Heading>We design for growth</Heading>
            <DividerStyled />
        </>
    )
}

export default Achievements
