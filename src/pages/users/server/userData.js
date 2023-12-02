import axios from "axios";

export const getUserData = async () => {
    try {
        const { data } = await axios.get(`/users`);
        return data;
    } catch (e) {
        console.log(e);
    }
};
export const extractData = (users) => {
    const userArr = [];
    for (const iterator of users) {
        const formateData = date(iterator.createdAt);
        userArr.push({
            username: `${cutLongNamesForDisplay(iterator.name.first, 8)}-
            ${cutLongNamesForDisplay(iterator.name.last, 5)}`,
            createDate: formateData,
            admin: iterator.isAdmin,
            alt: iterator.image.alt,
            src: iterator.image.url,
            id: iterator._id,
        });
    }
    return userArr;
};
export const deleteUser = async (userId) => {
    try {
        const { data: delUser } = await axios.delete(`/users/${userId}`);
        console.log(delUser);
    } catch (err) {
        console.log(err);
    }
};
export const date = (inputDate) => {
    const date = new Date(inputDate);

    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
};
const cutLongNamesForDisplay = (str, index) => {
    return str.slice(0, index);
};
