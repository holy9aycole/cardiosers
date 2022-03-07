import { experimentalStyled as styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
//

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function LoadingScreen({ ...other }) {
  return (
    <RootStyle {...other}>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </RootStyle>
  );
}
