import { jwtDecode } from "jwt-decode";
import { getToken } from "../../../service/storageService";
import axios from "axios";

export const userData = async (setState) => {
    const token = getToken();
    const dataFromToken = jwtDecode(token);
    try {
        const { data } = await axios.get(`/users/${dataFromToken._id}`);
        return setState(data);
    } catch (err) {
        console.log(err.message);
    }
};
