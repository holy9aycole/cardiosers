import React from "react";
// material
import { MenuItem, Typography, CardMedia } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// Youtube Vid
import YouTube from "react-youtube";
// Slider
import Slider from "react-slick";
// Assets
import Mask2 from "assets/images/PropertyCity/Mask Group 21.svg";
import banner1 from "assets/images/brand_sust.png";
import banner2 from "assets/images/PropertyCity/g-3.png";
import useProperties from "hooks/useProperties";
import pdf from "assets/icons/pdf.png";
import {
  BannerContainer,
  BannerImage,
  Overlay,
  PropertyPage,
  StyledSelect,
  StyledSelectIcon,
  AccordionContainer,
  StyledAccordion,
  StyledAccordionSummary,
  AccordionTypography,
  StyledCard,
  StyledCardContent,
  StyledMask,
  NextButton,
  NextArrowDiv,
  PrevArrowDiv,
  StyledAccordionDetails,
  StyledAccordionDetails2,
  FloorPlans,
  TextBox,
  Text1,
  Text2,
  PDFDownload,
  ModelImage,
  ImageContainer,
} from "./styles";
// import { Player } from "video-react";

function PropertyCity({ assetavID }) {
  const { properties } = useProperties();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  const opts = {
    height: window.innerWidth > 600 ? "600" : "300",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const NextArrow = ({ onClick }) => (
    <NextArrowDiv onClick={onClick}>
      <ArrowForwardIosIcon />
    </NextArrowDiv>
  );

  const PrevArrow = ({ onClick }) => (
    <PrevArrowDiv onClick={onClick}>
      <ArrowBackIosIcon />
    </PrevArrowDiv>
  );

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const ReadMoreMobile = ({ children }) => {
    const text = children;
    if (window.innerWidth < 600 && text.length > 50) {
      return <Typography variant="body2">{text.slice(0, 50)}...</Typography>;
    }
    return <Typography variant="body2">{text}</Typography>;
  };

  const [selectvalue, setSelectValue] = React.useState(null);
  const handleOnChange = (e) => setSelectValue(e.target.value);

  function filterArrayElementById(array) {
    return array.filter((element) => element.id === selectvalue);
  }

  const accordionArray = filterArrayElementById(properties);

  return (
    <PropertyPage>
      <BannerContainer>
        <BannerImage src={banner1} alt="" />
        <Overlay />
        <StyledSelect
          IconComponent={StyledSelectIcon}
          onChange={handleOnChange}
          value={selectvalue}
        >
          {properties.map((item, index) => (
            <MenuItem
              key={index}
              value={item.id}
              divider={index !== properties.length - 1}
            >
              {item.PropertyName}
            </MenuItem>
          ))}
        </StyledSelect>
      </BannerContainer>
      {accordionArray.map((item, index) => (
        <AccordionContainer key={index}>
          <StyledAccordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <AccordionTypography>About Property</AccordionTypography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <StyledCard>
                <CardMedia
                  component="img"
                  alt="banner1"
                  height={window.innerWidth > 600 ? "400" : "200"}
                  image={`http://52.172.227.233${item.About.image.url}`}
                />
                <StyledCardContent>
                  <Typography component="div">{item.PropertyName}</Typography>
                  <ReadMoreMobile>{item.About.description}</ReadMoreMobile>
                  <StyledMask src={Mask2} />
                  <NextButton>
                    <ArrowForwardIosIcon />
                  </NextButton>
                </StyledCardContent>
              </StyledCard>
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <AccordionTypography>Micromarket Video</AccordionTypography>
            </StyledAccordionSummary>
            <StyledAccordionDetails2>
              {/* <video width="350" height="300" controls>
                <source src={} type="video/mp4" />
              </video> */}
              {/* <Player
                playsInline
                poster="/assets/poster.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              /> */}
              <Slider {...settings}>
                <YouTube videoId={assetavID} opts={opts} onReady={onReady} />
              </Slider>
            </StyledAccordionDetails2>
          </StyledAccordion>
          <StyledAccordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <AccordionTypography>3D View</AccordionTypography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <ImageContainer>
                {item.Models3d.map((item, index) => (
                  <ModelImage
                    src={`http://52.172.227.233${item.poster.url}`}
                    alt=""
                    loading="lazy"
                    key={index}
                  />
                ))}
              </ImageContainer>
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <AccordionTypography>Assest AV</AccordionTypography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <Slider {...settings}>
                <YouTube videoId={assetavID} opts={opts} onReady={onReady} />
              </Slider>
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <AccordionTypography>Progress Video</AccordionTypography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <Slider {...settings}>
                <YouTube videoId={assetavID} opts={opts} onReady={onReady} />
              </Slider>
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <AccordionTypography>Gallery</AccordionTypography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <ImageContainer>
                {item.Gallery.map((item, index) => (
                  <ModelImage
                    src={`http://52.172.227.233${item.url}`}
                    alt=""
                    loading="lazy"
                    key={index}
                  />
                ))}
              </ImageContainer>
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <AccordionTypography>Floor Plans</AccordionTypography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <StyledCard>
                <CardMedia
                  component="img"
                  alt="banner2"
                  height={window.innerWidth > 600 ? "400" : "200"}
                  image={banner2}
                />
                <FloorPlans>
                  <TextBox>
                    <Text1>{item.PropertyName}</Text1>
                    <Text2>Download the floor Plans</Text2>
                  </TextBox>
                  <PDFDownload src={pdf} />
                </FloorPlans>
              </StyledCard>
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <AccordionTypography>Asset Brochure</AccordionTypography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <StyledCard>
                <CardMedia
                  component="img"
                  alt="banner2"
                  height={window.innerWidth > 600 ? "400" : "200"}
                  image={banner2}
                />
                <FloorPlans>
                  <TextBox>
                    <Text1>RMZ Ecoworld</Text1>
                    <Text2>Download the Asset Brochure</Text2>
                  </TextBox>
                  <PDFDownload src={pdf} />
                </FloorPlans>
              </StyledCard>
            </StyledAccordionDetails>
          </StyledAccordion>
        </AccordionContainer>
      ))}
    </PropertyPage>
  );
}

export default PropertyCity;
