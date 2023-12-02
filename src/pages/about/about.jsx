import { Fragment } from "react";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./ui/about.css";
const AboutComp = () => {
    return (
        <Box sx={{ textAlign: "left", mb: 8 }}>
            <Typography variant="h1" textAlign="center">
                About Page
            </Typography>
            <Typography variant="h5" textAlign="center" sx={{ mb: 8 }}>
                Welcome to BIZ.Card, the platform where businesses shine and opportunities thrive!
            </Typography>
            <Typography variant="h4" className="head">
                Our Mission
            </Typography>
            <Typography variant="body2" className="body">
                At BIZ.Card, we believe in the power of connecting businesses with their audience. Our mission is to provide a dynamic and
                user-friendly space for entrepreneurs and companies to showcase their products and services
            </Typography>
            <Typography variant="h4" className="head">
                What Sets Us Apart
            </Typography>
            <Typography variant="body2" className="body">
                We are more than just a platform – we are a community that empowers businesses of all sizes. Whether you're a local startup,
                a growing enterprise, or an established brand, BIZ.Card is your go-to destination to reach a wider audience and tell your
                unique story.
            </Typography>
            <Typography variant="h4" className="head">
                How It Works
            </Typography>
            <Typography variant="body1" className="body">
                Create Your Profile: Sign up and create a profile for your business,&nbsp;
                <Link className="link" to="/register">
                    Here
                </Link>
                <br />
                remember BIZ.Card is more than just a directory – it's a thriving community where businesses connect, collaborate, and grow.
                Join us on this exciting journey, and let's build success together. Get Started Today
                <br />
                <br />
                if you already have a profile you can&nbsp;
                <Link className="link" to="/login">
                    Log in
                </Link>
                <br />
                <br />
                next you can create your business card,&nbsp;
                <Link className="link" to="/createcard">
                    Here
                </Link>
            </Typography>
            <br />
            <br />
            <br />
            <br />
            <Typography variant="body1">
                Thank you for choosing BIZ.Card as your platform for business success. We look forward to seeing your business thrive!
                <br />
                Copyright © barak froimovich. All rights reserved.
            </Typography>
        </Box>
    );
};
export default AboutComp;
