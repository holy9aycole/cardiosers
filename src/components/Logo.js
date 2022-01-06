import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';
import LogoRMZ from "assets/rmz-logo.svg";
// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {

  return (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <img src={LogoRMZ} alt="" style={{ width: '50px', height: '50px' }} />
    </Box>
  );
}
