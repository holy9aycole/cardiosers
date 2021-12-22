import React from 'react'
import { Typography } from '@mui/material'
import mask2 from "assets/images/mask3.png";
import { BlueCard, FooterShadow } from './styles'

function BlueCardAchievement(props) {
    return (
        <BlueCard>
            <Typography className="text2">{props.name}</Typography>
            <Typography className="text3">{props.description}</Typography>
            <FooterShadow src={mask2} alt="footer shadow" />
        </BlueCard>
    )
}

export default BlueCardAchievement
