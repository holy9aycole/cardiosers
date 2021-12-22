import { Card, styled } from '@mui/material'

export const BlueCard = styled(Card)(({ theme }) => ({
    background: "#2E2E80 0% 0% no-repeat padding-box",
    borderRadius: "15px",
    height: "auto",
    width: "100%",
    marginTop: "-20px",
    textAlign: "left",
    padding: "20px 20px 30px 20px",
    position: "relative",
    [theme.breakpoints.down("md")]: {
        fontSize: "12px",
        lineHeight: '20px',
        marginBottom: '20px',
        padding: "20px 20px 20px 20px",
    },
    "& .text2": {
        color: "#FFFFFF",
        letterSpacing: "0.48px",
        fontSize: "42px",
        fontFamily: 'Ivypresto Display',
        lineHeight: '27px',
        fontWeight: 400,
        marginTop: '10px',
        [theme.breakpoints.down("lg")]: {
            fontSize: "30px",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "38px",
            letterSpacing: '0.32px'
        },
        [theme.breakpoints.only("sm")]: {
            fontSize: "28px",
        },
    },
    "& .text3": {
        color: "#FFFFFF",
        fontSize: "13px",
        fontFamily: "Poppins",
        marginTop: "20px",
        [theme.breakpoints.down("lg")]: {
            fontSize: "13px",
            marginTop: "10px",
        },
        [theme.breakpoints.down("md")]: {
            marginTop: "10px",
            fontSize: "13px",
            letterSpacing: '0.32px'
        },
    },
}));


export const FooterShadow = styled("img")(() => ({
    position: "absolute",
    top: "0px",
    right: "0px",
    bottom: "0px",
}));