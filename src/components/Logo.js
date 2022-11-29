import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import logo from "../assets/logo.png"

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return <Box component="img" alt="" src={logo} sx={{ width: 40, height: 40, ...sx }} />;
}
