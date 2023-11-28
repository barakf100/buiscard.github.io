export const getLikedCard = (data, setLike) => {
    const likes = [];
    data.forEach((element) => {
        if (element.likes) {
            likes.push(element);
        }
    });
    setLike(likes);
    return likes;
};
