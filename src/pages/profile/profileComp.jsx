import { Avatar, Box, Button, CssBaseline, Grid, Paper, Typography } from "@mui/material";
import { userData } from "./userData/userData";
import { useEffect, useState } from "react";
const ProfileComponent = ({ user }) => {
    const [thatUserData, setUserData] = useState("");
    useEffect(() => {
        userData()
            .then((dataFromUser) => {
                setUserData(dataFromUser);
                console.log(thatUserData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [thatUserData]);
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
                    <Avatar alt="name" src="" sx={{ width: 56, height: 56 }} />
                    <Typography variant="h5" component="h1" color="white">
                        {user.name.first}
                    </Typography>
                </Box>
            </Box>
            <Grid container spacing={2} marginTop={3}>
                <Grid item xs={3}>
                    first name
                </Grid>
                <Grid item xs={3}>
                    {console.log("in grid", user.name.first)}
                </Grid>
                <Grid item xs={3}>
                    mid name
                </Grid>
                <Grid item xs={3}>
                    the mid name
                </Grid>
                <Grid item xs={3}>
                    last name
                </Grid>
                <Grid item xs={3}>
                    the last name
                </Grid>
                <Grid item xs={3}>
                    email
                </Grid>
                <Grid item xs={3}>
                    the email
                </Grid>
                <Grid item xs={3}>
                    phone
                </Grid>
                <Grid item xs={3}>
                    the phone
                </Grid>
                <Grid item xs={3}>
                    state
                </Grid>
                <Grid item xs={3}>
                    the state
                </Grid>
                <Grid item xs={3}>
                    country
                </Grid>
                <Grid item xs={3}>
                    the country
                </Grid>
                <Grid item xs={3}>
                    city
                </Grid>
                <Grid item xs={3}>
                    the city
                </Grid>
                <Grid item xs={3}>
                    street
                </Grid>
                <Grid item xs={3}>
                    the street
                </Grid>
                <Grid item xs={3}>
                    house number
                </Grid>
                <Grid item xs={3}>
                    the house number
                </Grid>
                <Grid item xs={3}>
                    ZIP code
                </Grid>
                <Grid item xs={3}>
                    the ZIP code
                </Grid>
            </Grid>
        </Grid>
    );
};
export default ProfileComponent;
