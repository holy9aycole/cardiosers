import React from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import btnArrow from 'assets/images/button-arrow.svg';
import MainFooter from 'layouts/main/MainFooter';
import { useScans, useAddScan, usePatients } from 'hooks/useDoctor';
import LoadingScreen from 'components/LoadingScreen';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import moment from 'moment';
import { MainContainer, CommentBox } from './styles';

import QuestionModel from './QuestionModel';
import SwipeableEdgeDrawer from './SwipableModal';

const columns = [
  {
    field: 'patientId',
    headerName: 'Patient Id',
    sortable: true,
    width: 160,
    valueGetter: (params) => params.row.attributes?.patient?.data?.id || '',
  },
  {
    field: 'patient',
    headerName: 'Patient',
    sortable: true,
    width: 160,
    valueGetter: (params) => `${params.row.attributes?.patient?.data?.attributes?.firstName || ''} ${params.row.attributes?.patient?.data?.attributes?.lastName || ''}`,
  },
  {
    field: 'result',
    headerName: 'Status Scan',
    sortable: true,
    width: 160,
    valueGetter: (params) => params.row.attributes.result || '',
  },
  {
    field: 'confidenceScore',
    headerName: 'Confidence Score',
    sortable: true,
    width: 160,
    valueGetter: (params) => params.row.attributes.confidenceScore || '',
  },
];

export default function Forum() {
  const { data, isLoading: isLoadingScan } = useScans();
  const { data: patients, isLoading: isLoadingPatients } = usePatients();
  const { mutateAsync: addScan, isLoading: isLoadingAddScan } = useAddScan();

  console.log('data', data);
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
      {(isLoadingScan || isLoadingPatients) && <LoadingScreen key="loader" style={{ zIndex: 1 }} />}
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
              <Typography className="ques">START A SCAN</Typography>
              <img src={btnArrow} alt="button arrow" />
            </div>
          </CommentBox>
        </div>

        <QuestionModel IsModalOpened={modalIsOpen} onCloseModal={handleCloseModal} addScan={addScan} isLoadingAddScan={isLoadingAddScan} patients={patients} />
        {window.innerWidth < 768 && <SwipeableEdgeDrawer IsModalOpen={swipableModalOpen} forOpen={swipableOpen} onCloseModal={closeSwipable} />}
        <MainFooter />
      </MainContainer>
    </>
  );
}
