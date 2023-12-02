import * as React from "react";
import { Paper, useMediaQuery } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Links from "../header/ui/Links";
import { BottomNavigation } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const FooterComp = () => {
    const linksScreenSize = useMediaQuery("(min-width:500px)");

    return (
        <Paper sx={{ flexGrow: 1, bottom: 0, position: "", right: 0, left: 0 }}>
            <BottomNavigation position="static">
                <Toolbar>
                    {linksScreenSize && <Links />}
                    <IconButton href="#">
                        <ArrowUpwardIcon />
                    </IconButton>
                </Toolbar>
            </BottomNavigation>
        </Paper>
    );
};
export default FooterComp;
