import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
const form = document.querySelector(".form");
function handleSearchSubmit(event) {
    event.preventDefault();
    const inp = form.querySelector("input[name='search-text']");
    const query = inp ? inp.value.trim() : "";
    if (!query) {
        return;
    }
    showLoader();
    clearGallery();
    getImagesByQuery(query)
        .then((data) => {
            hideLoader();
            if (!data || !Array.isArray(data.hits)){
                iziToast.error({
                  title: "Error",
                  message: "Sorry, there are no images matching your search query. Please try again!",
                  position: "topRight",
                  timeout: 5000,
                });
                return; 
            }
            if (data.hits.length === 0) {
                iziToast.error({
                    title: "Error",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight",
                    timeout: 5000,
                });
                return;
            }
            createGallery(data.hits);
        })
        .catch((err) => {
            hideLoader();
            let message = "Something went wrong. Please try again.";
            if (err.message === "MISSING_API_KEY") {
                message = "Pixabay API key is missing. Create .env and add VITE_PIXABAY_API_KEY=your_key (get key: https://pixabay.com/api/docs/)";
            }
            else if (err.response?.status === 429) {
                message = "Too many requests. Please wait and try again later.";
            } else if (err.response?.status === 400) {
                message = "Invalid request (e.g. missing API key). Check .env and VITE_PIXABAY_API_KEY.";
            } else if (err.message) {
                message = err.message;
            }
            iziToast.error({
                title: "Error",
                message: message,
                position: "topRight",
                timeout: 5000,
            });
        });
        }
            
            if (form) {
    form.addEventListener("submit", handleSearchSubmit);
}