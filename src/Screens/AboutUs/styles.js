import { Grid, styled, Typography, Divider, Box } from "@mui/material";

export const MainContainer = styled("div")(({ theme }) => ({
    width: "100%",
    height: "auto",
    marginTop: "6%",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
        marginTop: "12%",
        padding: "15px 0px 0px 0px",
    },
    [theme.breakpoints.only("sm")]: {
        marginTop: "8%",
        padding: "0px 10%",
    },

    "& .shadow": {
        position: "absolute",
        left: 0,
        top: 0,
    },
}));

// Story tab

export const HeadLine = styled("div")(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    '& .line': {
        marginTop: "6%",
        width: "12%",
        height: "1px",
        border: "1px solid #D6D6D6",
        marginLeft: "10%",
        backgroundColor: '#D6D6D6',
        [theme.breakpoints.down("md")]: {
            width: "15%",
            marginLeft: "5%",
        },
    },
    '& .text': {
        fontSize: "16px",
        lineHeight: '20px',
        fontWeight: 600,
        color: "#78909C",
        fontFamily: "Poppins",
        marginTop: "5%",
        marginLeft: "2%",
        [theme.breakpoints.down("md")]: {
            fontSize: "13px",
            marginLeft: "2%",
            marginTop: "4%",
        },
    }
}));

export const Heading = styled(Typography)(({ theme }) => ({
    fontSize: "48px",
    lineHeight: '58px',
    fontWeight: "Regular",
    textAlign: "left",
    color: "#3D3DD9",
    letterSpacing: "0.48px",
    fontFamily: "Ivypresto Display",
    marginTop: ".3%",
    marginLeft: "10%",
    width: "90%",
    [theme.breakpoints.down("md")]: {
        fontSize: "32px",
        lineHeight: '40px',
        width: "90%",
        letterSpacing: "0.32px",
        marginLeft: "5%",
        marginTop: "2.5%",
    },
}));
export const SubHeading = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    lineHeight: '28px',
    fontWeight: 600,
    textAlign: "left",
    color: "#202020",
    fontFamily: "Poppins",
    marginTop: "2%",
    marginLeft: "10%",
    width: "80%",
    [theme.breakpoints.down("md")]: {
        fontSize: "14px",
        lineHeight: '20px',
        width: "90%",
        marginLeft: "5%",
        marginTop: "5%",
    },
}));

export const TabsGrid = styled(Grid)(({ theme }) => ({
    position: 'fixed',
    right: '0px',
    width: '100%',
    height: '500px',
    [theme.breakpoints.down("md")]: {
        display: 'none'
    },
}));

export const DividerStyled = styled(Divider)(({ theme }) => ({
    width: '85%',
    marginLeft: "10%",
    backgroundColor: '#ECEFF1',
    height: 1,
    marginTop: '50px',
    [theme.breakpoints.down("md")]: {
        width: '90%',
        marginLeft: "5%",
    },
}));

// Capabilities

export const TabsBox = styled(Box)(({ theme }) => ({
    width: '85%',
    marginLeft: "10%",
    marginTop: '30px',
    [theme.breakpoints.down("md")]: {
        width: '90%',
        marginLeft: "5%",
    },
    '& .tab-style-side': {
        fontSize: "16px",
        lineHeight: '20px',
        margin: '0px 0px 20px 40px',
        textAlign: 'left',
        fontFamily: "Poppins",
        alignItems: 'baseline',
        '&.Mui-selected': {
            color: "#3D3DD9",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "13px",
        },
    },
    '& .tab-style': {
        fontSize: "16px",
        lineHeight: '20px',
        textAlign: 'left',
        fontFamily: "Poppins",
        '&.Mui-selected': {
            color: "#3D3DD9",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "13px",
        },
    }
}));

// Awards

export const NumberHeading = styled(Typography)(({ theme }) => ({
    fontSize: "24px",
    lineHeight: '20px',
    color: "#2E2E80",
    letterSpacing: '0.24px',
    marginBottom: '10px',
    fontFamily: "Ivypresto Display",
    [theme.breakpoints.down("md")]: {
        lineHeight: '24px',
    },
}));

export const MainPoints = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    "& .icon-back": {
        marginTop: '4px',
        backgroundColor: "#3D3DD9",
        height: '15px',
        width: '15px',
        borderRadius: '20px',
    },
    "& .icon": {
        color: "#0278AE",
        height: '7px',
        width: '7px',
        margin: 'auto',
        marginTop: '4px'
    },
    "& .point": {
        display: "flex",
        flexDirection: "row",
        margin: "12px 0px",
    },
    "& .subHeadingPoint": {
        marginLeft: '10px',
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: '26px',
        color: '#202020',
    },
    [theme.breakpoints.down("md")]: {

    },
}));
