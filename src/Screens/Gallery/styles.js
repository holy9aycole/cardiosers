import { styled } from "@mui/material";

export const GalleryCardContainer = styled("div")(({theme})=>({
	position: "absolute",
	top: 130,
    padding:10,
	width: "100%",
	height: "100%",
	display:"flex",
	justifyContent:"space-around",
	[theme.breakpoints.down("sm")]:{
		flexDirection:"column"
	}

}));
