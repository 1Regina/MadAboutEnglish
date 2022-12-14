import { styled, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const WhiteFont = styled(Typography)`
  color: #ffffff;
`;

const FormFont = styled(Typography)`
  color: #9e9e9e;
`;

const BlueFont = styled(Typography)`
  color: #0d47a1;
`;

const Required = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: "red" },
      },
    },
  },
});

export { WhiteFont, FormFont, BlueFont, Required };
