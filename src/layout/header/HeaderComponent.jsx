import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Links from "./ui/Links";
import LeftDrawerComponent from "./ui/LeftDrawerComponent";
import { useState } from "react";
import FilterComponent from "./ui/FilterComponent";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";
import { userData } from "../../store/userDataSlice";
import { useEffect } from "react";

const HeaderComponent = ({ isDarkTheme, onThemeChange }) => {
    const screenSize = useMediaQuery("(min-width:700px)");
    const linksScreenSize = useMediaQuery("(min-width:500px)");
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userData());
    }, [dispatch]);
    const user = useSelector((bigPie) => bigPie.authSlice.loggedIn);
    const { data } = useSelector((bigPie) => bigPie.userDataSlice);
    const handleThemeChange = (event) => {
        onThemeChange(event.target.checked);
    };

    const handleOpenDrawerClick = () => {
        setIsOpen(true);
    };
    const handleCloseDrawerClick = () => {
        setIsOpen(false);
    };
    const handleLogOut = () => {
        localStorage.removeItem("token");
        dispatch(authActions.logout());
    };
    const handleProfileClick = () => {
        navigate(ROUTES.PROFILE);
    };
    return (
        <Box sx={{ flexGrow: 1, mb: 2, position: "fixed", zIndex: 999, width: "100%" }}>
            <AppBar position="static" color="">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2, display: { xs: "block", sm: "none", md: "none", lg: "none" } }}
                        onClick={handleOpenDrawerClick}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" noWrap component="div" sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                        BIZ.Card
                    </Typography>
                    {linksScreenSize && <Links />}
                    {screenSize && <FilterComponent />}
                    <Box
                        sx={{
                            my: 2,
                            p: 1,
                        }}>
                        <Typography sx={{ display: { md: "inline", cursor: "pointer" } }} onClick={handleThemeChange}>
                            {isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}
                        </Typography>
                    </Box>
                    {/* <Box sx={{ flexGrow: 1 }} /> */}
                    <Box sx={{ display: { md: "flex" } }}>
                        {user ? (
                            <Avatar
                                sx={{ cursor: "pointer", display: { xs: "none", sm: "none", md: "block" } }}
                                alt="user avatar"
                                onClick={handleProfileClick}
                                src={data.image?.url}
                            />
                        ) : (
                            ""
                        )}
                        <IconButton size="large" aria-label="log out" color="inherit" onClick={handleLogOut}>
                            <LogoutIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <LeftDrawerComponent isOpen={isOpen} onCloseDrawer={handleCloseDrawerClick} />
        </Box>
    );
};
export default HeaderComponent;
