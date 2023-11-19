import axios from "axios";
import { getToken } from "../../service/storageService";
import { jwtDecode } from "jwt-decode";

export const normalizeData = (dataToNormal) => {
    return {
        name: {
            first: dataToNormal.first,
            middle: dataToNormal.middle ? dataToNormal.middle : "",
            last: dataToNormal.last,
        },
        phone: dataToNormal.phone,
        image: {
            url: dataToNormal.url,
            alt: dataToNormal.alt ? dataToNormal.alt : "",
        },
        address: {
            state: dataToNormal.state ? dataToNormal.state : "",
            country: dataToNormal.country,
            city: dataToNormal.city,
            street: dataToNormal.street,
            houseNumber: dataToNormal.houseNumber,
            zip: +dataToNormal.zip,
        },
    };
};
export const updateServer = async (dataToServer) => {
    dataToServer = normalizeData(dataToServer);
    console.log(dataToServer);
    const token = getToken();
    const dataFromToken = jwtDecode(token);
    try {
        await axios.put(`/users/${dataFromToken._id}`, dataToServer);
    } catch (err) {
        console.log(err);
    }
};
