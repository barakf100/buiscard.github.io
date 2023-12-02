import ROUTES from "../routes/ROUTES";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import GroupIcon from "@mui/icons-material/Group";
const myLinks = [
    { to: ROUTES.HOME, children: "Home " },
    { to: ROUTES.REGISTER, children: "Register " },
    { to: ROUTES.LOGIN, children: "Login " },
];

const alwaysLinks = [
    { to: ROUTES.HOME, children: "Home ", icon: <HomeIcon /> },
    { to: ROUTES.ABOUT, children: "About ", icon: <InfoIcon /> },
];
const loggedInLinks = [
    { to: ROUTES.PROFILE, children: "Profile page", icon: <AccountBoxIcon /> },
    { to: ROUTES.CREATECARD, children: "Create page", icon: <AddIcon /> },
    { to: ROUTES.FAVORITES, children: "Favorite", icon: <FavoriteIcon /> },
];
const loggedOutLinks = [
    { to: ROUTES.REGISTER, children: "Register", icon: <AppRegistrationIcon /> },
    { to: ROUTES.LOGIN, children: "Login", icon: <LoginIcon /> },
];
const adminLinks = [
    { to: ROUTES.PROFILE, children: "Profile page", icon: <AccountBoxIcon /> },
    { to: ROUTES.CREATECARD, children: "Create page", icon: <AddIcon /> },
    { to: ROUTES.USER, children: "Users", icon: <GroupIcon /> },
    { to: ROUTES.FAVORITES, children: "Favorite", icon: <FavoriteIcon /> },
];
export default myLinks;
export { alwaysLinks, loggedInLinks, loggedOutLinks, adminLinks };
