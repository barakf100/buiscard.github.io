import { toast } from "react-toastify";
const ServerToast = () => {
    return toast.error(`oppsss something wrong happened :(`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
};
export default ServerToast;
