import { Box, Typography, Grid } from "@mui/material";
import CardComponent from "../../components/CardComponent";
import { useEffect, useState } from "react";
import getCardFromServer from "../home/axios/getcards";
import { useSelector } from "react-redux";
import { getLikedCard } from "./axios/getLikedCard";
import axios from "axios";
import ServerToast from "../../toast/toastServer";
const FavoriteComp = () => {
    const [card, setCards] = useState([]);
    const [likes, setLikes] = useState(false);
    const [cardLikes, setLikesCard] = useState([]);
    const userData = useSelector((bigPie) => bigPie.authSlice.userData);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setCards((prevData) => {
                    getCardFromServer(userData, prevData, setCards, "/cards");
                    return prevData;
                });
            } catch (err) {
                ServerToast();
            }
            getLikedCard(card, setLikesCard);
        };
        fetchData();
    }, [userData, likes, card]);
    const handleLikedCard = async (_id) => {
        try {
            await axios.patch(`/cards/${_id}`);
            setLikes(!likes);
        } catch (err) {
            ServerToast();
        }
    };
    return (
        <Box sx={{ height: "90vh" }}>
            <Typography variant="h1">Favorite </Typography>
            <Grid container spacing={2} sx={{ mt: 3 }}>
                {cardLikes.map((card) => (
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
                            onLikeCard={handleLikedCard}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
export default FavoriteComp;
