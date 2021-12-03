// material
import { styled } from '@mui/material/styles';
import { Divider, Container, Typography } from '@mui/material';
//

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" style={{ padding: '50px 0px' }}>
        <Typography variant="body2" style={{ width: 'fit-content', margin: 'auto' }}>
          Copyright 2021 RMZ Corp. All rights reserved.
        </Typography>
      </Container>
    </RootStyle>
  );
}
