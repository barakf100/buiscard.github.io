import { useEffect, useState } from "react";
import { Container, Grid, Typography, Divider, Chip } from "@mui/material";
import CardComponent from "../../components/CardComponent";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { useSelector } from "react-redux";
import useQueryParams from "../../hooks/useQueryParams";
import getCardFromServer from "./axios/getcards";
import axios from "axios";

const HomePage = () => {
    const [dataFromServer, setDataFromServer] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [likes, setLikes] = useState(false);
    const navigate = useNavigate();
    const userData = useSelector((bigPie) => bigPie.authSlice.userData);
    const query = useQueryParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setDataFromServer((prevData) => {
                    let endpoint = localStorage.getItem("token") ? "/cards/my-cards" : "/cards";
                    if (userData) {
                        console.log(userData);
                        getCardFromServer(userData, prevData, setDataFromServer, endpoint);
                    } else {
                        console.log("logout");
                        getCardFromServer(userData, prevData, setDataFromServer, endpoint);
                    }
                    return prevData;
                });
            } catch (err) {
                console.log(err, "err");
            }
        };
        fetchData();
    }, [userData, likes]);

    useEffect(() => {
        const filter = query.filter ? query.filter : "";
        const filteredData = dataFromServer.filter((card) => card.title.startsWith(filter));
        setFilteredData(filteredData);
    }, [query.filter, dataFromServer]);

    const handleDeleteCard = async (_id) => {
        setDataFromServer((dataFromServerCopy) => dataFromServerCopy.filter((card) => card._id !== _id));
        try {
            await axios.delete(`/cards/${_id}`);
        } catch (err) {
            console.log(err);
        }
    };
    const handleEditCard = (_id) => {
        navigate(`${ROUTES.EDITCARD}/${_id}`);
    };
    const handleLikedCard = async (_id) => {
        try {
            await axios.patch(`/cards/${_id}`);
            setLikes(!likes);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <Container sx={{ mb: 8 }}>
            <Container sx={{ height: "40vh", mb: 8 }}>
                <Typography variant="h1" sx={{ textAlign: "center", my: 3 }}>
                    BIZ Card
                </Typography>
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        height: "30vh",
                        width: "80vw",
                        justifyContent: "space-evenly",
                    }}>
                    <Typography variant="body1" sx={{ textAlign: "justify", mx: 4, width: "40%" }}>
                        Welcome to BIZ. Cards, the ultimate hub for businesses to shine and thrive. We've created a dynamic platform where
                        entrepreneurs and companies can showcase their products and services effortlessly. At BIZ. Cards, we believe in the
                        power of connections – connecting businesses with their audience, fostering innovation, and creating a community
                        where opportunities flourish. Whether you're a local startup or an established brand, join us in this exciting
                        journey to amplify your presence, engage with your audience, and unlock new possibilities. Your success story begins
                        here.
                    </Typography>
                    <img src="/assets/imgs/team.jpg" alt="team work" width="" height="100%" />
                </Container>
            </Container>
            <Grid container spacing={2} sx={{ mt: 3 }}>
                {filteredData.map((card) => (
                    <Grid item key={card._id} xs={12} sm={6} md={4} lg={3} sx={{ mb: 1 }}>
                        <CardComponent
                            _id={card._id}
                            title={card.title}
                            subTitle={card.subtitle}
                            phone={card.phone}
                            address={`${card.address.city}, ${card.address.street} ${card.address.houseNumber}`}
                            img={card.image.url}
                            alt={card.image.alt}
                            like={card.likes}
                            cardNumber={card.cardNumber}
                            onDeleteCard={handleDeleteCard}
                            onEditCard={handleEditCard}
                            onLikeCard={handleLikedCard}
                        />
                    </Grid>
                ))}
            </Grid>
            <Divider>
                <Chip label="Cards" />
            </Divider>
        </Container>
    );
};

export default HomePage;
