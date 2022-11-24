import React from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import btnArrow from 'assets/images/button-arrow.svg';
import MainFooter from 'layouts/main/MainFooter';
import { usePatients, useAddPatient } from 'hooks/useDoctor';
import LoadingScreen from 'components/LoadingScreen';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import moment from 'moment';
import { MainContainer, CommentBox } from './styles';

import QuestionModel from './QuestionModel';
import SwipeableEdgeDrawer from './SwipableModal';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    sortable: true,
    width: 160,
    valueGetter: (params) => `${params.row.attributes.firstName || ''} ${params.row.attributes.lastName || ''}`,
  },
  {
    field: 'email',
    headerName: 'Email',
    sortable: true,
    width: 160,
    valueGetter: (params) => params.row.attributes.email || '',
  },
  {
    field: 'mobileNo',
    headerName: 'Mobile No',
    sortable: true,
    width: 160,
    valueGetter: (params) => params.row.attributes.mobileNo || '',
  },
  {
    field: 'gender',
    headerName: 'Gender',
    sortable: true,
    width: 160,
    valueGetter: (params) => params.row.attributes.gender || '',
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    sortable: true,
    width: 190,
    valueGetter: (params) => moment(params.row.attributes.createdAt).format('DD-MM-YYYY, h:mm a') || '',
  },
];

export default function Forum() {
  const { data, isLoading: isLoadingPatient } = usePatients();
  const { mutateAsync: addPatient, isLoading: isLoadingAddPatient } = useAddPatient();

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [swipableModalOpen, setSwipableModalOpen] = React.useState(false);

  function swipableOpen() {
    setSwipableModalOpen(true);
  }

  function closeSwipable() {
    setSwipableModalOpen(false);
  }

  function openFromParent() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }

  const openOnClick = () => {
    const w = window.innerWidth;
    if (w >= 768) {
      openFromParent();
    } else {
      swipableOpen();
    }
  };

  return (
    <>
      {(isLoadingPatient || isLoadingAddPatient) && <LoadingScreen key="loader" style={{ zIndex: 100 }} />}
      <MainContainer>
        <Box sx={{ height: 400, width: '100%', padding: '2rem' }}>
          <DataGrid rows={data || []} columns={columns} pageSize={5} rowsPerPageOptions={[5]} disableSelectionOnClick experimentalFeatures={{ newEditingApi: true }} />
        </Box>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'center',
            position: 'fixed',
            bottom: 10,
            zIndex: 111,
          }}
        >
          <CommentBox>
            <div onClick={openOnClick} aria-hidden="true" className="ask">
              <Typography className="ques">ADD A PATIENT</Typography>
              <img src={btnArrow} alt="button arrow" />
            </div>
          </CommentBox>
        </div>

        <QuestionModel IsModalOpened={modalIsOpen} onCloseModal={handleCloseModal} addPatient={addPatient} />
        {window.innerWidth < 768 && <SwipeableEdgeDrawer IsModalOpen={swipableModalOpen} forOpen={swipableOpen} onCloseModal={closeSwipable} />}
        <MainFooter />
      </MainContainer>
    </>
  );
}
