import React, { useState } from "react";
import {
	ImageList,
	// Modal
} from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import Lightbox from "react-image-lightbox";
import useGallery from "hooks/useGallery";
import { useParams } from "react-router";
import MainFooter from "layouts/main/MainFooter";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import "react-image-lightbox/style.css";

// import detailedView1 from "assets/images/GalleryDetailed/3.png";
// import detailedView2 from "assets/images/GalleryDetailed/4-1.png";
// import detailedView3 from "assets/images/GalleryDetailed/4.png";
// import detailedView4 from "assets/images/GalleryDetailed/6-1.png";
// import detailedView5 from "assets/images/GalleryDetailed/6.png";
// import detailedView6 from "assets/images/GalleryDetailed/7.png";
// import detailedView7 from "assets/images/GalleryDetailed/8.png";
// import detailedView8 from "assets/images/GalleryDetailed/9-1.png";
// import detailedView9 from "assets/images/GalleryDetailed/9.png";
// import detailedView10 from "assets/images/GalleryDetailed/10.png";
// import detailedView11 from "assets/images/GalleryDetailed/11.png";
// import detailedView12 from "assets/images/GalleryDetailed/12.png";
// import detailedView13 from "assets/images/GalleryDetailed/13.png";
// import detailedView14 from "assets/images/GalleryDetailed/14-1.png";
// import detailedView15 from "assets/images/GalleryDetailed/14.png";
// import detailedView16 from "assets/images/GalleryDetailed/16.png";
// import detailedView17 from "assets/images/GalleryDetailed/17.png";
// import detailedView18 from "assets/images/GalleryDetailed/18-1.png";
// import detailedView19 from "assets/images/GalleryDetailed/18.png";
// import detailedView20 from "assets/images/GalleryDetailed/19.png";
import {
	Container,
	ImageCard,
	StyledSwitch,
	ImageContainer,
	FileDownloadButton,
	// ModalBox,
} from "./styles";
import "assets/css/gallery-single.css";

const fileDownload = require("js-file-download");

// const images = [
// 	detailedView1,
// 	detailedView3,
// 	detailedView4,
// 	detailedView2,
// 	detailedView5,
// 	detailedView6,
// 	detailedView7,
// 	detailedView8,
// 	detailedView9,
// 	detailedView10,
// 	detailedView11,
// 	detailedView12,
// 	detailedView13,
// 	detailedView14,
// 	detailedView15,
// 	detailedView16,
// 	detailedView17,
// 	detailedView18,
// 	detailedView19,
// 	detailedView20,
// ];

// console.log(images);

function GallerySinglePage() {
	const [open, setOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(null);
	const [currentPic, setCurrentPic] = React.useState("");
	const [checked, setChecked] = useState(false);
	const [picName, setPicName] = React.useState("");
	const { gallery } = useGallery();
	const { id } = useParams();
	const images = gallery.filter((element) => element.id === parseInt(id, 10))[0]
		?.media;

	const handleOpen = (src, name, index) => {
		setCurrentPic(src);
		setOpen(true);
		setPicName(name);
		setPhotoIndex(index);
	};

	// const handleClose = () => setOpen(false);

	const handleNext = () => {
		setPhotoIndex((photoIndex + 1) % images.length);
		setCurrentPic(images[photoIndex]?.url);
	};

	const handlePrev = () => {
		setPhotoIndex((photoIndex + images.length - 1) % images.length);
		setCurrentPic(images[photoIndex]?.url);
	};

	const handleChange = (e) => {
		setChecked(e.target.checked);
	};

	const handleDownload = (src, name) => {
		fileDownload(`${process.env.REACT_APP_BACKEND_URL}${src}`, name);
	};

	return (
		<>
<ImageContainer>
				<Container>
					<StyledSwitch checked={checked} onChange={handleChange} />
					<ImageList
						variant="masonry"
						cols={window.innerWidth > 600 ? 7 : 3}
						gap={10}
					>
						{images?.map((image, index) => (
							<ImageListItem key={index}>
								{!checked && image.ext === ".png" && (
									<ImageCard
										onClick={() => handleOpen(image.url, image.name, index)}
									>
										<img
											src={`${process.env.REACT_APP_BACKEND_URL}${image.url}`}
											srcSet={`${process.env.REACT_APP_BACKEND_URL}${image.url}`}
											alt=""
											loading="lazy"
										/>
									</ImageCard>
								)}
								{checked && image.ext === ".jpeg" && (
									<ImageCard onClick={() => handleOpen(image.url, image.name)}>
										<img
											src={`${process.env.REACT_APP_BACKEND_URL}${image.url}`}
											srcSet={`${process.env.REACT_APP_BACKEND_URL}${image.url}`}
											alt=""
											loading="lazy"
										/>
									</ImageCard>
								)}
							</ImageListItem>
						))}
					</ImageList>
				</Container>
			</ImageContainer>
			<MainFooter />

			{open && (
				<>
					<Lightbox
						mainSrc={`${process.env.REACT_APP_BACKEND_URL}${currentPic}`}
						nextSrc={`${process.env.REACT_APP_BACKEND_URL}${
							images[(photoIndex + 1) % images.length]?.url
						}`}
						prevSrc={`${process.env.REACT_APP_BACKEND_URL}${
							images[(photoIndex + images.length - 1) % images.length]?.url
						}`}
						onCloseRequest={() => setOpen(false)}
						onMovePrevRequest={handlePrev}
						onMoveNextRequest={handleNext}
					/>
					<FileDownloadButton
						onClick={() =>
							handleDownload(
								`${process.env.REACT_APP_BACKEND_URL}${currentPic}`,
								picName
							)
						}
					>
						<FileDownloadIcon />
					</FileDownloadButton>
				</>
			)}
		</>
	);
}

export default GallerySinglePage;
