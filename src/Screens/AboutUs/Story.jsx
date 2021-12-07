import React from 'react'
import mask from "assets/images/mask.svg";
import { Typography } from '@mui/material';
import { HeadLine, Heading, SubHeading, DividerStyled } from "./styles";

function Story() {
    return (
        <>
            <img className="shadow" src={mask} alt="shadow" />
            <HeadLine>
                <div className="line" />
                <Typography class="text">Story</Typography>
            </HeadLine>
            <Heading>Our history is<br /> a continuous pursuit of excellence</Heading>
            <SubHeading>
                RMZ Corp is one of Asias largest privately-owned real estate owner, investor, and
                developer that is committed to building socially, economically and environmentally
                responsible assets and communities. We are amongst the only zero debt real estate
                companies, globally. We have a presence in 6 major cities across India. Our deeply
                unifying purpose is to leverage their integrated digital platform to build smart,
                engaged, and quantiﬁed communities.
            </SubHeading>
            <Heading style={{ marginTop: '50px' }}>Our hyper growth strategy</Heading>
            <SubHeading>
                18 years and growing rapidly, we are equipped with exponential technologies that
                will accelerate our vision to build a global 1 million member community by 2026.
            </SubHeading>
            <DividerStyled />
        </>
    )
}

export default Story
