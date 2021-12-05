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

export const Line = styled("div")(({ theme }) => ({
    marginTop: "6%",
    width: "12%",
    height: "2px",
    border: "1px solid #D6D6D6",
    marginLeft: "10%",
    [theme.breakpoints.down("md")]: {
        width: "15%",
        marginLeft: "5%",
    },
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
    backgroundColor: 'green',
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
    '& .tab-style': {
        fontSize: "16px",
        lineHeight: '20px',
        color: "#3D3DD9",
        fontFamily: "Poppins",
        [theme.breakpoints.down("md")]: {
            fontSize: "13px",
        },
    }
}));