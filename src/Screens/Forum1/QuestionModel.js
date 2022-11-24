import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import { Divider, MenuItem, Typography } from '@mui/material';
import { TextField, Form, Select } from 'components/custom';
import { useForm } from 'react-hook-form';
import useCategory from 'hooks/useCategory';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import useForum from 'hooks/useForum';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import LoadingScreen from 'components/LoadingScreen';

import { useStyles, MainContainer, Submit } from './QuestionModalStyles';

const style = {
  position: 'absolute',
  zIndex: 1000,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 570,
  height: 'auto',
  bgcolor: 'background.paper',
  border: '0px solid #000',
  borderRadius: '5px',
  boxShadow: 24,
  p: 1,
};

const dropHead = {
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '20px',
  color: '#070C2C',
  marginTop: '45px',
  cursor: 'pointer',
  textAlign: 'center',
};

export default function QuestionModel(props) {
  const classes = useStyles();
  const { category } = useCategory();

  const formData = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: true,
    resolver: yupResolver(
      Yup.object().shape({
        patient: Yup.string().required('Patient Id is requried'),
        image: Yup.string().required('Image is required'),
      })
    ),
    defaultValues: {
      patient: '',
      image: null,
    },
  });

  const [result, setResult] = useState(null);

  function onModalClose() {
    props.onCloseModal();
    setResult(null);
  }
  const onFormSubmit = async (data) => {
    const response = await axios.post(
      'https://us-central1-aiplatform.googleapis.com/v1/projects/544341748555/locations/us-central1/endpoints/6767542447472902144:predict',
      {
        instances: [
          {
            content: data.image.replace('data:image/jpeg;base64,', ''),
          },
        ],
        parameters: {
          confidenceThreshold: 0.5,
          maxPredictions: 5,
        },
      },
      {
        headers: {
          Authorization: `Bearer ya29.a0AeTM1ifaSQVHFuxyrwwXQ99YWriJ98jOiTQnIWIfMYBZtjmDoeiWhUEgKs_LHtsvpP7lNGea-cpPFXCmH0TS8uLh_te0XlOAXl1MAIC2pYODOvkZBmIyYybh89Ikg0nykvTRMM0_0A5FdcjQthf5p6891pq5d6IZcj7EtjrbhwtN-Roa_S17wRiDqVomUkm8B3kTmSUdhvTlqo_4ho1MahUewAKkIDs7dX7-uGv3FrPmW0IQoq6jaA5p5GX61-Gfn7iN1nwaCgYKAfISARMSFQHWtWOm6FV_AKqfjcIREXQsn2AfPw0270`,
        },
      },
      (res) => {
        console.log('ITS WORK');
        console.log('res', res);
      }
    );
    setResult(response.data);
    await props.addPatient(data);
  };

  console.log('result', result);

  const dropZone = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      const reader = new FileReader();
      reader.readAsDataURL(acceptedFiles[0]);
      reader.onload = function () {
        formData.setValue('image', reader.result);
      };
    },
  });

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = dropZone;

  const dropZoneStyle = {
    border: '2px dashed gray',
    padding: '30px 100px',
    borderRadius: '5px',
    height: '200px',
  };

  return (
    <div>
      {props.isLoadingAddScan && <LoadingScreen key="loader" style={{ zIndex: 100 }} />}
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
        style={{ zIndex: 1000 }}
      >
        <Fade in={props.IsModalOpened}>
          <Box sx={style}>
            <button onClick={onModalClose}>close</button>
            {result == null ? (
              <Form onSubmit={onFormSubmit} methods={formData} style={{ height: '30rem', overflowY: 'scroll' }}>
                <MainContainer>
                  <Typography className={classes.heading}>Scan a Xray Image</Typography>
                  <Divider className={classes.line} />
                  <div className={classes.inputContainer} style={{ margin: '0' }}>
                    <Typography className={classes.inputHeading}>Patient</Typography>
                    <Select name="patient" variant="outlined">
                      {props?.patients?.map((item, index) => (
                        <MenuItem key={index.toString()} value={item?.id}>
                          {item?.id} {item?.attributes?.firstName} {item?.attributes?.lastName}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                  <Typography className={classes.inputHeading}>Image</Typography>
                  {formData.watch('image') ? (
                    <div>
                      <img src={formData.watch('image')} alt="heart xray" />
                      <button
                        onClick={() => {
                          formData.setValue('image', null);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div {...getRootProps({ className: 'dropzone' })}>
                      <div style={dropZoneStyle}>
                        <input {...getInputProps()} />
                        {isDragAccept && <Typography style={dropHead}>All files will be accepted</Typography>}
                        {isDragReject && <Typography style={dropHead}>Some files will be rejected</Typography>}
                        {!isDragActive && <Typography style={dropHead}>Drop your image here, or browse </Typography>}
                      </div>
                    </div>
                  )}
                  <div className={classes.inputContainer}>
                    <Submit onClick={formData.handleSubmit(onFormSubmit, (e) => console.log(e))}>SUBMIT</Submit>
                  </div>
                </MainContainer>
              </Form>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ padding: '.5rem' }}>
                  Result:{' '}
                  {result?.predictions?.[0]?.displayNames?.[0] === 'false' ? 'You may not have Cardiomegaly' : 'You might have Cardiomegaly, Please consult your doctor'}
                </span>
                <span style={{ padding: '.5rem' }}>confidence: {result?.predictions?.[0]?.confidences?.[0]}</span>

                <figure style={{ display: 'flex', width: '7rem', height: '7rem', border: '1px solid #ccc', margin: '1rem 0' }}>
                  <img src={formData.watch('image')} alt="" />
                </figure>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
