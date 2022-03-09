import React from "react";
import GalleryCardComp from "components/GalleryCard";
import useGallery from "hooks/useGallery";
import MainFooter from "layouts/main/MainFooter";
import { GalleryCardContainer } from "./styles";

function Gallery() {
  const { gallery } = useGallery();
  console.log("item", gallery);

  return (
    <>
      <GalleryCardContainer>
        {gallery.map((item, index) => (
          <GalleryCardComp
            key={index}
            title={item.section}
            image={`${process.env.REACT_APP_BACKEND_URL}${item.bannerImage.url}`}
            id={item.id}
          />
        ))}
      </GalleryCardContainer>
      <MainFooter />
    </>
  );
}

export default Gallery;
