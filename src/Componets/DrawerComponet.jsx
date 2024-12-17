import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import PreviewIcon from "@mui/icons-material/Preview";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
const DrawerComponet = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open); // Toggle open/close state
  };

  return (
    <>
      <IconButton
        onClick={toggleDrawer}
        sx={{
          marginLeft: "auto",
        }}
      >
        <MenuRoundedIcon
          sx={{
            color: "white",
          }}
        />
      </IconButton>

      <Drawer
        open={open}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "black", // Drawer background color
            color: "white", // Text color
            width: 240, // Drawer width
          },
        }}
      >
        {/* Title Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 2,
            borderBottom: "1px solid white", // Add a separator
          }}
        >
          <MenuBookIcon sx={{ color: "white", marginRight: 1 }} />
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            My Menu
          </Typography>
        </Box>

        {/* List Section */}
        <List>
          <ListItemButton>
            <ListItemIcon>
              <FastfoodIcon sx={{ color: "white" }} /> {/* Example icon */}
            </ListItemIcon>
            <ListItemText primary="Products" sx={{ color: "white" }} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <AssuredWorkloadIcon sx={{ color: "white" }} />{" "}
            </ListItemIcon>
            <ListItemText primary="Services" sx={{ color: "white" }} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <PreviewIcon sx={{ color: "white" }} /> {/* Example icon */}
            </ListItemIcon>
            <ListItemText primary="Overview" sx={{ color: "white" }} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <ContactMailIcon
                sx={{
                  color: "white",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Contact Us" sx={{ color: "white" }} />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

export default DrawerComponet;
