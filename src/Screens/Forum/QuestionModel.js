import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import { Divider, MenuItem, Typography } from "@mui/material";
import { TextField, Form, Select } from "components/custom";
import { useForm } from "react-hook-form";
import useCategory from "hooks/useCategory";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import useForum from "hooks/useForum";
import { useStyles, MainContainer, Submit } from "./QuestionModalStyles";

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
  const { category } = useCategory();
  const { postForum } = useForum();

  function onModalClose() {
    props.onCloseModal();
  }
  console.log("category", category);
  const formData = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    shouldFocusError: true,
    resolver: yupResolver(
      Yup.object().shape({
        question: Yup.string().required("Question is requried"),
        description: Yup.string().required("Description is required"),
        category: Yup.string().required("Category is required"),
      })
    ),
    defaultValues: {
      question: "",
      description: "",
      category: "",
    },
  });
  const onFormSubmit = async (data) => {
    console.log("data", data);
    postForum(data);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.IsModalOpened}
        onClose={onModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.IsModalOpened}>
          <Box sx={style}>
            <Form onSubmit={onFormSubmit} methods={formData}>
              <MainContainer>
                <Typography className={classes.heading}>
                  Ask a Question
                </Typography>
                <Divider className={classes.line} />
                <div className={classes.inputContainer}>
                  <Typography className={classes.inputHeading}>
                    Tell us your question
                  </Typography>
                  <TextField className={classes.inputtext} name="question" />
                </div>
                <div className={classes.inputContainer}>
                  <Typography className={classes.inputHeading}>
                    Describe what you've tried
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    style={{ width: "100%" }}
                    multiline
                    rows={4}
                    name="description"
                  />
                </div>
                <div className={classes.inputContainer}>
                  <Typography className={classes.inputHeading}>
                    Category
                  </Typography>
                  <Select
                    // className={classes.inputtext}
                    name="category"
                    variant="outlined"
                  >
                    {category.map((item, index) => (
                      <MenuItem key={index} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                <div className={classes.inputContainer}>
                  <Submit
                    onClick={formData.handleSubmit(onFormSubmit, (e) =>
                      console.log(e)
                    )}
                  >
                    SUBMIT
                  </Submit>
                </div>
              </MainContainer>
            </Form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
