import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = input.value.trim();
    if (query === '') {
        iziToast.error({
            title: "Error",
            message: "Please enter a search query!",
            position: "topRight",
        });
        input.focus();
        return; 
    }
    clearGallery();
    showLoader();

    try {
      const data = await getImagesByQuery(query);
      hideLoader();
      if (data.hits.length === 0) {
        iziToast.info({
          title: "",
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
        });
        return;
      }
      createGallery(data.hits);
    } catch(error) {
      hideLoader();
        iziToast.error({
          title: "Error",
          message: "Something went wrong. Please try again later.",
            position: "topRight",
        });
        console.error(error);
    }
});