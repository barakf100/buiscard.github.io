import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Autocomplete, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import nextKey from "generate-my-key";
import UserComp from "./ui/userComp";
import { deleteUser, extractData, getUserData } from "./server/userData";

const UserManagement = () => {
    const [userData, setUserData] = useState("");
    const [arr, setArr] = useState([]);
    const [selectedFilter, setFilter] = useState();
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
    };
    const filterBy = ["member", "admin", "business"];
    const handleFilterChange = (e, value) => {
        switch (value) {
            case "admin":
                setArr(extractData(userData.filter((user) => user.isAdmin)));
                break;
            case "business":
                setArr(extractData(userData.filter((user) => !user.isAdmin && user.isBusiness)));
                break;
            case "member":
                setArr(extractData(userData.filter((user) => !user.isAdmin && !user.isBusiness)));
                break;
            default:
                setArr(extractData(userData));
                return;
        }
    };
    return (
        <Box sx={{ flexGrow: 1, maxWidth: 1200, mb: 8 }}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                User management system
            </Typography>
            <Autocomplete
                id="filter-demo"
                options={filterBy}
                getOptionLabel={(option) => option}
                value={selectedFilter}
                onChange={handleFilterChange}
                sx={{ width: 200, mb: 2 }}
                renderInput={(params) => <TextField {...params} label="Custom filter" />}
            />
            <Grid container spacing={2}>
                {arr.map((user, index) => (
                    <Grid item xs={6} sm={4} md={3}>
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
