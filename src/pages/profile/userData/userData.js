import { jwtDecode } from "jwt-decode";
import { getToken } from "../../../service/storageService";
import axios from "axios";

export const userData = async () => {
    try {
        const token = getToken();
        const dataFromToken = jwtDecode(token);
        const { data } = await axios.get(`/users/${dataFromToken._id}`);
        return data;
    } catch (err) {
        console.log(err.message);
    }
};
