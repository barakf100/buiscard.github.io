import { toast } from "react-toastify";
const ToastGuard = (message) => {
    return toast.error(`you must be an ${message} to enter this page`, {
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
export default ToastGuard;
