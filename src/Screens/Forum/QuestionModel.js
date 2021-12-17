import React from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import {
  Divider,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useStyles, MainContainer } from "./QuestionModalStyles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 570,
  height: "auto",
  bgcolor: "background.paper",
  border: "0px solid #000",
  borderRadius: "5px",
  boxShadow: 24,
  p: 1,
};

export default function QuestionModel(props) {
  const classes = useStyles();

  function onModalClose() {
    // eslint-disable-next-line react/prop-types
    props.onCloseModal();
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        // eslint-disable-next-line react/prop-types
        open={props.IsModalOpened}
        // eslint-disable-next-line
        onClose={onModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.IsModalOpened}>
          <Box sx={style}>
            <MainContainer>
              <Typography className={classes.heading}>
                Ask a Question
              </Typography>
              <Divider className={classes.line} />
              <div className={classes.inputContainer}>
                <Typography className={classes.inputHeading}>
                  Tell us your question
                </Typography>
                <TextField className={classes.inputtext} />
              </div>
              <div className={classes.inputContainer}>
                <Typography className={classes.inputHeading}>
                  Describe what you've tried
                </Typography>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={5}
                  className={classes.inputtext}
                />
              </div>
              <div className={classes.inputContainer}>
                <Typography className={classes.inputHeading}>
                  Category
                </Typography>
                <TextField className={classes.inputtext} />
              </div>
            </MainContainer>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
