import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import { Divider, MenuItem } from "@mui/material";
import { TextField, Form, Select } from "components/custom";
import { useForm } from "react-hook-form";
import useCategory from "hooks/useCategory";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import useForum from "hooks/useForum";
import Box from "@mui/material/Box";
// import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import { useStyles, MainContainer, Submit } from "./swipableStyles";

const drawerBleeding = 30;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

function SwipeableEdgeDrawer(props) {
  const { window } = props;

  const classes = useStyles();
  const { category } = useCategory();
  const { postForum } = useForum();

  const toggleDrawer = () => {
    props.onCloseModal();
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
    toggleDrawer();
  };

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(87% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />

      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={props.IsModalOpen}
        onClose={toggleDrawer}
        onOpen={() => props.forOpen()}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Form onSubmit={onFormSubmit} methods={formData}>
            <Typography className={classes.heading} sx={{ p: 3, pt: 4 }}>
              Ask a Question
            </Typography>
            <Divider />
            <MainContainer>
              <div className={classes.container}>
                <Typography className={classes.inputheading}>
                  Tell us your question
                </Typography>
                <TextField className={classes.inputtext} name="question" />

                <Typography className={classes.inputheading}>
                  Describe what you've tried
                </Typography>
                <TextField
                  id="outlined-multiline-static"
                  style={{ width: "100%" }}
                  multiline
                  rows={4}
                  name="description"
                />
                <Typography className={classes.inputheading}>
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
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
