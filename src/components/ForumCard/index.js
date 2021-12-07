import { Divider, Typography } from "@mui/material";
import React from "react";
import tag from "assets/images/tag-icon.svg";
import clock from "assets/images/clock-icon.svg";
import message from "assets/images/message-icon.svg";
import { Feed, FeedFooter } from "./styles";

export default function ForumCard(props) {
  // const classes = useStyles();
  return (
    <>
      <Feed>
        <Typography className="heading">{props.heading}</Typography>
        <Typography className="subheading">{props.description}</Typography>
        <Divider className="line" />
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
      </Feed>
      <Feed>
        <Typography className="heading">{props.heading}</Typography>
        <Typography className="subheading">{props.description}</Typography>
        <Divider className="line" />
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
      </Feed>
    </>
  );
}
