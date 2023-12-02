import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeaderComponent from "./header/HeaderComponent";
import MainComponent from "./main/MainComponent";
import tmc from "twin-moon-color";
import { useDispatch, useSelector } from "react-redux";
import { darkThemeActions } from "../store/darkThemeSlice";
import FooterComp from "./footer/footerComp";

const LayoutComponent = ({ children }) => {
    const isDarkTheme = useSelector((bigPie) => bigPie.darkThemeSlice.darkTheme);
    const dispatch = useDispatch();

    const themes = tmc({
        "text.headerColor": "!#464496",
        "text.headerActive": "!#ffffff",
        favActive: "*#FB0000",
    });
    const darkTheme = createTheme(themes.dark);
    const lightTheme = createTheme(themes.light);
    const handleThemeChange = (checked) => {
        dispatch(darkThemeActions.changeTheme());
    };

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <CssBaseline />
            <HeaderComponent isDarkTheme={isDarkTheme} onThemeChange={handleThemeChange} />
            <MainComponent>{children}</MainComponent>
            <FooterComp />
        </ThemeProvider>
    );
};

export default LayoutComponent;
