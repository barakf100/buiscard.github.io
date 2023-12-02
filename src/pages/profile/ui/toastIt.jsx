import { toast } from "react-toastify";
const toArr = (data) => {
    const dataArr = [Object.entries(data)];
    console.log(dataArr);
    return dataArr;
};
export const ErrorToast = (data) => {
    data = toArr(data);
    for (let i = 0; i < data.length; i++) {
        toast.warn(`${data[i][1]}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
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
