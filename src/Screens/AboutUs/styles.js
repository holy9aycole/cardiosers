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

export const Metrics = styled('div')(({ theme }) => ({
    display: 'flex',
    marginTop: '20px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down("md")]: {
        flexDirection: 'row',
    },
    '& .first-row': {
        display: 'flex',
        flexDirection: 'row',
        width: '85%',
        paddingLeft: '10%',
        margin: '20px 0px',
        justifyContent: 'space-between',
        [theme.breakpoints.down("md")]: {
            paddingLeft: '5%',
            flexDirection: 'column',
        },
        '& .main-text': {
            fontSize: "40px",
            lineHeight: '20px',
            letterSpacing: '0.4px',
            fontFamily: 'Ivypresto Display',
            color: "#3D3DD9",
            [theme.breakpoints.down("md")]: {
                paddingTop: '40px',
            },
        },
        '& .sub-text': {
            fontSize: "14px",
            lineHeight: '20px',
            fontFamily: 'Poppins',
            fontWeight: 600,
            color: "#202020",
            [theme.breakpoints.down("md")]: {
                fontSize: "13px",
            },
        },
        '& .first': {
            fontSize: "16px",
            lineHeight: '20px',
            paddingRight: '20px',
            textAlign: 'left',
            fontFamily: "Poppins",
            marginTop: '10px',
            [theme.breakpoints.down("md")]: {
                fontSize: "13px",
            },
        },
        '& .border': {
            borderRight: '2px solid #90A4AE',
            [theme.breakpoints.down("md")]: {
                borderRight: 'none',
                borderBottom: '2px solid #90A4AE',
                width: '50%'
            },
        }
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

export const CapTabContent = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
    '& .starting': {
        display: "flex",
        flexDirection: "row",
        width: '35%',
        marginBottom: '10px',
        [theme.breakpoints.down("md")]: {
            width: '100%',
            marginBottom: '10px'
        },
        '& .number': {
            fontSize: "40px",
            lineHeight: '24px',
            color: "#ECEFF1",
            letterSpacing: '0.4px',
            fontFamily: "Ivypresto Display",
            marginTop: '10px',
            [theme.breakpoints.down("md")]: {
                marginTop: '0px',
                fontSize: "24px",
                letterSpacing: '0.24px',
            },
        },
        '& .head': {
            fontSize: "24px",
            lineHeight: '34px',
            color: "#2E2E80",
            letterSpacing: '0.24px',
            fontFamily: "Ivypresto Display",
            marginLeft: '10%',
            textAlign: 'left',
            [theme.breakpoints.down("md")]: {
                fontSize: "16px",
                lineHeight: '24px',
                letterSpacing: '0.16px',
                marginLeft: '5%',
            },
        }
    },
    '& .last-text': {
        fontSize: "16px",
        lineHeight: '28px',
        color: '#202020',
        fontFamily: "Poppins",
        width: '80%',
        marginBottom: '30px',
        [theme.breakpoints.down("md")]: {
            fontSize: "13px",
            lineHeight: '20px',
            marginBottom: '30px'
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

// Timeline

export const MainImage = styled('img')(({ theme }) => ({
    marginLeft: '10%',
    marginTop: '10px',
    width: '80%',
    [theme.breakpoints.down("md")]: {
        marginLeft: '5%',
        width: '90%'
    },
}));

export const ImgText = styled(Typography)(({ theme }) => ({
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: '20px',
    color: '#202020',
    float: 'right',
    marginTop: '10px',
    marginRight: '10%',
    [theme.breakpoints.down("md")]: {
        fontSize: "16px",
        float: 'left',
        margin: '5%'
    },
}));

// Achievements

export const ImageGrid = styled(Grid)(({ theme }) => ({
    marginBottom: 100,
    marginLeft: '8.5%',
    width: '81.5%',
    marginTop: "-40px",
    position: "relative",
    [theme.breakpoints.down("md")]: {
        marginLeft: '4%',
        width: '81.5%',
    },
    [theme.breakpoints.only("sm")]: {
        marginLeft: '2.5%',
        width: '92.5%',
    },
    [theme.breakpoints.down("sm")]: {
        marginLeft: '1%',
        width: '95%',
    },
}));