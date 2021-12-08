import { styled,Card } from "@mui/material"

export const Container = styled("div")({
	padding:10,
    display:"flex",
    alignItems:"center"
});

export const ImageCard = styled(Card)({
    borderRadius: 2,
    cursor:"pointer"
})