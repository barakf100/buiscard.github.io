import { Dialog, DialogTitle, Typography, DialogContent, Box } from "@mui/material";
import { useState, Fragment } from "react";
import ExpandIcon from "@mui/icons-material/Expand";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import { date } from "../pages/users/server/userData.js";
import MapComponent from "./mapComp.jsx";
const PopUp = ({ _id, title, subTitle, phone, description, createdAt, web, address, addressForMap }) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Fragment>
            <AspectRatioIcon onClick={handleClickOpen} />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ fontSize: "2.5rem" }}>{title}</DialogTitle>
                <DialogContent>
                    <Typography variant="h6">{subTitle ? `subTitle :${subTitle}` : ""}</Typography>
                    <Typography sx={{ fontWeight: "bold" }}>{phone ? `phone : ${phone}` : ""}</Typography>
                    <Typography sx={{ fontWeight: "bold" }}>{web ? `web:${web}` : ""}</Typography>
                    <Typography sx={{ fontWeight: "bold" }}>{createdAt ? `create date:${date(createdAt)}` : ""}</Typography>
                    <Typography sx={{ fontWeight: "bold" }}>{description ? `description:${description}` : ""}</Typography>
                    <MapComponent address={addressForMap} />
                </DialogContent>
            </Dialog>
        </Fragment>
    );
};
export default PopUp;
