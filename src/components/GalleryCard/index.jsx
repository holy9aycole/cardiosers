import React from "react";
import { useNavigate } from "react-router-dom";
import { GalleryCard, GalleryCardText, StyledDiv } from "./styles";

function GalleryCardComp({ title, images }) {
	const navigate = useNavigate();

	return (
		<GalleryCard onClick={()=>(
			navigate("/gallery-single")
		)}>
			<img src={images[0]} alt="" />
			<GalleryCardText>{title}</GalleryCardText>
			<StyledDiv />
		</GalleryCard>
	);
}

export default GalleryCardComp;
