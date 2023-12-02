import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, Divider, IconButton, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PropTypes from "prop-types";
import PopUp from "./popUpComp";

const CardComponent = ({
    _id,
    title,
    subTitle,
    phone,
    description,
    createdAt,
    web,
    address,
    img,
    alt,
    like,
    cardNumber,
    onDeleteCard,
    onEditCard,
    onLikeCard,
    onPhoneCard,
    onWhatsappCard,
    addressForMap,
}) => {
    const handlePhoneClick = () => {
        onPhoneCard(phone);
    };
    const handleWhatsappClick = () => {
        onWhatsappCard(phone);
    };
    const handleDeleteCardClick = () => {
        onDeleteCard(_id);
    };
    const handleClickEditCard = () => {
        onEditCard(_id);
    };
    const handleLikedCard = () => {
        onLikeCard(_id);
    };
    return (
        <Card sx={{ height: 425 }}>
            <CardActionArea>
                <CardMedia component="img" image={img} alt={alt} sx={{ height: 185 }} />
            </CardActionArea>
            <CardContent sx={{}}>
                <CardHeader title={title.slice(0, 15)} subheader={subTitle} sx={{ p: 0, mb: 1 }} />
                <Divider />
                <Box sx={{ mt: 1 }}>
                    <Typography variant="body2">
                        <Typography fontWeight="700" variant="subtitle1" component="span">
                            Phone:{" "}
                        </Typography>
                        {phone}
                    </Typography>
                    <Typography variant="body2">
                        <Typography fontWeight="700" variant="subtitle1" component="span">
                            Address:{" "}
                        </Typography>
                        {address.slice(0, 25)}
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" marginTop="45px">
                    <Box display="flex" alignItems="baseline">
                        <IconButton onClick={handlePhoneClick}>
                            <PhoneIcon />
                        </IconButton>
                        <IconButton onClick={handleWhatsappClick}>
                            <WhatsAppIcon />
                        </IconButton>
                        <IconButton onClick={handleClickEditCard}>
                            <CreateIcon />
                        </IconButton>
                        <IconButton>
                            <PopUp
                                {...{
                                    _id,
                                    title,
                                    subTitle,
                                    phone,
                                    description,
                                    createdAt,
                                    web,
                                    address,
                                    img,
                                    alt,
                                    like,
                                    cardNumber,
                                    onDeleteCard,
                                    onEditCard,
                                    onLikeCard,
                                    onPhoneCard,
                                    onWhatsappCard,
                                    addressForMap,
                                }}
                            />
                        </IconButton>
                    </Box>
                    <Box display="flex" alignItems="baseline">
                        <IconButton onClick={handleDeleteCardClick}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton>
                            <FavoriteIcon onClick={handleLikedCard} color={like ? "error" : "inherit"} />
                        </IconButton>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

CardComponent.propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    img: PropTypes.string,
    alt: PropTypes.string,
    like: PropTypes.bool,
    cardNumber: PropTypes.number,
    onDeleteCard: PropTypes.func.isRequired,
    onEditCard: PropTypes.func.isRequired,
};
CardComponent.defaultProps = {
    img: "https://www.livemint.com/lm-img/img/2023/08/14/1600x900/garena_free_fire_max_1688877791610_1691982307589.jpg",
    alt: "running",
};

export default CardComponent;
