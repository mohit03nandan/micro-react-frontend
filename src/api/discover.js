import axios from "axios";

export async function getCategories() {
    const reqUrl = `http://localhost:3000/admin/get-all-category`;
    const result = await axios.get(reqUrl);
    console.log(result)
    if (result.data) {
        return result.data;
    }
}


export async function setFavoriteImage(imageId) {
    const reqUrl = `http://localhost:3000/discover/like/${imageId}`;
    const result = await axios.get(reqUrl);
    if (result.data) {
        console.log(result.data)
        return result.data;
    }
}

export async function getGallery(
    categoryName,
    sortByLike,
    sortByDate,
    shuffle
) {
    const reqUrl = `http://localhost:3000/discover/${categoryName}?sortByLike=${sortByLike}&sortByDate=${sortByDate}&shuffle=${shuffle}`;
    const result = await axios.get(reqUrl);
    if (result.data) {
        return result.data;
    }
}