import MainFooter from "layouts/main/MainFooter";
import React from "react";
import { Link } from "react-router-dom";
import indiaMap from "../../assets/images/india-map.svg";
import { IndiaMap, MainContainer, Text1 } from "./styles";

function Index() {
  return (
    <>
      <MainContainer>
        <Text1>
          We are the
          <br /> Future of Space
        </Text1>
        <Link to="/property-city">
          <IndiaMap src={indiaMap} alt="" />
        </Link>
      </MainContainer>
      <MainFooter />
    </>
  );
}

export default Index;
