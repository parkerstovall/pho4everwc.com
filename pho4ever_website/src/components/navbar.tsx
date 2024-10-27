import * as React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { APP_PATH, pages } from "../constants/pages";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef();
  return (
    <AppBar position="sticky">
      <Toolbar className="bg-sky-500">
        <Typography variant="h4">Pho-4-Ever</Typography>
        <Box
          height={"50px"}
          sx={{ marginLeft: "15px" }}
          component="img"
          src={`${APP_PATH}images/animatedBowlOfPho.webp`}
        />

        <Stack
          direction={"row"}
          spacing={3}
          sx={{ marginLeft: "auto", display: { sm: "flex", xs: "none" } }}
        >
          {pages.map((page) => {
            return (
              <Link key={page.title} href={page.href}>
                {page.title}
              </Link>
            );
          })}
        </Stack>

        <Box
          ref={ref}
          sx={{
            flexShrink: 1,
            marginLeft: "auto",
            display: { xs: "flex", sm: "none" },
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => {
              setMenuOpen(true);
            }}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={ref?.current}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={menuOpen}
            onClose={() => {
              setMenuOpen(false);
            }}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.title}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <Link href={page.href} style={{ textAlign: "center" }}>
                  {page.title}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
