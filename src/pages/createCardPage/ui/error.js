import { toast } from "react-toastify";
const dataEdit = (data) => {
    return data.slice(11);
};
export const ErrorToast = (data) => {
    data = dataEdit(data);
    toast.warn(`${data}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
};
export const successToast = () => {
    toast.success(`successfully created !`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
};
