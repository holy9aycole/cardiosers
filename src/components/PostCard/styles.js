import { styled } from "@mui/styles";
import { Card,Button,Typography } from "@mui/material"

export const StyledCard = styled(Card)(({ theme }) => ({
    width: "40%",
    padding: 10,
    paddingBottom: 0,
    borderRadius: "4px",
    background: "#FFFFFF",
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));

export const StyledContentDiv = styled("div")({
    backgroundImage: "url(../../assets/Mask Group 18.svg)",
});

export const StyledButton = styled(Button)({
    position: "absolute",
    borderRadius: "50%",
    height: "60px",
    width: "50px",
    background: "#3D3DD9",
    color: "#fff",
    bottom: "16%",
    right: "5%",
    "&:hover": {
        background: "#fff",
        color: "#3D3DD9",
    },
});

export const MediaBox = styled("div")({
    display: "flex",
    overflow: "hidden",
});

export const CardMediaBox1 = styled("div")({
    width: "60%",
});

export const CardMediaBox2 = styled("div")({
    width: "100%",
    marginLeft: 5,
});

export const CardMediaBox3 = styled("div")({
    width: "100%",
    marginLeft: 5,
    marginTop: 5,
});

export const FooterContainer = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 10px",
});

export const Footer = styled("div")({
    display: "flex",
});

export const FooterDiv = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 5,
});

export const FooterFont = styled(
    <Typography color="primary" />
)({
    padding: "0px 16px",
    fontSize: 13,
    color: "#3D3DD9",
});

export const MediaDiv = styled("div")({
    flexDirection: "column",
    display: "flex",
    justifyContent: "space-between",
});
