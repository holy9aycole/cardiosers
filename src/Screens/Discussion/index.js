import React from "react";

import DiscussionCard from "components/DiscussionCard";
import { MainContainer } from "./styles";

export default function Discussion() {
  return (
    <MainContainer>
      <DiscussionCard
        heading="2021 Looking Forward - The New Normal Crafted Through Architect."
        description="When everybody across the world continues to make the transition back
          to normalcy from lock-down, we are curious about what will happen in
          our society."
        tag="Design"
        time="1"
        comments="17"
      />
    </MainContainer>
  );
}
