// material
import { styled } from '@mui/material/styles';
import { Divider, Container, Typography } from '@mui/material';
//

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

const Foot = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins',
  fontSize: '13px',
  lineHeight: '20px',
  color: '#A2A2A2',
  [theme.breakpoints.down("md")]: {
    fontSize: '9px'
  },
}));

const Line = styled('div')(({ theme }) => ({
  width: '50px',
  border: '1px solid #2E2E80',
  backgroundColor: '#2E2E80',
  margin: 'auto',
  marginTop: '10px',
  [theme.breakpoints.down("md")]: {

  },
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" style={{ padding: '50px 0px' }}>
        <Foot variant="body2" style={{ width: 'fit-content', margin: 'auto' }}>
          Copyright 2021 RMZ Corp. All rights reserved.
        </Foot>
        <Line />
      </Container>
    </RootStyle>
  );
}
