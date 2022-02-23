import React from "react";
import GalleryCardComp from "components/GalleryCard";
import useGallery from "hooks/useGallery";
// import { useNavigate } from "react-router";
import { GalleryCardContainer } from "./styles";

function Gallery() {
  const { gallery } = useGallery();
  // const navigate = useNavigate();
  console.log("item", gallery);

  return (
    <>
      <GalleryCardContainer>
        {gallery.map((item, index) => (
          <GalleryCardComp
            key={index}
            title={item.section}
            image={`http://52.172.227.233${item.bannerImage.url}`}
            id={item.id}
          />
        ))}
      </GalleryCardContainer>
    </>
  );
}

export default Gallery;
