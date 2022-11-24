import React, { useState } from 'react';
import camera from 'assets/images/camera-icon.png';
// import Dp from "assets/images/sanya.png";
import email from 'assets/icons/email.svg';
import location from 'assets/icons/location.svg';
import phone from 'assets/icons/phone.svg';
import userIcon from 'assets/icons/user.svg';
import { Form } from 'components/custom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useProfile from 'hooks/useProfile';
import Dropzone from 'react-dropzone';
import MainFooter from 'layouts/main/MainFooter';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { ProfileBackground, SmallAvatar, DisplayPic, BadgeStyle, LogOut } from './styles';
import { Circle, Icon, Text, FormField, GridStyle, Edit, GridItem } from './styles';

function Profile() {
  const [edit, setEdit] = useState(false);
  const { updateUser } = useProfile();

  const handleEdit = () => {
    setEdit(!edit);
  };

  const {
    user: { user },
  } = useSelector((state) => state.authJwt);
  const { profile } = useSelector((state) => state.profile);
  console.log('user', user);
  const formData = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: true,
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string(),
        city: Yup.string(),
        email: Yup.string(),
        mobileNo: Yup.number(),
      })
    ),
    defaultValues: {
      name: user.name,
      city: user.city,
      email: user.email,
      mobileNo: user.mobileNo,
    },
  });
  const onFormSubmit = async (data) => {
    updateUser(data);
    setEdit(!edit);
  };
  const [name, setName] = useState('');
  console.log('name', name);
  return (
    <>
      <ProfileBackground>
        <Dropzone
          onDrop={(acceptedFiles = 'image/jpeg,image/png,image/jpg') => {
            console.log(acceptedFiles);
            setName(acceptedFiles);
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <BadgeStyle
              style={{ cursor: 'pointer' }}
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={<SmallAvatar alt="Edit" src={camera} />}
            >
              <div {...getRootProps()}>
                <DisplayPic alt="Sanya" src={`${process.env.REACT_APP_BACKEND_URL}${profile?.profile_pic?.url}`} />
                <input {...getInputProps()} />
              </div>
            </BadgeStyle>
          )}
        </Dropzone>
      </ProfileBackground>

      <Form onSubmit={onFormSubmit} methods={formData}>
        <GridStyle container spacing={2}>
          <GridItem item md={6} xs={12} style={{}}>
            <FormField>
              <Circle>
                <Icon src={userIcon} />
              </Circle>
              <Text>
                {user.firstName} {user.lastName}
              </Text>
            </FormField>
            {/* <EditMobile src={EditIcon} onClick={handleEdit} /> */}
          </GridItem>
          <GridItem item md={6} xs={12}>
            <FormField>
              <Circle>
                <Icon src={location} />
              </Circle>
              <Text>{user.hospital}</Text>
            </FormField>
            {/* <EditMobile src={EditIcon} onClick={handleEdit} /> */}
          </GridItem>
          <GridItem item md={6} xs={12}>
            <FormField>
              <Circle>
                <Icon src={email} />
              </Circle>
              <Text>{user.email}</Text>
            </FormField>
            {/* <EditMobile src={EditIcon} onClick={handleEdit} /> */}
          </GridItem>
          <GridItem item md={6} xs={12}>
            <FormField>
              <Circle>
                <Icon src={phone} />
              </Circle>
              <Text>{user.mobileNo}</Text>
            </FormField>
            {/* <EditMobile src={EditIcon} onClick={handleEdit} /> */}
          </GridItem>
        </GridStyle>
      </Form>
      <LogOut disableRipple>LOG OUT</LogOut>
      <MainFooter />
    </>
  );
}

export default Profile;
