import React from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const imagesObj = importAll(
  require.context(
    "../../../public/assets/classPics",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const itemData = Object.entries(imagesObj);

const Home = () => {
  console.log("the images", imagesObj);
  console.log(Object.entries(imagesObj));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          // alignItems:"center",

          // maxWidth: 600,
          // maxHeight: 10,
          // padding: 3,
          // marginTop: 10,
        }}
      >
        <Box
          component="img"
          alt="Logo"
          src="assets/logo/logo.jpeg"
          // paddingLeft={2}
          // paddingTop={2}
          paddingBottom={4}
          paddingTop={15}
          width={160}
        />
      </Box>

      <Box
        // height='100%'
        maxWidth={1200}
        margin="auto"
        // marginTop={1}
        // padding={3}
        // paddingLeft={1}
        // paddingRight={1}
        borderRadius={5}
        border={15}
        borderColor="rgb(26, 35, 126, 0.2)"
        boxShadow="5px 5px 10px #ccc"
        sx={{
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
          overflowY: "scroll",
          backgroundColor: "white",
        }}
      >
        <ImageList variant="quilted" cols={3} gap={20}>
          {itemData.map((item) => (
            <ImageListItem key={item[1]}>
              <img
                src={`${item[1]}?w=248&fit=crop&auto=format`}
                srcSet={`${item[1]}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item[0]}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};

export default Home;
