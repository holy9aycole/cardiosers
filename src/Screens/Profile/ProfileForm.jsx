import { Grid } from "@mui/material";
import React, { useState } from "react";
import email from "assets/icons/email.svg";
import location from "assets/icons/location.svg";
import password from "assets/icons/password.svg";
import phone from "assets/icons/phone.svg";
import user from "assets/icons/user.svg";
import EditIcon from "assets/icons/edit.svg";
import { TextField, Form } from "components/custom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  Circle,
  Icon,
  Text,
  FormField,
  GridStyle,
  Edit,
  // EditMobile,
  GridItem,
} from "./styles";

function ProfileForm() {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const formData = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    shouldFocusError: true,
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required("Name is requried"),
        location: Yup.string().required("Location is required"),
        email: Yup.string().email().required("Email is required"),
        mobile: Yup.number().required("Mobile is required"),
        password: Yup.string().required("Password is required"),
      })
    ),
    defaultValues: {
      name: "Sanya Arora",
      location: "Bengaluru, IN",
      email: "sanya@morph.com",
      mobile: "+91 12345 67890",
      password: "*********",
    },
  });
  const onFormSubmit = async (data) => {
    console.log("data", data);
  };

  return (
    <Form onSubmit={onFormSubmit} methods={formData}>
      <GridStyle container spacing={2}>
        <Grid item md={12} xs={12}>
          <Edit src={EditIcon} onClick={handleEdit} />
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
              <Text>Sanya Arora</Text>
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
                name="location"
                variant="outlined"
                style={{ marginLeft: "20px", marginTop: "-10px" }}
              />
            ) : (
              <Text>Bengaluru, IN</Text>
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
              <Text>sanya@morph.com</Text>
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
                name="mobile"
                variant="outlined"
                style={{ marginLeft: "20px", marginTop: "-10px" }}
              />
            ) : (
              <Text>+91 12345 67890</Text>
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
  );
}

export default ProfileForm;
