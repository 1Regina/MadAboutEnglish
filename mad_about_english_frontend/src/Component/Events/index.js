import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormFont } from "../Theme";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const imagesObj = importAll(
  require.context("../../../public/assets/events", false, /\.(png|jpe?g|svg)$/)
);

const images = Object.entries(imagesObj);

const Events = (props) => {
  console.log(images);
  let settings = {
    dots: true,
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "95vw",
          // height: "calc(100vh - 80px)",
          top: 75,

          // position: "absolute",
          // ":hover": {
          //   boxShadow: "10px 10px 20px #ccc",
          // },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
          paddingTop={12}
        >
          {/* <Box
          component="img"
          alt="Logo"
          src="assets/logo/logo.jpeg"
          // paddingLeft={2}
          // paddingTop={2}
          paddingBottom={4}
          paddingTop={12}
          width={100}
        /> */}
        </Box>
        <Slider
          {...settings}
          autoplay={true}
          infinite={true}
          pauseOnFocus={true}
        >
          {images.map((step, index) => (
            <div key={step[0]}>
              {Math.abs(activeStep - index) <= maxSteps - 1 ? (
                <Box
                  // padding={3}
                  borderRadius={5}
                  border={15}
                  borderColor="rgb(26, 35, 126, 0.2)"
                  // borderColor="#1565c0"
                  boxShadow="5px 5px 10px #ccc"
                  component="img"
                  sx={{
                    margin: "auto",
                    maxHeight: "58vh",
                    maxWidth: "70vw",
                    display: "block",
                    objectFit: "cover",
                    ":hover": {
                      boxShadow: "10px 10px 20px #ccc",
                    },
                    // maxHeight: "480px",
                    // maxWidth: "300px",
                    // marginTop: "50px",
                  }}
                  src={step[1]}
                  alt={step[0]}
                />
              ) : null}
            </div>
          ))}
        </Slider>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 5,
          paddingRight: 2
        }}
      >
        <FormFont>Note: Best viewed from desktop</FormFont>
      </Box>
    </>
  );
};

export default Events;
