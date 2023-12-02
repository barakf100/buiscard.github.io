import { Container } from "@mui/material";

const MainComponent = ({ children }) => {
    return <Container style={{ overflow: "scroll", paddingTop: 100 }}>{children}</Container>;
};

export default MainComponent;
