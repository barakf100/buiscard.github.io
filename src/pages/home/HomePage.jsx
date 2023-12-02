import { useEffect, useState } from "react";
import { Container, Grid, Typography, Divider, Chip, Button } from "@mui/material";
import CardComponent from "../../components/CardComponent";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { useSelector } from "react-redux";
import useQueryParams from "../../hooks/useQueryParams";
import getCardFromServer from "./axios/getcards";
import axios from "axios";
import ToastGuard from "../../Guard/ui/toast";
import team from "../../../public/assets/imgs/team.jpg";
const HomePage = () => {
    const [dataFromServer, setDataFromServer] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [endpoint, setEndpoint] = useState("/cards");
    const [likes, setLikes] = useState(false);
    const navigate = useNavigate();
    const userData = useSelector((bigPie) => bigPie.authSlice.userData);
    const query = useQueryParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setDataFromServer((prevData) => {
                    if (userData) {
                        console.log(userData);
                        getCardFromServer(userData, prevData, setDataFromServer, endpoint);
                    } else {
                        getCardFromServer(userData, prevData, setDataFromServer, endpoint);
                    }
                    return prevData;
                });
            } catch (err) {
                console.log(err, "err");
            }
        };
        fetchData();
    }, [userData, likes, endpoint]);

    useEffect(() => {
        const filter = query.filter ? query.filter : "";
        const filteredData = dataFromServer.filter((card) => card.title.startsWith(filter));
        setFilteredData(filteredData);
        console.log(filteredData);
    }, [query.filter, dataFromServer]);

    const handleDeleteCard = async (_id) => {
        if (userData) setDataFromServer((dataFromServerCopy) => dataFromServerCopy.filter((card) => card._id !== _id));
        else ToastGuard("member");
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
            ToastGuard("member");
        }
    };
    const handlePhoneCard = (phone) => {
        console.log(phone);
        window.open(` tel:+972${phone}`, "_self");
    };
    const handleWhatsappCard = (phone) => {
        let newPhone;
        if (phone[3] === "-") {
            newPhone = phone.slice(0, 3) + phone.slice(4, phone.length);
        } else newPhone = phone;
        window.open(` https://wa.me/+972${newPhone}`);
    };
    const handleAllCards = () => {
        setEndpoint("/cards");
    };
    const handleMyCards = () => {
        setEndpoint("/cards/my-cards");
    };
    return (
        <Container sx={{ mb: 8, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
            <Container sx={{ mb: 8 }}>
                <Typography variant="h1" sx={{ textAlign: "center", my: 3 }}>
                    BIZ Card
                </Typography>
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        height: "55vh",
                        width: "80vw",
                        justifyContent: "space-evenly",
                    }}>
                    <Typography variant="body1" sx={{ textAlign: "left", mx: 4, height: "100%", width: "30%" }}>
                        Welcome to BIZ. Cards, the ultimate hub for businesses to shine and thrive. We've created a dynamic platform where
                        entrepreneurs and companies can showcase their products and services effortlessly. At BIZ. Cards, we believe in the
                        power of connections – connecting businesses with their audience, fostering innovation, and creating a community
                        where opportunities flourish. Whether you're a local startup or an established brand, join us in this exciting
                        journey to amplify your presence, engage with your audience, and unlock new possibilities. Your success story begins
                        here.
                    </Typography>
                    <img src={team} alt="team work" width="45%" height="100%" />
                </Container>
            </Container>
            <Grid container spacing={2} sx={{ mt: 8 }}>
                <Container>
                    <Button onClick={handleAllCards} color="inherit">
                        all cards
                    </Button>
                    <Button onClick={handleMyCards} color="inherit" disabled={!userData ? true : false}>
                        my cards
                    </Button>
                </Container>
                {filteredData.map((card) => (
                    <Grid item key={card._id} xs={12} sm={6} md={4} lg={3} sx={{ mb: 1 }}>
                        <CardComponent
                            _id={card._id}
                            title={card.title}
                            subTitle={card.subtitle}
                            phone={card.phone}
                            createdAt={card.createdAt}
                            description={card.description}
                            web={card.web}
                            address={`${card.address.city}, ${card.address.street} ${card.address.houseNumber}`}
                            img={card.image.url}
                            alt={card.image.alt}
                            like={card.likes}
                            cardNumber={card.cardNumber}
                            onDeleteCard={handleDeleteCard}
                            onEditCard={handleEditCard}
                            onLikeCard={handleLikedCard}
                            onPhoneCard={handlePhoneCard}
                            onWhatsappCard={handleWhatsappCard}
                            addressForMap={`${card.address.country},${card.address.city}`}
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
