import { Avatar, Box, Button, CssBaseline, Divider, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userData } from "../../store/userDataSlice";
import EditPopUp from "./editPopUp";
const ProfileComponent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userData());
    }, [dispatch]);
    const data = useSelector((bigPie) => bigPie.userDataSlice.data);
    const theme = useSelector((bigPie) => bigPie.darkThemeSlice.darkTheme);
    let color;
    if (theme) color = "rgba(255,255,255,0.6)";
    else color = "rgba(0,0,0,0.6)";
    return (
        <Grid container>
            <CssBaseline />
            <Box
                sx={{
                    backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
                    backgroundSize: "84vw",
                    backgroundPosition: "center",
                    height: "50vh",
                    width: "84vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Avatar alt="name" src={data.image?.url} sx={{ width: 100, height: 100, backgroundColor: "white" }} />
                    <Typography variant="h5" component="h1" color="white" mt={3}>
                        {`${data.name?.first} ${data.name?.middle ? data.name?.middle : ""} ${data.name?.last}`}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ width: "84vw", display: "flex", justifyContent: "flex-end" }}>
                <Button>
                    <EditPopUp dispatch={dispatch} />
                </Button>
            </Box>
            <Grid container spacing={1} marginTop={3} textAlign="center">
                <Grid item xs={6}>
                    <Grid item xs={12} fontWeight="Medium">
                        First name
                    </Grid>
                    <Grid item xs={12} color={color}>
                        {data.name?.first}
                        <Divider />
                    </Grid>
                    <Grid item xs={12} fontWeight="Medium">
                        Mid name
                    </Grid>
                    <Grid item xs={12} color={color}>
                        {data.name?.middle ? data.name?.middle : "not in system"}
                        <Divider />
                    </Grid>
                    <Grid item xs={12} fontWeight="Medium">
                        Last name
                    </Grid>
                    <Grid item xs={12} color={color}>
                        {data.name?.last}
                        <Divider />
                    </Grid>
                    <Grid item xs={12} fontWeight="Medium">
                        Email
                    </Grid>
                    <Grid item xs={12} color={color}>
                        {data.email}
                        <Divider />
                    </Grid>
                    <Grid item xs={12} fontWeight="Medium">
                        Phone
                    </Grid>
                    <Grid item xs={12} color={color}>
                        {data.phone}
                        <Divider />
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid item xs={12} fontWeight="Medium">
                        State
                    </Grid>
                    <Grid item xs={12} color={color}>
                        {data.address?.state ? data.address?.state : "not in system"}
                        <Divider />
                    </Grid>
                    <Grid item xs={12} fontWeight="Medium">
                        Country
                    </Grid>
                    <Grid item xs={12} color={color}>
                        {data.address?.country}
                        <Divider />
                    </Grid>
                    <Grid item xs={12} fontWeight="Medium">
                        City
                    </Grid>
                    <Grid item xs={12} color={color}>
                        {data.address?.city}
                        <Divider />
                    </Grid>
                    <Grid item xs={12} fontWeight="Medium">
                        Street
                    </Grid>
                    <Grid item xs={12} color={color}>
                        {data.address?.street}
                        <Divider />
                    </Grid>
                    <Grid item xs={12} fontWeight="Medium">
                        House number
                    </Grid>
                    <Grid item xs={12} color={color}>
                        {data.address?.houseNumber}
                        <Divider />
                    </Grid>
                    <Grid item xs={12} fontWeight="Medium">
                        ZIP code
                    </Grid>
                    <Grid item xs={12} color={color}>
                        {data.address?.zip}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default ProfileComponent;
