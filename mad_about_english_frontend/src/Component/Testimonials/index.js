import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import { FormFont } from "../Theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const imagesObj = importAll(
  require.context(
    "../../../public/assets/testimonials",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const images = Object.entries(imagesObj);

const Testimonials = (props) => {
  console.log(images);
  let settings = {
    dots: true,
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  return (
    <>
    <Box
      id="box xxx"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        width: "100vw",
        // height: "calc(100vh - 80px)",
        // top: 75,

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
      <Slider {...settings} autoplay={true} infinite={true} pauseOnFocus={true}>
        {images.map((step, index) => (
          <div key={step[0]}>
            {Math.abs(activeStep - index) <= maxSteps - 1 ? (
              <Box
                padding={3}
                borderRadius={5}
                border={15}
                borderColor="rgb(26, 35, 126, 0.2)"
                boxShadow="5px 5px 10px #ccc"
                component="img"
                sx={{
                  margin: "auto",

                  // height: "100%",
                  display: "block",
                  ":hover": {
                    boxShadow: "10px 10px 20px #ccc",
                  },
                  height: "480px",
                  // width:"25%"
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

export default Testimonials;
