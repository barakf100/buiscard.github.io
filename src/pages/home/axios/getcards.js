import axios from "axios";
import homePageNormalization from "../homePageNormalization";
import ServerToast from "../../../toast/toastServer";

const getCardFromServer = (userData, initialDataFromServer, setDataFromServer, req) => {
    axios
        .get(req)
        .then(({ data }) => {
            if (userData) {
                data = homePageNormalization(data, userData._id);
            } else homePageNormalization(data, "");
            setDataFromServer(data);
        })

        .catch((err) => {
            ServerToast();
        });
};
export default getCardFromServer;
