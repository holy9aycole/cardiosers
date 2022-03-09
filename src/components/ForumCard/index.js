import { Divider, Typography } from "@mui/material";
import React from "react";
import tag from "assets/images/tag-icon.svg";
import clock from "assets/images/clock-icon.svg";
import message from "assets/images/message-icon.svg";
import useForum from "hooks/useForum";
import DeleteIcon from "@mui/icons-material/Delete";
import { Feed, FeedFooter } from "./styles";

export default function ForumCard(props) {
  const { deleteForum } = useForum();
  return (
    <>
      <Feed>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography className="heading" onClick={props.onClick}>
            {props.heading}
          </Typography>
          <DeleteIcon
            fontSize="28"
            style={{ color: "#3D3DD9", marginTop: "3px", cursor: "pointer" }}
            onClick={() => deleteForum(props.id)}
          />
        </div>
        <Typography className="subheading" onClick={props.onClick}>
          {props.description}
        </Typography>
        <Divider className="line" />
        <FeedFooter onClick={props.onClick}>
          <div className="tag">
            <img src={tag} alt="tag" />
            <Typography className="text1">{props.tag}</Typography>
          </div>
          <div className="tag">
            <img src={clock} alt="tag" />
            <Typography className="text1">{props.time}</Typography>
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
