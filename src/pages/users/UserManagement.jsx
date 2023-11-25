import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import nextKey from "generate-my-key";
import UserComp from "./ui/userComp";
import { deleteUser, extractData, getUserData } from "./server/userData";

// let arr = [];
const UserManagement = () => {
    const [userData, setUserData] = useState("");
    const [arr, setArr] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            getUserData().then((userData) => setUserData(userData));
        };
        fetchData();
    }, []);
    useEffect(() => {
        if (!userData) {
            return;
        }
        setArr(extractData(userData));
    }, [userData]);
    const handleDelete = async (id, index) => {
        await deleteUser(id);
        setArr((prevArr) => {
            const newArr = [...prevArr];
            newArr.splice(index, 1);
            return newArr;
        });
        console.log(id);
    };
    return (
        <Box sx={{ flexGrow: 1, maxWidth: 1000 }}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                User management system
            </Typography>
            <Grid container spacing={2}>
                {arr.map((user, index) => (
                    <Grid item xs={12} md={3}>
                        <UserComp
                            key={nextKey()}
                            userInfo={{
                                userName: user.username,
                                createdAt: user.createDate,
                                id: user.id,
                                admin: user.admin,
                                alt: user.alt,
                                src: user.src,
                                keyboard: "test",
                            }}
                            onDelete={() => handleDelete(user.id, index)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
export default UserManagement;
