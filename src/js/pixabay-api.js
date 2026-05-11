import axios from "axios";

const PIX_URL = "https://pixabay.com/api/";
function getApiKey() {
    return import.meta.env.VITE_PIXABAY_KEY;
}
export function getImagesByQuery(query) {
    const key = getApiKey();
    if (!key || !String(key).trim()) {
        return Promise.reject(new Error("API key is not defined"));
    }
    const params = {
        key: key.trim(),
        q: String(query).trim(),
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    };
    return axios.get(PIX_URL, { params }).then((response) => response.data);
}
