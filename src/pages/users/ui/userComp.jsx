import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
const UserComp = ({ userInfo, onDelete }) => {
    const handleDeleteClick = () => {
        onDelete(userInfo.id);
    };
    return (
        <Card
            sx={{
                maxWidth: 250,
                mb: 1,
                borderRadius: 5,
                display: "flex",
                justifyContent: "space-between",
            }}>
            <CardHeader
                avatar={<Avatar alt={userInfo.alt ? userInfo.alt : "profile picture"} src={userInfo.src} aria-label="recipe" />}
                title={userInfo.userName}
                subheader={userInfo.createdAt}
            />
            <IconButton aria-label="delete" sx={{ mr: 1 }} onClick={handleDeleteClick}>
                <DeleteIcon />
            </IconButton>
        </Card>
    );
};
export default UserComp;
