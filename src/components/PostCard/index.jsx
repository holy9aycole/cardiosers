import React from "react";
// material
// import { CardContent, CardMedia } from "@mui/material";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
// assests
import { ReactComponent as WebIcon } from "assets/web-icon.svg";
import { ReactComponent as ClockIcon } from "assets/clock-icon.svg";

// styles
import {
  StyledCard,
  FooterContainer,
  Footer,
  FooterDiv,
  FooterFont,
} from "./styles";

export default function PostCard({ link, time, style }) {
  return (
    <StyledCard style={style}>
      <LinkPreview url={link} />
      <FooterContainer>
        <Footer>
          <FooterDiv>
            <WebIcon width={24} height={24} />
            <FooterFont>
              <a
                href={link}
                style={{ textDecorationLine: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            </FooterFont>
          </FooterDiv>
          <FooterDiv>
            <ClockIcon />
            <FooterFont>{time}</FooterFont>
          </FooterDiv>
        </Footer>
      </FooterContainer>
    </StyledCard>
  );
}
