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
    // const [anchorEl, setAnchorEl] = useState(null);
    // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
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
    // const isMenuOpen = Boolean(anchorEl);
    // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    // const handleProfileMenuOpen = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleMobileMenuClose = () => {
    //     setMobileMoreAnchorEl(null);
    // };

    // const handleMenuClose = () => {
    //     setAnchorEl(null);
    //     handleMobileMenuClose();
    // };

    // const handleMobileMenuOpen = (event) => {
    //     setMobileMoreAnchorEl(event.currentTarget);
    // };

    const handleThemeChange = (event) => {
        onThemeChange(event.target.checked);
    };

    const handleOpenDrawerClick = () => {
        console.log(data);
        setIsOpen(true);
    };
    const handleCloseDrawerClick = () => {
        setIsOpen(false);
    };
    const handleLogOut = () => {
        localStorage.removeItem("token");
        dispatch(authActions.logout());
        // navigate(ROUTES.HOME);
    };
    const handleProfileClick = () => {
        navigate(ROUTES.PROFILE);
    };
    // const menuId = "primary-search-account-menu";
    // const renderMenu = (
    //     <Menu
    //         anchorEl={anchorEl}
    //         anchorOrigin={{
    //             vertical: "top",
    //             horizontal: "right",
    //         }}
    //         id={menuId}
    //         keepMounted
    //         transformOrigin={{
    //             vertical: "top",
    //             horizontal: "right",
    //         }}
    //         open={isMenuOpen}
    //         onClose={handleMenuClose}></Menu>
    // );

    // const mobileMenuId = "primary-search-account-menu-mobile";
    // const renderMobileMenu = (
    //     <Menu
    //         anchorEl={mobileMoreAnchorEl}
    //         anchorOrigin={{
    //             vertical: "top",
    //             horizontal: "right",
    //         }}
    //         id={mobileMenuId}
    //         keepMounted
    //         transformOrigin={{
    //             vertical: "top",
    //             horizontal: "right",
    //         }}
    //         open={isMobileMenuOpen}
    //         onClose={handleMobileMenuClose}>
    //         <MenuItem onClick={handleProfileMenuOpen}>
    //             <IconButton
    //                 size="large"
    //                 aria-label="account of current user"
    //                 aria-controls="primary-search-account-menu"
    //                 aria-haspopup="true"
    //                 color="inherit">
    //                 <AccountCircle />
    //             </IconButton>
    //             <p>Profile</p>
    //         </MenuItem>
    //     </Menu>
    // );

    return (
        <Box sx={{ flexGrow: 1, mb: 2 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={handleOpenDrawerClick}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
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
                    <Box sx={{ flexGrow: 1 }} />
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
                        {/* <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit">
                            <AccountCircle />
                        </IconButton> */}
                    </Box>
                    {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit">
                            <MoreIcon />
                        </IconButton>
                    </Box> */}
                </Toolbar>
            </AppBar>
            {/* {renderMobileMenu} */}
            {/* {renderMenu} */}
            <LeftDrawerComponent isOpen={isOpen} onCloseDrawer={handleCloseDrawerClick} />
        </Box>
    );
};
export default HeaderComponent;
