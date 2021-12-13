import React from "react";
import { Typography } from "@mui/material";

import ForumCard from "components/ForumCard";
import { useNavigate } from "react-router-dom";
import btnArrow from "assets/images/button-arrow.svg";
import { MainContainer, CommentBox } from "./styles";

import QuestionModel from "./QuestionModel";
import SwipeableEdgeDrawer from "./SwipableModal";

const ForumData = [
  {
    heading: "2021 Looking Forward - The New Normal Crafted Through Architect.",
    description:
      "When everybody across the world continues to make the transition back to normalcy from lock-down, we are curious about what will happen in our society.",
    tag: "Design",
    time: "1",
    comments: "17",
  },
  {
    heading: "2021 Looking Forward - The New Normal Crafted Through Architect.",
    description:
      "When everybody across the world continues to make the transition back to normalcy from lock-down, we are curious about what will happen in our society.",
    tag: "Design",
    time: "1",
    comments: "17",
  },
  {
    heading: "2021 Looking Forward - The New Normal Crafted Through Architect.",
    description:
      "When everybody across the world continues to make the transition back to normalcy from lock-down, we are curious about what will happen in our society.",
    tag: "Design",
    time: "1",
    comments: "17",
  },
  {
    heading: "2021 Looking Forward - The New Normal Crafted Through Architect.",
    description:
      "When everybody across the world continues to make the transition back to normalcy from lock-down, we are curious about what will happen in our society.",
    tag: "Design",
    time: "1",
    comments: "17",
  },
];

export default function Forum() {
  const navigate = useNavigate();
  // const classes = useStyles();

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [swipableModalOpen, setSwipableModalOpen] = React.useState(false);

  function swipableOpen() {
    setSwipableModalOpen(true);
  }

  function closeSwipable() {
    setSwipableModalOpen(false);
  }

  function openFromParent() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }

  const openOnClick = () => {
    const w = window.innerWidth;
    console.log(w);
    if (w >= 768) {
      openFromParent();
    } else {
      swipableOpen();
    }
  };

  // console.log(props);

  const handleClick = () => {
    navigate("../discussion");
  };

  return (
    <MainContainer>
      {ForumData.map((row, index) => (
        <ForumCard
          onClick={handleClick}
          key={index}
          heading={row.heading}
          description={row.description}
          tag={row.tag}
          time={row.time}
          comments={row.comments}
        />
      ))}
      <CommentBox>
        <div onClick={openOnClick} aria-hidden="true" className="ask">
          <Typography className="ques">ASK A QUESTION</Typography>
          <img src={btnArrow} alt="button arrow" />
        </div>
      </CommentBox>
      <QuestionModel
        IsModalOpened={modalIsOpen}
        // eslint-disable-next-line
        onCloseModal={handleCloseModal}
      />
      {window.innerWidth < 768 && (
        <SwipeableEdgeDrawer
          IsModalOpen={swipableModalOpen}
          // eslint-disable-next-line
          forOpen={swipableOpen}
          // eslint-disable-next-line
          onCloseModal={closeSwipable}
        />
      )}
    </MainContainer>
  );
}
