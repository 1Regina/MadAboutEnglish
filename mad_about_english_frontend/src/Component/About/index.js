import * as React from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material/";
import { BlueFont } from "../Theme";
import Footer from "../../Footer";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
      // paddingBottom={4}
      paddingTop={15}
    >
      <Stack
        direction="column"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="Rebecca"
          src="/assets/me/me.jpg"
          sx={{
            width: 150,
            height: 150,
            border: 15,
            borderColor: "rgb(26, 35, 126, 0.2)",
            // borderColor: "#0d47a1",
            // marginLeft: 1,
          }}
        />
        <br />
        <Typography
          sx={{
            fontStyle: "italic",
            // paddingLeft: 6,
            // marginTop: 5,
            fontWeight: "bold",
          }}
        >
          <BlueFont>
            <h1>Founder & Director</h1>
          </BlueFont>
        </Typography>

        <Box
          // height={1000}
          maxWidth={1200}
          // maxWidth={1000}
          // maxHeight={500}
          alignItems="center"
          justifyContent={"center"}
          // margin="auto"
          // marginTop={1}
          padding={2}
          // borderRadius={5}
          // boxShadow="5px 5px 10px #ccc"
          // sx={{
          //   ":hover": {
          //     boxShadow: "10px 10px 20px #ccc",
          //   },
          //   // backgroundColor: "white",
          // }}
        >
          <Typography
            sx={{
              fontSize: 20,
            }}
          >
            <p>
              As soon as I could read on my own, I developed a mad passion for
              the English Language. Hence, I thought, what better way to indulge
              this passion than to intrigue young minds and ignite in them a
              similar love? Over the course of my 23 years as an English
              language educator, I taught in mainstream schools before crossing
              over to the private education sector where I found my niche.
            </p>
            <b>MOE experience</b>
            <p>
              In the 7 years I spent at MOE, I taught General Paper and
              Literature at a junior college, had a stint as a literature
              curriculum officer at the Gifted Education Branch, and taught a
              class of graduating students at a secondary school.
            </p>
            <b>Private Education experience</b>
            <p>
              Besides teaching at 3 top enrichment centres, I also headed the
              Primary English department in two of them. During this time, I
              picked up many pedagogical approaches as well as found deep
              satisfaction in crafting teaching materials that would excite all
              students who walked into the classroom.
            </p>
            <p>
              As the saying goes, "the proof of the pudding is in the eating",
              so wait no more! Sign up for lessons at Mad About English today!
            </p>
          </Typography>
        </Box>
        <Footer />
      </Stack>
    </Box>
  );
};

export default About;
