import { toast } from "react-toastify";

export const ErrorToast = (data) => {
    // data = dataEdit(data);
    for (const iterator in data) {
        toast.warn(data[iterator], {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
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
