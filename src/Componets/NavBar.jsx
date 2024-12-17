import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import DrawerComponent from "./DrawerComponet";
import {
  AppBar,
  Button,
  Grid,
  Toolbar,
  useMediaQuery,
  Box,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useState } from "react";
import { useTheme } from "@mui/material/styles"; // Correct import

const NavBar = ({ links }) => {
  const [value, setValue] = useState(0); // Initialize with a default value

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md")); // Media query to detect small screens

  return (
    <>
      <CssBaseline />
      <AppBar
        position="relative"
        sx={{
          background: "black",
          fontFamily: "'Bebas Neue', sans-serif",
        }}
      >
        <Toolbar>
          {isMatch ? (
            <>
              <Typography>
                <ShoppingCartCheckoutIcon />
              </Typography>
              <DrawerComponent /> {/* Mobile view */}
            </>
          ) : (
            <Grid
              container
              sx={{
                placeItems: "center",
              }}
              spacing={2}
            >
              <Grid item xs={2}>
                <Typography>
                  <ShoppingCartCheckoutIcon />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Tabs
                  aria-label="navigation tabs"
                  value={value}
                  indicatorColor="secondary"
                  textColor="inherit"
                  onChange={(e, val) => setValue(val)}
                >
                  {links.map((link, index) => (
                    <Tab label={link} key={index} />
                  ))}
                </Tabs>
              </Grid>
              <Grid item xs={4}>
                <Box display="flex" justifyContent="flex-end" gap={1}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{
                      border: "none",
                      backgroundImage:
                        "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(219,70,252,0.6252626050420168) 100%);",
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    color="inherit"
                    variant="outlined"
                    sx={{
                      border: "none",
                      backgroundImage:
                        "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(219,70,252,0.6252626050420168) 100%);",
                    }}
                  >
                    Sign up
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
