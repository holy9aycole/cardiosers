import React, { useState } from "react";
import camera from "assets/images/camera-icon.png";
import { Grid } from "@mui/material";
import Dp from "assets/images/sanya.png";
import email from "assets/icons/email.svg";
import location from "assets/icons/location.svg";
import password from "assets/icons/password.svg";
import phone from "assets/icons/phone.svg";
import user from "assets/icons/user.svg";
import EditIcon from "assets/icons/edit.svg";
import SaveIcon from "assets/icons/save.png";
import { TextField, Form } from "components/custom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useProfile from "hooks/useProfile";

import * as Yup from "yup";
// import { useSelector } from "react-redux";
import {
  ProfileBackground,
  SmallAvatar,
  DisplayPic,
  BadgeStyle,
  LogOut,
} from "./styles";
import {
  Circle,
  Icon,
  Text,
  FormField,
  GridStyle,
  Edit,
  GridItem,
} from "./styles";

function Profile() {
  const [edit, setEdit] = useState(false);
  const { updateUser, profile, getUser } = useProfile();

  const handleEdit = () => {
    setEdit(!edit);
  };

  //   const { profile } = useSelector((state) => state.profile);

  const formData = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    shouldFocusError: true,
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string(),
        city: Yup.string(),
        email: Yup.string(),
        mobileNo: Yup.number(),
        password: Yup.string(),
      })
    ),
    defaultValues: {
      name: profile.name,
      city: profile.city,
      email: profile.email,
      mobileNo: profile.emailNo,
      password: "*********",
    },
  });
  const onFormSubmit = async (data) => {
    updateUser(data);
    setEdit(!edit);
    getUser();
  };

  return (
    <>
      <ProfileBackground>
        <BadgeStyle
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={<SmallAvatar alt="Edit" src={camera} />}
        >
          <DisplayPic alt="Sanya" src={Dp} />
        </BadgeStyle>
      </ProfileBackground>
      <Form onSubmit={onFormSubmit} methods={formData}>
        <GridStyle container spacing={2}>
          <Grid item md={12} xs={12}>
            <Edit src={EditIcon} onClick={handleEdit} />
            {edit && (
              <Edit
                src={SaveIcon}
                onClick={formData.handleSubmit(onFormSubmit, (err) =>
                  console.log(err)
                )}
              />
            )}
          </Grid>
          <GridItem item md={6} xs={12} style={{}}>
            <FormField>
              <Circle>
                <Icon src={email} />
              </Circle>
              {edit ? (
                <TextField
                  name="name"
                  variant="outlined"
                  style={{ marginLeft: "20px", marginTop: "-10px" }}
                />
              ) : (
                <Text>{profile.name}</Text>
              )}
            </FormField>
            {/* <EditMobile src={EditIcon} onClick={handleEdit} /> */}
          </GridItem>
          <GridItem item md={6} xs={12}>
            <FormField>
              <Circle>
                <Icon src={location} />
              </Circle>
              {edit ? (
                <TextField
                  name="city"
                  variant="outlined"
                  style={{ marginLeft: "20px", marginTop: "-10px" }}
                />
              ) : (
                <Text>{profile.city}</Text>
              )}
            </FormField>
            {/* <EditMobile src={EditIcon} onClick={handleEdit} /> */}
          </GridItem>
          <GridItem item md={6} xs={12}>
            <FormField>
              <Circle>
                <Icon src={password} />
              </Circle>
              {edit ? (
                <TextField
                  name="email"
                  variant="outlined"
                  style={{ marginLeft: "20px", marginTop: "-10px" }}
                />
              ) : (
                <Text>{profile.email}</Text>
              )}
            </FormField>
            {/* <EditMobile src={EditIcon} onClick={handleEdit} /> */}
          </GridItem>
          <GridItem item md={6} xs={12}>
            <FormField>
              <Circle>
                <Icon src={phone} />
              </Circle>
              {edit ? (
                <TextField
                  name="mobileNo"
                  variant="outlined"
                  style={{ marginLeft: "20px", marginTop: "-10px" }}
                />
              ) : (
                <Text>{profile.mobileNo}</Text>
              )}
            </FormField>
            {/* <EditMobile src={EditIcon} onClick={handleEdit} /> */}
          </GridItem>
          <GridItem item md={6} xs={12}>
            <FormField>
              <Circle>
                <Icon src={user} />
              </Circle>
              {edit ? (
                <TextField
                  name="password"
                  variant="outlined"
                  style={{ marginLeft: "20px", marginTop: "-10px" }}
                />
              ) : (
                <Text>*********</Text>
              )}
            </FormField>
            {/* <EditMobile src={EditIcon} onClick={handleEdit} /> */}
          </GridItem>
        </GridStyle>
      </Form>
      <LogOut disableRipple>LOG OUT</LogOut>
    </>
  );
}

export default Profile;
