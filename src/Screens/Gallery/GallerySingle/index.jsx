import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Lightbox from "react-image-lightbox";
import DashboardNavbar from "layouts/dashboard/DashboardNavbar";
import detailedView1 from "assets/images/GalleryDetailed/3.png";
import detailedView2 from "assets/images/GalleryDetailed/4-1.png";
import detailedView3 from "assets/images/GalleryDetailed/4.png";
import detailedView4 from "assets/images/GalleryDetailed/6-1.png";
import detailedView5 from "assets/images/GalleryDetailed/6.png";
import detailedView6 from "assets/images/GalleryDetailed/7.png";
import detailedView7 from "assets/images/GalleryDetailed/8.png";
import detailedView8 from "assets/images/GalleryDetailed/9-1.png";
import detailedView9 from "assets/images/GalleryDetailed/9.png";
import detailedView10 from "assets/images/GalleryDetailed/10.png";
import detailedView11 from "assets/images/GalleryDetailed/11.png";
import detailedView12 from "assets/images/GalleryDetailed/12.png";
import detailedView13 from "assets/images/GalleryDetailed/13.png";
import detailedView14 from "assets/images/GalleryDetailed/14-1.png";
import detailedView15 from "assets/images/GalleryDetailed/14.png";
import detailedView16 from "assets/images/GalleryDetailed/16.png";
import detailedView17 from "assets/images/GalleryDetailed/17.png";
import detailedView18 from "assets/images/GalleryDetailed/18-1.png";
import detailedView19 from "assets/images/GalleryDetailed/18.png";
import detailedView20 from "assets/images/GalleryDetailed/19.png";
import { Container, ImageCard, StyledSwitch,ImageContainer } from "./styles";

const images = [
	detailedView1,
	detailedView3,
	detailedView4,
	detailedView2,
	detailedView5,
	detailedView6,
	detailedView7,
	detailedView8,
	detailedView9,
	detailedView10,
	detailedView11,
	detailedView12,
	detailedView13,
	detailedView14,
	detailedView15,
	detailedView16,
	detailedView17,
	detailedView18,
	detailedView19,
	detailedView20,
];

console.log(images);

function GallerySinglePage() {
	const [open, setOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);
	const [checked, setChecked] = useState(false);

	const handleOpen = (index) => {
		setOpen(!open);
		setPhotoIndex(index);
	};

	const handleChange = (e) => {
		setChecked(e.target.checked);
	};

	return (
		<>
			{!open && <DashboardNavbar title="Connecting Spaces" />}
			<ImageContainer>
				<Container>
					<StyledSwitch checked={checked} onChange={handleChange} />
					<ImageList
						variant="masonry"
						cols={window.innerWidth > 600 ? 7 : 3}
						gap={10}
					>
						{images.map((image, index) => (
							<ImageListItem key={index}>
								<ImageCard onClick={() => handleOpen(index)}>
									<img
										src={`${image}`}
										srcSet={`${image}`}
										alt=""
										loading="lazy"
									/>
								</ImageCard>
							</ImageListItem>
						))}
					</ImageList>
				</Container>
			</ImageContainer>

			{open && (
				<Lightbox
					mainSrc={images[photoIndex]}
					nextSrc={images[(photoIndex + 1) % images.length]}
					prevSrc={images[(photoIndex + images.length - 1) % images.length]}
					onCloseRequest={() => setOpen(false)}
					onMovePrevRequest={() =>
						setPhotoIndex((photoIndex + images.length - 1) % images.length)
					}
					onMoveNextRequest={() =>
						setPhotoIndex((photoIndex + 1) % images.length)
					}
				/>
			)}
		</>
	);
}

export default GallerySinglePage;
