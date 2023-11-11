import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";
import Links from "./ui/Links";
import { BottomNavigation, Divider } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useNavigate } from "react-router-dom";

const FooterComp = ({ isDarkTheme, onThemeChange }) => {
    const mobileMenuId = "primary-search-account-menu-mobile";
    return (
        <Box sx={{ flexGrow: 1, mb: 2, position: "absolute", right: 0, left: 0, mt: 2 }}>
            <Divider sx={{ mt: 2 }} />
            <BottomNavigation position="static">
                <Toolbar>
                    <Links />
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton size="large" aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" color="inherit">
                            <MoreIcon />
                        </IconButton>
                    </Box>
                    <IconButton href="#">
                        <ArrowUpwardIcon />
                    </IconButton>
                </Toolbar>
            </BottomNavigation>
        </Box>
    );
};
export default FooterComp;
