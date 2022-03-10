import { Typography, Divider } from '@mui/material';
import React from 'react';
import tag from 'assets/images/tag-icon.svg';
import clock from 'assets/images/clock-icon.svg';
import message from 'assets/images/message-icon.svg';
import user from 'assets/images/user-icon.svg';
// import edit from "assets/images/edit-icon.svg";
import right from 'assets/images/button-arrow-right.png';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from 'react-router';
import moment from 'moment';
import DeleteIcon from '@mui/icons-material/Delete';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Form, TextField } from 'components/custom';
import { useForm } from 'react-hook-form';
import useForum from 'hooks/useForum';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useStyles, Feed, FeedFooter, Comments, CommentSection, TagTime, CommentBox } from './styles';

export default function Discussion(props) {
  const classes = useStyles();
  const { forum, postComment, deleteComment } = useForum();
  const navigate = useNavigate();
  const data = forum.filter((element) => element.id === props.id);

  const formData = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: true,
    resolver: yupResolver(
      Yup.object().shape({
        comment: Yup.string(),
      })
    ),
    defaultValues: {
      comment: '',
    },
  });
  const onFormSubmit = async (data) => {
    if (data.comment !== '') postComment(data);
    formData.reset();
  };

  const handleDelete = (id, forumId) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to ddelete this comment?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteComment(id, forumId),
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  };

  return (
    <>
      <CommentBox style={{ boxShadow: 'none', padding: 0, marginTop: 0 }}>
        <div className="btn" Button onClick={() => navigate(-1)} onKeyDown={() => navigate(-1)} aria-hidden="true">
          <KeyboardArrowLeftIcon fontSize="28" style={{ height: '1.7em', width: '1.7em', color: '#fff' }} />
        </div>
      </CommentBox>

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
            <Typography style={{ color: '#3D3DD9' }} className="text1">
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
                <Typography className="commentHeading">{item?.users_permissions_user}</Typography>
                <Typography className="commentDesc">{item?.comment}</Typography>
                <Divider className="line" />
                <TagTime>
                  <div className="time">
                    <img src={clock} alt="tag" />
                    <Typography className="ago">{moment(item.updated_at).fromNow()}</Typography>
                  </div>
                  {/* <img
                    className="edit"
                    src={edit}
                    alt="edit"
                    style={{ marginLeft: "10px" }}
                  /> */}
                  <DeleteIcon
                    fontSize="28"
                    className="edit"
                    style={{
                      color: '#3D3DD9',
                      marginLeft: '10px',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleDelete(item.id, props.id)}
                  />
                </TagTime>
              </div>
            </CommentSection>

            <Divider className="commentDivider" />
          </>
        ))}
      </Comments>

      <Form onSubmit={onFormSubmit} methods={formData}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'center',
            position: 'fixed',
            bottom: 0,
            zIndex: 111,
          }}
        >
          <CommentBox>
            <TextField className={classes.input2} style={{ marginTop: '20px' }} placeholder="Say something..." name="comment" />
            <div onClick={formData.handleSubmit(onFormSubmit, (e) => console.log(e))} aria-hidden="true">
              <div className="btn" Button>
                <img src={right} alt="right" />
              </div>
            </div>
          </CommentBox>
        </div>
      </Form>
    </>
  );
}
