import React from "react";
import { Button } from "@mui/material";

const ButtonMap = ({ word, handleSubmit }) => {
  return (
    <Button
      onClick={handleSubmit}
      sx={{ marginTop: 2, borderRadius: 3, mb: 2 }}
      variant="contained"
      style={{
        backgroundColor: "#ff9800",
      }}
    >
      {word}
    </Button>
  );
};

export default ButtonMap;
