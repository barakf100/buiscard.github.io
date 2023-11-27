import * as React from "react";
import { Box, Paper } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Links from "./ui/Links";
import { BottomNavigation, Divider } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const FooterComp = () => {
    return (
        <Paper sx={{ flexGrow: 1, bottom: 0, position: "fixed", right: 0, left: 0 }}>
            <BottomNavigation position="static">
                <Toolbar>
                    <Links />
                    <IconButton href="#">
                        <ArrowUpwardIcon />
                    </IconButton>
                </Toolbar>
            </BottomNavigation>
        </Paper>
    );
};
export default FooterComp;
