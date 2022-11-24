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

export default function QuestionModel(props) {
  const classes = useStyles();

  function onModalClose() {
    props.onCloseModal();
  }
  const formData = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: true,
    resolver: yupResolver(
      Yup.object().shape({
        firstName: Yup.string().required('Question is requried'),
        lastName: Yup.string().nullable(),
        email: Yup.string().required('Category is required'),
        mobileNo: Yup.number().required('mobile no is required'),
        dateOfBirth: Yup.string().required('date is required'),
        gender: Yup.string().required('gender is required'),
      })
    ),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobileNo: '',
      dateOfBirth: '',
      gender: 'Male',
    },
  });
  const onFormSubmit = async (data) => {
    console.log('data', data);
    await props.addPatient(data);
    onModalClose();
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
        style={{ zIndex: 1000 }}
      >
        <Fade in={props.IsModalOpened}>
          <Box sx={style}>
            <Form onSubmit={onFormSubmit} methods={formData} style={{ height: '30rem', overflowY: 'scroll' }}>
              <MainContainer>
                <Typography className={classes.heading}>Add Patient</Typography>
                <Divider className={classes.line} />
                <div className={classes.inputContainer} style={{ margin: '0' }}>
                  <Typography className={classes.inputHeading}>First Name</Typography>
                  <TextField className={classes.inputtext} name="firstName" />
                </div>
                <div className={classes.inputContainer}>
                  <Typography className={classes.inputHeading}>Last Name</Typography>
                  <TextField className={classes.inputtext} name="lastName" />
                </div>
                <div className={classes.inputContainer}>
                  <Typography className={classes.inputHeading}>Email</Typography>
                  <TextField className={classes.inputtext} name="email" />
                </div>
                <div className={classes.inputContainer}>
                  <Typography className={classes.inputHeading}>Mobile No</Typography>
                  <TextField className={classes.inputtext} name="mobileNo" />
                </div>
                <div className={classes.inputContainer}>
                  <Typography className={classes.inputHeading}>DOB</Typography>
                  <TextField className={classes.inputtext} placeholder="YYYY-MM-DD" name="dateOfBirth" />
                </div>
                <div className={classes.inputContainer}>
                  <Typography className={classes.inputHeading}>Gender</Typography>
                  <Select name="gender" variant="outlined">
                    <MenuItem key="1" value="Male">
                      Male
                    </MenuItem>
                    <MenuItem key="2" value="Female">
                      Female
                    </MenuItem>
                    <MenuItem key="3" value="Others">
                      Others
                    </MenuItem>
                  </Select>
                </div>
                <div className={classes.inputContainer}>
                  <Submit onClick={formData.handleSubmit(onFormSubmit, (e) => console.log(e))}>SUBMIT</Submit>
                </div>
              </MainContainer>
            </Form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
