import { styled, Card } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
	padding: 10,
	display: "flex",
	alignItems: "center",
    marginTop:100,
	[theme.breakpoints.down("sm")]: {
		marginTop: 70,
	},
}));

export const ImageCard = styled(Card)({
	borderRadius: 2,
	cursor: "pointer",
});
