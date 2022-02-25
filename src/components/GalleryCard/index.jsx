import React from "react";
import { useNavigate } from "react-router-dom";
import { GalleryCard, GalleryCardText, StyledDiv } from "./styles";

function GalleryCardComp({ title, image, id }) {
  const navigate = useNavigate();

  const handleGallery = (id) => {
    navigate(`/gallery/${id}`);
  };

  return (
    <GalleryCard onClick={() => handleGallery(id)}>
      <img src={image} alt="" />
      <GalleryCardText>{title}</GalleryCardText>
      <StyledDiv />
    </GalleryCard>
  );
}

export default GalleryCardComp;
