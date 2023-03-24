import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Produced by Regina Cheong "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 0,
          mt: "auto",
          justifyContent: "center",
          // backgroundColor: (theme) =>
          //   theme.palette.mode === "light"
          //     ? theme.palette.grey[200]
          //     : theme.palette.grey[800],
        }}
      >
        <Container>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
