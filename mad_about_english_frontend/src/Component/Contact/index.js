import React , {useState} from "react";
import { useNavigate} from "react-router-dom";
import { Box, TextField, useMediaQuery, useTheme } from "@mui/material";
import { BlueFont, Required } from "../Theme";
import { ThemeProvider } from "@mui/material/styles";
import ButtonMap from "../Location/ButtonMap";
import Footer from "../../Footer";
import axios from "axios";

const Contact = () => {

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    contact: 0,
    message: "",
  });
   const navigate = useNavigate();

     const handleChange = (e, value) => {
       console.log("eess", e.target.value);
           setInputs((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
   
       }));
     };


    const handleEmail = async (e) => {
    // e.preventDefault(); // prevent a new http request upon submit
    console.log(`inputs`,inputs);
    // await axios.post(process.env.REACT_APP_API_URL + "/contacting", inputs);
    await axios.post(
      "https://asia-southeast1-bookingbasic.cloudfunctions.net/mae", inputs
    );
    navigate("/");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          alt="Logo"
          src="assets/logo/logo.jpeg"
          // paddingLeft={2}
          // paddingTop={2}
          paddingBottom={4}
          paddingTop={12}
          height={100}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          // height="100vh"
          // width="100vw"
          // maxWidth={1000}
          // maxHeight={500}
          // alignItems="center"
          // justifyContent={"center"}
          margin="auto"
          // marginTop={1}
          padding={2}
          borderRadius={5}
          boxShadow="5px 5px 10px #ccc"
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
            backgroundColor: "white",
          }}
        >
          <BlueFont ml={5}>
            <h1>Contact me</h1>
          </BlueFont>
          <form>
            <ThemeProvider theme={Required}>
              {/* <FormControl> */}
              <Box
                ml={5}
                mr={5}
                sx={{
                  display: "flex",
                  flexDirection: isMatch ? "column" : "row",
                  justifyContent: "space-between",
                  // justifyContent: "flex-start",
                }}
              >
                <TextField
                  name="name"
                  onChange={handleChange}
                  style={{ width: "250px", margin: "5px" }}
                  type="text"
                  label="Name"
                  variant="outlined"
                  helperText="Please enter your name"
                  required
                />
                <TextField
                  name="email"
                  onChange={handleChange}
                  style={{ width: "250px", margin: "5px" }}
                  type="email"
                  label="Email"
                  variant="outlined"
                  helperText="Please enter your email"
                  required
                />
                <TextField
                  name="contact"
                  onChange={handleChange}
                  style={{ width: "250px", margin: "5px" }}
                  type="number"
                  label="Contact"
                  variant="outlined"
                  helperText="Please enter your mobile"
                  required
                />
              </Box>
              <Box
                ml={5}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  name="message"
                  onChange={handleChange}
                  style={{
                    width: isMatch ? "250px" : "770px",
                    margin: "5px",
                  }}
                  label="Message"
                  multiline
                  rows={5}
                  required
                  placeholder="Leave your message here and you will hear from me!"
                  helperText="Please enter your message"
                />
              </Box>
              {/* </FormControl> */}
            </ThemeProvider>
            <Box
              mr={6}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <ButtonMap word={"Submit"} handleSubmit={handleEmail}></ButtonMap>
            </Box>
          </form>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: 2
        }}
      >
        <Footer />
      </Box>
    </>
  );
};

export default Contact;
