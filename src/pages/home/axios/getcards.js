import axios from "axios";
import homePageNormalization from "../homePageNormalization";

const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
};
const getCardFromServer = (userData, initialDataFromServer, setDataFromServer, req) => {
    axios
        .get(req)
        .then(({ data }) => {
            if (userData) data = homePageNormalization(data, userData._id);
            initialDataFromServer = data;
            if (req === "/cards") {
                const num = getRandomArbitrary(3, data.length - 3);
                data = data.slice(num, num + 3);
            }
            setDataFromServer(data);
        })

        .catch((err) => {
            console.log("err", err);
        });
};
export default getCardFromServer;
