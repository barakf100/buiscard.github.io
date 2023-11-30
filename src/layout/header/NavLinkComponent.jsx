import { Typography, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ to, children, icon, from }) => {
    const screenSize = useMediaQuery("(max-width:1200px)");
    return (
        <NavLink style={{ textDecoration: "none" }} to={to}>
            {({ isActive }) => (
                <Typography color={isActive ? "text.headerActive" : "text.headerColor"} sx={{ p: 2 }} variant="h6">
                    {from === "header" && screenSize && icon && <span style={{ marginRight: "8px" }}>{icon}</span>}
                    {from === "header" && !screenSize && children}
                    {from === "drawer" && children}
                </Typography>
            )}
        </NavLink>
    );
};
export default NavLinkComponent;
