import { Avatar, Box, CssBaseline, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import { dataActions } from "../../store/userDataSlice";
import { Fragment, useEffect } from "react";
import { userData } from "../../store/userDataSlice";
const ProfileComponent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userData());
    }, [dispatch]);
    const data = useSelector((bigPie) => bigPie.userDataSlice.data);
    console.log(data);
    return (
        // <Fragment>
        //     {data.email},{data?.name?.first}
        // </Fragment>
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
                    <Avatar alt="name" src={data.image?.url} sx={{ width: 65, height: 65, backgroundColor: "white" }} />
                    <Typography variant="h5" component="h1" color="white">
                        {`${data.name?.first} ${data.name?.last}`}
                    </Typography>
                </Box>
            </Box>
            <Grid container spacing={2} marginTop={3}>
                <Grid item xs={3}>
                    first name
                </Grid>
                <Grid item xs={3}>
                    {data.name?.first}
                </Grid>
                <Grid item xs={3}>
                    mid name
                </Grid>
                <Grid item xs={3}>
                    {data.name?.middle ? data.name?.middle : "not in system"}
                </Grid>
                <Grid item xs={3}>
                    last name
                </Grid>
                <Grid item xs={3}>
                    {data.name?.last}
                </Grid>
                <Grid item xs={3}>
                    email
                </Grid>
                <Grid item xs={3}>
                    {data.email}
                </Grid>
                <Grid item xs={3}>
                    phone
                </Grid>
                <Grid item xs={3}>
                    {data.phone}
                </Grid>
                <Grid item xs={3}>
                    state
                </Grid>
                <Grid item xs={3}>
                    {data.address?.state ? data.address?.state : "not in system"}
                </Grid>
                <Grid item xs={3}>
                    country
                </Grid>
                <Grid item xs={3}>
                    {data.address?.country}
                </Grid>
                <Grid item xs={3}>
                    city
                </Grid>
                <Grid item xs={3}>
                    {data.address?.city}
                </Grid>
                <Grid item xs={3}>
                    street
                </Grid>
                <Grid item xs={3}>
                    {data.address?.street}
                </Grid>
                <Grid item xs={3}>
                    house number
                </Grid>
                <Grid item xs={3}>
                    {data.address?.houseNumber}
                </Grid>
                <Grid item xs={3}>
                    ZIP code
                </Grid>
                <Grid item xs={3}>
                    {data.address?.zip}
                </Grid>
            </Grid>
        </Grid>
    );
};
export default ProfileComponent;
