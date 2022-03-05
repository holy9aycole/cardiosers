import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import useForum from "hooks/useForum";
import ForumCard from "components/ForumCard";
import { useNavigate } from "react-router-dom";
import btnArrow from "assets/images/button-arrow.svg";
import moment from "moment";
import { MainContainer, CommentBox } from "./styles";

import QuestionModel from "./QuestionModel";
import SwipeableEdgeDrawer from "./SwipableModal";

// const ForumData = [
//   {
//     heading: "2021 Looking Forward - The New Normal Crafted Through Architect.",
//     description:
//       "When everybody across the world continues to make the transition back to normalcy from lock-down, we are curious about what will happen in our society.",
//     tag: "Design",
//     time: "1",
//     comments: "17",
//   },
//   {
//     heading: "2021 Looking Forward - The New Normal Crafted Through Architect.",
//     description:
//       "When everybody across the world continues to make the transition back to normalcy from lock-down, we are curious about what will happen in our society.",
//     tag: "Design",
//     time: "1",
//     comments: "17",
//   },
//   {
//     heading: "2021 Looking Forward - The New Normal Crafted Through Architect.",
//     description:
//       "When everybody across the world continues to make the transition back to normalcy from lock-down, we are curious about what will happen in our society.",
//     tag: "Design",
//     time: "1",
//     comments: "17",
//   },
//   {
//     heading: "2021 Looking Forward - The New Normal Crafted Through Architect.",
//     description:
//       "When everybody across the world continues to make the transition back to normalcy from lock-down, we are curious about what will happen in our society.",
//     tag: "Design",
//     time: "1",
//     comments: "17",
//   },
// ];

export default function Forum() {
  const { forum, getForum } = useForum();
  const navigate = useNavigate();

  useEffect(() => {
    getForum();
  }, [handleCloseModal, closeSwipable]);

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
    if (w >= 768) {
      openFromParent();
    } else {
      swipableOpen();
    }
  };

  const handleClick = (id) => {
    navigate(`/discussion/${id}`);
  };

  return (
    <MainContainer>
      {forum.map((row, index) => (
        <ForumCard
          onClick={() => handleClick(row.id)}
          key={index}
          heading={row.question}
          description={row.description}
          tag={row?.category?.name}
          time={moment(row.created_at).fromNow()}
          comments={row.comments.length}
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
        onCloseModal={handleCloseModal}
      />
      {window.innerWidth < 768 && (
        <SwipeableEdgeDrawer
          IsModalOpen={swipableModalOpen}
          forOpen={swipableOpen}
          onCloseModal={closeSwipable}
        />
      )}
    </MainContainer>
  );
}
