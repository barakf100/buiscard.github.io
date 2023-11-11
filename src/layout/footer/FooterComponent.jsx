import { Fragment, useState } from "react";

import { BottomNavigation, BottomNavigationAction, Box, Divider, Typography } from "@mui/material";
import myLinks from "../myLinks";
import NavLinkComponent from "../header/NavLinkComponent";
import { NavLink } from "react-router-dom";
import nextKey from "generate-my-key";
const FooterComponent = () => {
    const [value, setValue] = useState(0);
    return (
        <Fragment>
            <Divider sx={{ marginTop: 2 }}></Divider>
            <BottomNavigation
                sx={{ bottom: 0 }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}>
                {myLinks.map((myLinks) => (
                    <NavLinkComponent to={myLinks.to} key={nextKey()}>
                        {myLinks.children}
                    </NavLinkComponent>
                ))}
            </BottomNavigation>
        </Fragment>
    );
};

export default FooterComponent;
