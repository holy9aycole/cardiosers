import { Typography, Divider } from "@mui/material";
import React from "react";
import tag from "assets/images/tag-icon.svg";
import clock from "assets/images/clock-icon.svg";
import message from "assets/images/message-icon.svg";
import user from "assets/images/user-icon.svg";
import edit from "assets/images/edit-icon.svg";
import right from "assets/images/button-arrow-right.png";
import moment from "moment";
import useForum from "hooks/useForum";
import { Form, TextField } from "components/custom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
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
  const { forum, postComment } = useForum();

  const data = forum.filter((element) => element.id === props.id);

  const formData = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    shouldFocusError: true,
    resolver: yupResolver(
      Yup.object().shape({
        comment: Yup.string(),
      })
    ),
    defaultValues: {
      comment: "",
    },
  });
  const onFormSubmit = async (data) => {
    console.log("data", data);
    if (data.comment !== "") postComment(data);
  };

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
            <Typography className="text1">{props.time}</Typography>
          </div>
          <div className="tag">
            <img src={message} alt="tag" />
            <Typography style={{ color: "#3D3DD9" }} className="text1">
              {props.comments.length} Comments
            </Typography>
          </div>
        </FeedFooter>
        <Typography className="subheading">{props.description}</Typography>
      </Feed>

      <Comments>
        <Typography className="text3">Comments</Typography>
        <Divider className="line" />
        {data[0]?.comments.map((item, index) => (
          <>
            <CommentSection key={index}>
              <div className="userContainer">
                <div className="user">
                  <img src={user} alt="user" />
                </div>
              </div>

              <div className="comment">
                <Typography className="commentHeading">
                  {item?.users_permissions_user}
                </Typography>
                <Typography className="commentDesc">{item?.comment}</Typography>
                <Divider className="line" />
                <TagTime>
                  <div className="time">
                    <img src={clock} alt="tag" />
                    <Typography className="ago">
                      {moment(item.updated_at).fromNow()}
                    </Typography>
                  </div>
                  <img
                    className="edit"
                    src={edit}
                    alt="edit"
                    style={{ marginLeft: "10px" }}
                  />
                </TagTime>
              </div>
            </CommentSection>

            <Divider className="commentDivider" />
          </>
        ))}
      </Comments>

      <Form onSubmit={onFormSubmit} methods={formData}>
        <CommentBox>
          <TextField
            className={classes.input2}
            style={{ marginTop: "20px" }}
            placeholder="Say something..."
            name="comment"
          />
          <div
            onClick={formData.handleSubmit(onFormSubmit, (e) => console.log(e))}
            aria-hidden="true"
          >
            <div className="btn" Button>
              <img src={right} alt="right" />
            </div>
          </div>
        </CommentBox>
      </Form>
    </>
  );
}
