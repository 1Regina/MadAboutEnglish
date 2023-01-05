import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CompoDrawer from "./CompoDrawer";

const linksArray = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Classes", url: "/classes" },
  { name: "Location", url: "/location" },
  { name: "Events", url: "/events" },
  { name: "Testimonials", url: "/testimonials" },
  { name: "Contact", url: "/contact" },
];

const Navbar = ({ links }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState(false);

  const navigate = useNavigate();

  return (
    <AppBar
      sx={{
        background: "#304ffe",
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        width: "100%",
        height: "70px",
      }}
      variant="elevation"
    >
      <Toolbar>
        {isMatch ? (
          <>
            <CompoDrawer links={links} />
          </>
        ) : (
          <Grid sx={{ placeItems: "center" }} container>
            <Grid item xs={6}>
              <Tabs
                textColor="white" //"inherit"
                indicatorColor="secondary"
                value={value}
                onChange={(e, val) => setValue(val)}
                centered
              >
                {links.map((link, index) => (
                  <Tab
                    value={index}
                    key={`navbar-${index}`}
                    label={link.name}
                    onClick={() => navigate(link.url)}
                  />
                ))}
              </Tabs>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export { Navbar, linksArray };
