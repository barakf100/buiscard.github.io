import {
    // Box,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { Fragment } from "react";

const CardComponent = () => {
    return (
        <Fragment>
            {/* <Card>
                <CardHeader title="Bentley" subheader="sx-123"></CardHeader>
            </Card>
            <Card raised square>
                <CardHeader title="Bentley 2" subheader="sx-123"></CardHeader>
            </Card>
            <Card variant="outlined">
                <CardHeader title="Bentley 3" subheader="sx-123"></CardHeader>
            </Card> */}
            <Grid container spacing={2} direction="row">
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    image="https://robbreport.com/wp-content/uploads/2021/01/challenger01.jpg?w=1000"
                                ></CardMedia>
                                <CardHeader
                                    title="forth"
                                    sx={{ textAlign: "left" }}
                                />
                                <CardHeader
                                    title="sub"
                                    sx={{
                                        textAlign: "left",
                                        fontSize: "0.1rem",
                                    }}
                                />
                                <Divider></Divider>
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Excepturi provident quo
                                    impedit neque, quas repudiandae ea
                                    praesentium fugiat eligendi quibusdam
                                    deserunt nulla aperiam debitis quisquam vero
                                    officiis, placeat corrupti hic.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    image="https://robbreport.com/wp-content/uploads/2021/01/challenger01.jpg?w=1000"
                                ></CardMedia>
                                <CardHeader
                                    title="forth"
                                    sx={{ textAlign: "left" }}
                                />
                                <CardHeader
                                    title="sub"
                                    sx={{
                                        textAlign: "left",
                                        fontSize: "0.1rem",
                                    }}
                                />
                                <Divider></Divider>
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Excepturi provident quo
                                    impedit neque, quas repudiandae ea
                                    praesentium fugiat eligendi quibusdam
                                    deserunt nulla aperiam debitis quisquam vero
                                    officiis, placeat corrupti hic.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    image="https://robbreport.com/wp-content/uploads/2021/01/challenger01.jpg?w=1000"
                                ></CardMedia>
                                <CardHeader
                                    title="forth"
                                    sx={{ textAlign: "left" }}
                                />
                                <CardHeader
                                    title="sub"
                                    sx={{
                                        textAlign: "left",
                                        fontSize: "0.1rem",
                                    }}
                                />
                                <Divider></Divider>
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Excepturi provident quo
                                    impedit neque, quas repudiandae ea
                                    praesentium fugiat eligendi quibusdam
                                    deserunt nulla aperiam debitis quisquam vero
                                    officiis, placeat corrupti hic.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    image="https://robbreport.com/wp-content/uploads/2021/01/challenger01.jpg?w=1000"
                                ></CardMedia>
                                <CardHeader
                                    title="forth"
                                    sx={{ textAlign: "left" }}
                                />
                                <CardHeader
                                    title="sub"
                                    sx={{
                                        textAlign: "left",
                                        fontSize: "0.1rem",
                                    }}
                                />
                                <Divider></Divider>
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Excepturi provident quo
                                    impedit neque, quas repudiandae ea
                                    praesentium fugiat eligendi quibusdam
                                    deserunt nulla aperiam debitis quisquam vero
                                    officiis, placeat corrupti hic.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    image="https://robbreport.com/wp-content/uploads/2021/01/challenger01.jpg?w=1000"
                                ></CardMedia>
                                <CardHeader
                                    title="forth"
                                    sx={{ textAlign: "left" }}
                                />
                                <CardHeader
                                    title="sub"
                                    sx={{
                                        textAlign: "left",
                                        fontSize: "0.1rem",
                                    }}
                                />
                                <Divider></Divider>
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Excepturi provident quo
                                    impedit neque, quas repudiandae ea
                                    praesentium fugiat eligendi quibusdam
                                    deserunt nulla aperiam debitis quisquam vero
                                    officiis, placeat corrupti hic.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    image="https://robbreport.com/wp-content/uploads/2021/01/challenger01.jpg?w=1000"
                                ></CardMedia>
                                <CardHeader
                                    title="forth"
                                    sx={{ textAlign: "left" }}
                                />
                                <CardHeader
                                    title="sub"
                                    sx={{
                                        textAlign: "left",
                                        fontSize: "0.1rem",
                                    }}
                                />
                                <Divider></Divider>
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Excepturi provident quo
                                    impedit neque, quas repudiandae ea
                                    praesentium fugiat eligendi quibusdam
                                    deserunt nulla aperiam debitis quisquam vero
                                    officiis, placeat corrupti hic.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    image="https://robbreport.com/wp-content/uploads/2021/01/challenger01.jpg?w=1000"
                                ></CardMedia>
                                <CardHeader
                                    title="forth"
                                    sx={{ textAlign: "left" }}
                                />
                                <CardHeader
                                    title="sub"
                                    sx={{
                                        textAlign: "left",
                                        fontSize: "0.1rem",
                                    }}
                                />
                                <Divider></Divider>
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Excepturi provident quo
                                    impedit neque, quas repudiandae ea
                                    praesentium fugiat eligendi quibusdam
                                    deserunt nulla aperiam debitis quisquam vero
                                    officiis, placeat corrupti hic.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    image="https://robbreport.com/wp-content/uploads/2021/01/challenger01.jpg?w=1000"
                                ></CardMedia>
                                <CardHeader
                                    title="forth"
                                    sx={{ textAlign: "left" }}
                                />
                                <CardHeader
                                    title="sub"
                                    sx={{
                                        textAlign: "left",
                                        fontSize: "0.1rem",
                                    }}
                                />
                                <Divider></Divider>
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Excepturi provident quo
                                    impedit neque, quas repudiandae ea
                                    praesentium fugiat eligendi quibusdam
                                    deserunt nulla aperiam debitis quisquam vero
                                    officiis, placeat corrupti hic.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    image="https://robbreport.com/wp-content/uploads/2021/01/challenger01.jpg?w=1000"
                                ></CardMedia>
                                <CardHeader
                                    title="forth"
                                    sx={{ textAlign: "left" }}
                                />
                                <CardHeader
                                    title="sub"
                                    sx={{
                                        textAlign: "left",
                                        fontSize: "0.1rem",
                                    }}
                                />
                                <Divider></Divider>
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Excepturi provident quo
                                    impedit neque, quas repudiandae ea
                                    praesentium fugiat eligendi quibusdam
                                    deserunt nulla aperiam debitis quisquam vero
                                    officiis, placeat corrupti hic.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    image="https://robbreport.com/wp-content/uploads/2021/01/challenger01.jpg?w=1000"
                                ></CardMedia>
                                <CardHeader
                                    title="forth"
                                    sx={{ textAlign: "left" }}
                                />
                                <CardHeader
                                    title="sub"
                                    sx={{
                                        textAlign: "left",
                                        fontSize: "0.1rem",
                                    }}
                                />
                                <Divider></Divider>
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Excepturi provident quo
                                    impedit neque, quas repudiandae ea
                                    praesentium fugiat eligendi quibusdam
                                    deserunt nulla aperiam debitis quisquam vero
                                    officiis, placeat corrupti hic.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    image="https://robbreport.com/wp-content/uploads/2021/01/challenger01.jpg?w=1000"
                                ></CardMedia>
                                <CardHeader
                                    title="forth"
                                    sx={{ textAlign: "left" }}
                                />
                                <CardHeader
                                    title="sub"
                                    sx={{
                                        textAlign: "left",
                                        fontSize: "0.1rem",
                                    }}
                                />
                                <Divider></Divider>
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Excepturi provident quo
                                    impedit neque, quas repudiandae ea
                                    praesentium fugiat eligendi quibusdam
                                    deserunt nulla aperiam debitis quisquam vero
                                    officiis, placeat corrupti hic.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    image="https://robbreport.com/wp-content/uploads/2021/01/challenger01.jpg?w=1000"
                                ></CardMedia>
                                <CardHeader
                                    title="forth"
                                    sx={{ textAlign: "left" }}
                                />
                                <CardHeader
                                    title="sub"
                                    sx={{
                                        textAlign: "left",
                                        fontSize: "0.1rem",
                                    }}
                                />
                                <Divider></Divider>
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Excepturi provident quo
                                    impedit neque, quas repudiandae ea
                                    praesentium fugiat eligendi quibusdam
                                    deserunt nulla aperiam debitis quisquam vero
                                    officiis, placeat corrupti hic.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            {/* <Card>
                <CardActionArea>
                    <CardHeader title="Rolls Royce 2" />
                    <CardContent>
                        <CardMedia
                            component="img"
                            image="/assets/imgs/egor-vikhrev-S0cqn0mZU0E-unsplash.jpg"
                        ></CardMedia>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Excepturi provident quo impedit neque, quas
                            repudiandae ea praesentium fugiat eligendi quibusdam
                            deserunt nulla aperiam debitis quisquam vero
                            officiis, placeat corrupti hic.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card> */}
        </Fragment>
    );
};
export default CardComponent;
