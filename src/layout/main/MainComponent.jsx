import { Container } from "@mui/material";

const MainComponent = ({ children }) => {
    return <Container style={{ overflow: "scroll" }}>{children}</Container>;
};

export default MainComponent;
