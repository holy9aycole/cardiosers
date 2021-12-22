import React from "react";
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
        <IndiaMap src={indiaMap} alt="" />
      </MainContainer>
    </>
  );
}

export default Index;
