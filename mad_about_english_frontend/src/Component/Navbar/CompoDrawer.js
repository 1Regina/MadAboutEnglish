import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const CompoDrawer = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            // backgroundImage:
            //   "linear-gradient(90deg, rgba(88,20,223,1) 0%, rgba(119,5,156,0.989233193277311) 67%)",
            background: "#304ffe",
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          {links.map((link, index) => (
            <ListItemButton
              onClick={() => setOpen(false)}
              key={`menuItem-${index}`}
              divider
              component="a"
              href={link.url}
            >
              <ListItemIcon>
                <ListItemText sx={{ color: "whitesmoke" }}>
                  {link.name}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "white" }}
        onClick={() => setOpen(!open)}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
};

export default CompoDrawer;
