import React from "react";
import { Typography } from "@mui/material";
import useForum from "hooks/useForum";
import ForumCard from "components/ForumCard";
import { useNavigate } from "react-router-dom";
import btnArrow from "assets/images/button-arrow.svg";
import moment from "moment";
import MainFooter from "layouts/main/MainFooter";
import { MainContainer, CommentBox } from "./styles";

import QuestionModel from "./QuestionModel";
import SwipeableEdgeDrawer from "./SwipableModal";

export default function Forum() {
  const { forum } = useForum();
  const navigate = useNavigate();

  // useEffect(() => {
  //   getForum();
  // }, [handleCloseModal, closeSwipable]);

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
    <>
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
            id={row?.id}
          />
        ))}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "center",
            position: "fixed",
            bottom: 10,
            zIndex: 111,
          }}
        >
          <CommentBox>
            <div onClick={openOnClick} aria-hidden="true" className="ask">
              <Typography className="ques">ASK A QUESTION</Typography>
              <img src={btnArrow} alt="button arrow" />
            </div>
          </CommentBox>
        </div>

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
        <MainFooter />
      </MainContainer>
    </>
  );
}
