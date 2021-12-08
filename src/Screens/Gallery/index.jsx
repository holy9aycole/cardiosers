import React from "react";
import DashboardNavbar from "layouts/dashboard/DashboardNavbar";
import GalleryCardComp from "components/GalleryCard";
import galleryImg1 from "assets/images/Gallery/g-3.png"
import { GalleryCardContainer } from "./styles";

function Gallery() {
	return (
		<>
			<DashboardNavbar title="Gallery"/>
			<GalleryCardContainer>
				<GalleryCardComp title="Connecting Spaces" images={[galleryImg1]} />
				<GalleryCardComp title="Connecting Spaces" images={[galleryImg1]} />
				<GalleryCardComp title="Connecting Spaces" images={[galleryImg1]} />
			</GalleryCardContainer>
		</>
	);
}

export default Gallery;
