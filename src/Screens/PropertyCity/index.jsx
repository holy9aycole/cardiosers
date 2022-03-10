import React from 'react';
// material
import { MenuItem, Typography, CardMedia } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
// Assets
import Mask2 from 'assets/images/PropertyCity/Mask Group 21.svg';
import banner1 from 'assets/images/brand_sust.png';
import banner2 from 'assets/images/PropertyCity/g-3.png';
import useProperties from 'hooks/useProperties';

import Modal from '@mui/material/Modal';
import pdf from 'assets/icons/pdf.png';
import '../../../node_modules/video-react/dist/video-react.css';
import MainFooter from 'layouts/main/MainFooter';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
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
  StyledCard2,
  StyledCardContent,
  StyledMask,
  NextButton,
  StyledAccordionDetails,
  StyledAccordionDetails2,
  FloorPlans,
  TextBox,
  Text1,
  Text2,
  PDFDownload,
  ModelImage,
  ImageContainer,
  FileDownloadButton,
  ModalBox,
} from './styles';
import 'assets/css/video.css';

const fileDownload = require('js-file-download');

function PropertyCity() {
  const [expanded, setExpanded] = React.useState(false);
  const [currentPic, setCurrentPic] = React.useState('');
  const [picName, setPicName] = React.useState('');
  const { properties } = useProperties();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = (src, name) => {
    setCurrentPic(src);
    setPicName(name);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const ReadMoreMobile = ({ children }) => {
    const text = children;
    if (window.innerWidth < 600 && text.length > 50) {
      return <Typography variant="body2">{text.slice(0, 50)}...</Typography>;
    }
    return <Typography variant="body2">{text}</Typography>;
  };

  function filterArrayElementById(array) {
    return array.filter((element) => element.id === selectvalue);
  }

  const { location } = useSelector((state) => state.location);

  const selectedProperties = properties.filter((item) => item.City === location);

  const [selectvalue, setSelectValue] = React.useState('');
  const handleOnChange = (e) => setSelectValue(e.target.value);

  const accordionArray = filterArrayElementById(properties);

  const handleDownload = (src, name) => {
    fileDownload(`${process.env.REACT_APP_BACKEND_URL}${src}`, name);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <>
          <ModalBox>
            <img src={`${process.env.REACT_APP_BACKEND_URL}${currentPic}`} alt="" style={{ width: '100%' }} />
          </ModalBox>
          <FileDownloadButton onClick={() => handleDownload(`${process.env.REACT_APP_BACKEND_URL}${currentPic}`, picName)}>
            <FileDownloadIcon />
          </FileDownloadButton>
        </>
      </Modal>
      <PropertyPage>
        <BannerContainer>
          <BannerImage src={banner1} alt="" />
          <Overlay />
          <StyledSelect IconComponent={StyledSelectIcon} onChange={handleOnChange} value={selectvalue}>
            {location === undefined || location === 'all'
              ? properties.map((item, index) => (
                  <MenuItem key={index} value={item?.id} divider={index !== properties.length - 1}>
                    {item?.PropertyName}
                  </MenuItem>
                ))
              : selectedProperties.map((item, index) => (
                  <MenuItem key={index} value={item?.id} divider={index !== properties.length - 1}>
                    {item?.PropertyName}
                  </MenuItem>
                ))}
          </StyledSelect>
        </BannerContainer>
        {accordionArray.map((item, index) => (
          <AccordionContainer key={index}>
            <StyledAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionTypography>About Property</AccordionTypography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <StyledCard2>
                  <CardMedia component="img" alt="banner1" height={200} image={`${process.env.REACT_APP_BACKEND_URL}${item?.About?.image?.url}`} />
                  <StyledCardContent>
                    <Typography component="div">{item?.PropertyName}</Typography>
                    <ReadMoreMobile>{item?.About?.description}</ReadMoreMobile>
                    <StyledMask src={Mask2} />
                    <NextButton>
                      <ArrowForwardIosIcon />
                    </NextButton>
                  </StyledCardContent>
                </StyledCard2>
              </StyledAccordionDetails>
            </StyledAccordion>
            <StyledAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionTypography>Micromarket Video</AccordionTypography>
              </StyledAccordionSummary>
              <StyledAccordionDetails2>
                {[...Array(5)].map((e) => (
                  <div key={e} style={{ marginLeft: '15px', marginBottom: '10px' }}>
                    <ReactPlayer
                      url="http://www.w3schools.com/html/mov_bbb.mp4"
                      download
                      controls
                      className="react-video"
                      width={310}
                      height={170}
                      style={{ borderRadius: '10px' }}
                    />
                  </div>
                ))}
              </StyledAccordionDetails2>
            </StyledAccordion>
            <StyledAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionTypography>3D View</AccordionTypography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <ImageContainer>
                  {item?.Models3d.map((item, index) => (
                    <ModelImage
                      src={`${process.env.REACT_APP_BACKEND_URL}${item?.poster?.url}`}
                      alt=""
                      loading="lazy"
                      key={index}
                      onClick={() => handleDownload(item?.file3d?.url, item?.file3d?.name)}
                    />
                  ))}
                </ImageContainer>
              </StyledAccordionDetails>
            </StyledAccordion>
            <StyledAccordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionTypography>Asset AV</AccordionTypography>
              </StyledAccordionSummary>
              <StyledAccordionDetails2>
                <div style={{ marginLeft: '15px', marginBottom: '10px' }}>
                  <ReactPlayer
                    url="http://www.w3schools.com/html/mov_bbb.mp4"
                    download
                    controls
                    className="react-video"
                    width={310}
                    height={170}
                    style={{ borderRadius: '10px' }}
                  />
                </div>
                {item?.Models3d.map((item, index) => (
                  <ModelImage
                    src={`${process.env.REACT_APP_BACKEND_URL}${item?.poster?.url}`}
                    alt=""
                    loading="lazy"
                    key={index}
                    style={{ height: 170, width: 170 }}
                    onClick={() => handleOpen(item?.poster?.url)}
                  />
                ))}
                <div style={{ marginLeft: '15px', marginBottom: '10px' }}>
                  <ReactPlayer
                    url="http://www.w3schools.com/html/mov_bbb.mp4"
                    download
                    controls
                    className="react-video"
                    width={310}
                    height={170}
                    style={{ borderRadius: '10px' }}
                  />
                </div>
              </StyledAccordionDetails2>
            </StyledAccordion>
            <StyledAccordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
              <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionTypography>Progress Video</AccordionTypography>
              </StyledAccordionSummary>
              <StyledAccordionDetails2>
                {[...Array(5)].map((e) => (
                  <div key={e} style={{ marginLeft: '15px', marginBottom: '10px' }}>
                    <ReactPlayer
                      url="http://www.w3schools.com/html/mov_bbb.mp4"
                      download
                      controls
                      className="react-video"
                      width={310}
                      height={170}
                      style={{ borderRadius: '10px' }}
                    />
                  </div>
                ))}
              </StyledAccordionDetails2>
            </StyledAccordion>
            <StyledAccordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
              <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionTypography>Gallery</AccordionTypography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <ImageContainer>
                  {item?.Gallery.map((item, index) => (
                    <>
                      <ModelImage
                        src={`${process.env.REACT_APP_BACKEND_URL}${item?.url}`}
                        alt=""
                        loading="lazy"
                        key={index}
                        onClick={() => handleOpen(item?.url, item?.name)}
                      />
                    </>
                  ))}
                </ImageContainer>
              </StyledAccordionDetails>
            </StyledAccordion>
            <StyledAccordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
              <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionTypography>Floor Plans</AccordionTypography>
              </StyledAccordionSummary>
              <StyledAccordionDetails2>
                {item?.FloorPlan.map((list) => (
                  <StyledCard key={list} onClick={() => handleDownload(list?.url, list?.name)}>
                    <CardMedia component="img" alt="banner2" height={200} image={banner2} />
                    <FloorPlans>
                      <TextBox>
                        <Text1>{item?.PropertyName}</Text1>
                        <Text2>Download the floor Plans</Text2>
                      </TextBox>
                      <PDFDownload src={pdf} />
                    </FloorPlans>
                  </StyledCard>
                ))}
              </StyledAccordionDetails2>
            </StyledAccordion>
            <StyledAccordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
              <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <AccordionTypography>Asset Brochure</AccordionTypography>
              </StyledAccordionSummary>
              <StyledAccordionDetails2>
                {item?.AssetBrochure.map((list) => (
                  <StyledCard key={list} onClick={() => handleDownload(list?.url, list?.name)}>
                    <CardMedia component="img" alt="banner2" height={200} image={banner2} />
                    <FloorPlans>
                      <TextBox>
                        <Text1>RMZ Ecoworld</Text1>
                        <Text2>Download the Asset Brochure</Text2>
                      </TextBox>
                      <PDFDownload src={pdf} />
                    </FloorPlans>
                  </StyledCard>
                ))}
              </StyledAccordionDetails2>
            </StyledAccordion>
          </AccordionContainer>
        ))}
        <MainFooter />
      </PropertyPage>
    </>
  );
}

export default PropertyCity;
