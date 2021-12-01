import React from "react";
import {
  Stack,
  TextField,
  Card,
  CardHeader,
  CardContent,
  FormHelperText,
  Button,
  Container,
  Box,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { useStyles, RootStyle, HeroOverlayStyle, ContentStyle } from "./styles";
import {
  varFadeIn,
  varWrapEnter,
  varFadeInRight
} from "../animate";

function LoginScreen() {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroOverlayStyle
          alt="overlay"
          src="https://static.vecteezy.com/system/resources/previews/002/203/921/non_2x/empty-square-neon-background-free-vector.jpg"
          variants={varFadeIn}
        />

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Grid container justifyContent="center">
                <img
                  alt="logo"
                  src="https://qph.fs.quoracdn.net/main-qimg-9d50a5cdb7105f795cd43497094a0cd3-lq"
                />
              </Grid>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Card className={classes.card}>
                <CardHeader />
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                      <TextField label="Enter Your Email" />
                      <Button
                        fullWidth
                        color="info"
                        size="large"
                        type="submit"
                        variant="contained"
                      >
                        Get OTP
                      </Button>
                      <FormHelperText focused className={classes.formText}>
                        Check your email inbox for OTP
                      </FormHelperText>
                    </Stack>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: "100vh" } }} />
    </>
  );
}

export default LoginScreen;
