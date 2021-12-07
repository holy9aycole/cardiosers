import { Typography, Divider, TextareaAutosize } from "@mui/material";
import React from "react";
import tag from "assets/images/tag-icon.svg";
import clock from "assets/images/clock-icon.svg";
import message from "assets/images/message-icon.svg";
import user from "assets/images/user-icon.svg";
import edit from "assets/images/edit-icon.svg";
import right from "assets/images/button-arrow-right.png";
import {
  useStyles,
  Feed,
  FeedFooter,
  Comments,
  CommentSection,
  TagTime,
  CommentBox,
} from "./styles";

export default function Discussion(props) {
  const classes = useStyles();
  return (
    <>
      <Feed>
        <Typography className="heading">{props.heading}</Typography>
        <FeedFooter>
          <div className="tag">
            <img src={tag} alt="tag" />
            <Typography className="text1">{props.tag}</Typography>
          </div>
          <div className="tag">
            <img src={clock} alt="tag" />
            <Typography className="text1">{props.time}h ago</Typography>
          </div>
          <div className="tag">
            <img src={message} alt="tag" />
            <Typography style={{ color: "#3D3DD9" }} className="text1">
              {props.comments} Comments
            </Typography>
          </div>
        </FeedFooter>
        <Typography className="subheading">{props.description}</Typography>
      </Feed>
      <Comments>
        <Typography className="text3">Comments</Typography>

        <Divider className="line" />
        <CommentSection>
          <div className="userContainer">
            <div className="user">
              <img src={user} alt="user" />
            </div>
          </div>

          <div className="comment">
            <Typography className="commentHeading">Sanya Arora</Typography>
            <Typography className="commentDesc">
              When everybody across the world continues to make the transition
              back to normalcy from lock-down, we are curious about what will
              happen in our society.
            </Typography>
            <Divider className="line" />
            <TagTime>
              <div className="time">
                <img src={clock} alt="tag" />
                <Typography className="ago">1h ago</Typography>
              </div>
              <img className="edit" src={edit} alt="edit" />
            </TagTime>
          </div>
        </CommentSection>
        <Divider className="commentDivider" />
        <CommentSection>
          <div className="userContainer">
            <div className="user">
              <img src={user} alt="user" />
            </div>
          </div>

          <div className="comment">
            <Typography className="commentHeading">Sanya Arora</Typography>
            <Typography className="commentDesc">
              When everybody across the world continues to make the transition
              back to normalcy from lock-down, we are curious about what will
              happen in our society.
            </Typography>
            <Divider className="line" />
            <TagTime>
              <div className="time">
                <img src={clock} alt="tag" />
                <Typography className="ago">1h ago</Typography>
              </div>
              <img className="edit" src={edit} alt="edit" />
            </TagTime>
          </div>
        </CommentSection>
      </Comments>
      <CommentBox>
        <TextareaAutosize
          minRows={5}
          maxRows={5}
          aria-label="maximum height"
          placeholder="Maximum 4 rows"
          defaultValue="Say something..."
          className={classes.input}
        />
        <div className="btn" Button>
          <img src={right} alt="right" />
        </div>
      </CommentBox>
    </>
  );
}
