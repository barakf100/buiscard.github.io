import ROUTES from "../routes/ROUTES";

const myLinks = [
    { to: ROUTES.HOME, children: "Home page" },
    { to: ROUTES.REGISTER, children: "Register page" },
    { to: ROUTES.LOGIN, children: "Login page" },
];

const alwaysLinks = [{ to: ROUTES.HOME, children: "Home page" }];
const loggedInLinks = [
    { to: ROUTES.PROFILE, children: "Profile page" },
    { to: ROUTES.CREATECARD, children: "Create page" },
];
const loggedOutLinks = [
    { to: ROUTES.REGISTER, children: "Register page" },
    { to: ROUTES.LOGIN, children: "Login page" },
];
const adminLinks = [
    { to: ROUTES.PROFILE, children: "Profile page" },
    { to: ROUTES.CREATECARD, children: "Create page" },
    { to: ROUTES.USER, children: "users page" },
];
export default myLinks;
export { alwaysLinks, loggedInLinks, loggedOutLinks, adminLinks };
