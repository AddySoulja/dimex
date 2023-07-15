import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/images/logo.png";

const pages = ["Explore", "Sellers", "Create"];
const settings = ["Profile", "Wallet", "Logout"];

function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [scrollY, setScrollY] = useState(0);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  useEffect(() => {
    const setScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", setScroll);
    return () => window.removeEventListener("scroll", setScroll);
  }, []);
  return (
    <AppBar
      className={`${scrollY > 200 && "active"} header`}
      sx={{
        backgroundColor: scrollY > 200 ? "var(--oxford-blue-2)" : "transparent",
      }}
    >
      <Container maxWidth="xl" className="container" disableGutters>
        <Link to="/">
          <Box
            sx={{ display: "flex", height: { xs: 55, sm: 55, md: 65, lg: 65 } }}
          >
            <img src={logo} alt="logo" className="logo" />
          </Box>
        </Link>
        <Box
          className="header-action"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {pages.map((page) => (
            <Link
              key={page}
              onClick={handleCloseUserMenu}
              sx={{ my: 2, color: "white", display: "block", fontSize: "14px" }}
              to={`/${page.toLowerCase()}`}
            >
              {page}
            </Link>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <IconButton
            onClick={handleOpenUserMenu}
            sx={{ p: 0, display: { xs: "none", md: "flex" } }}
          >
            <Avatar alt="Remy Sharp" src="" />
          </IconButton>
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            aria-haspopup="true"
            onClick={handleOpenUserMenu}
            color="inherit"
          >
            <MenuIcon
              sx={{
                width: "35px",
                height: "35px",
              }}
            />
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                flexDirection: "column",
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseUserMenu}>
                  <Link to={`/${page.toLowerCase()}`}>
                    <Typography textAlign="center" sx={{ fontSize: "14px" }}>
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Box>
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Link to={`/${setting.toLowerCase()}`}>
                  <Typography textAlign="center" sx={{ fontSize: "14px" }}>
                    {setting}
                  </Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Container>
    </AppBar>
  );
}
export default Navbar;
