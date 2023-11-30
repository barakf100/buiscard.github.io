import ROUTES from "../routes/ROUTES";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import GroupIcon from "@mui/icons-material/Group";
// TODO: add icon to each link when small hide write show only icon
const myLinks = [
    { to: ROUTES.HOME, children: "Home page" },
    { to: ROUTES.REGISTER, children: "Register page" },
    { to: ROUTES.LOGIN, children: "Login page" },
];

const alwaysLinks = [
    { to: ROUTES.HOME, children: "Home page", icon: <HomeIcon /> },
    { to: ROUTES.ABOUT, children: "About page", icon: <InfoIcon /> },
];
const loggedInLinks = [
    { to: ROUTES.PROFILE, children: "Profile page", icon: <AccountBoxIcon /> },
    { to: ROUTES.CREATECARD, children: "Create page", icon: <AddIcon /> },
    { to: ROUTES.FAVORITES, children: "favorite page", icon: <FavoriteIcon /> },
];
const loggedOutLinks = [
    { to: ROUTES.REGISTER, children: "Register page", icon: <AppRegistrationIcon /> },
    { to: ROUTES.LOGIN, children: "Login page", icon: <LoginIcon /> },
];
const adminLinks = [
    { to: ROUTES.PROFILE, children: "Profile page", icon: <AccountBoxIcon /> },
    { to: ROUTES.CREATECARD, children: "Create page", icon: <AddIcon /> },
    { to: ROUTES.USER, children: "users page", icon: <GroupIcon /> },
    { to: ROUTES.FAVORITES, children: "favorite page", icon: <FavoriteIcon /> },
];
export default myLinks;
export { alwaysLinks, loggedInLinks, loggedOutLinks, adminLinks };
