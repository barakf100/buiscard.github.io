import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
const Error404Page = () => {
    const navigate = useNavigate();
    const handleBackHome = () => {
        navigate(ROUTES.HOME);
    };
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <Typography variant="h1">404</Typography>
                        <Typography variant="h6">The page you’re looking for doesn’t exist.</Typography>
                        <Button variant="contained" sx={{ marginTop: 3 }} onClick={handleBackHome}>
                            Back Home
                        </Button>
                    </Grid>
                    <Grid xs={6}>
                        <img src="/assets/imgs/output-onlinegiftools.gif" alt="404" width={500} height={400} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
export default Error404Page;
