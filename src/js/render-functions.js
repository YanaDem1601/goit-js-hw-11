import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');
const loaderWrap = document.querySelector('.loader-wrap');
let lightboxInst = null;
function createCardMarkup(img) {
    const {
        webformatURL,
        largeImageURL,
        tags = '',
        likes = 0,
        views = 0,
        comments = 0,
        downloads = 0,
    } = img;
    const alt = String(tags).slice(0, 200);
    return ` 
    <li class="gallery__item">
        <a class="gallery__link" href="${largeImageURL}" title="${alt}">
          <img
            class="gallery__image"
            src="${webformatURL}"
            alt="${alt}" 
            loading="lazy" 
            width="640" 
            height="360" 
            />
          <div class="gallery__info">
            <span class="gallery__info-item">${likes}</span>
            <span class="gallery__info-item">${views}</span>
            <span class="gallery__info-item">${comments}</span>
            <span class="gallery__info-item">${downloads}</span>
          </div>
        </a>
    </li>`;
}
export function createGallery(images) {
    if (!gallery) return;
    if (!Array.isArray(images) || images.length === 0) {
        gallery.innerHTML = '';
        lightboxInst?.refresh();
        return;
    }
    const markup = images.map(createCardMarkup).join("");
    gallery.innerHTML = markup;
    if (!lightboxInst) {
        lightboxInst = new SimpleLightbox('.gallery a', {
            captionsData: 'title',
            captionDelay: 250,
        });
    } else {
        lightboxInst.refresh();
    }
}
export function clearGallery() {
    if (gallery) gallery.innerHTML = '';
}
export function showLoader() {
    if (loaderWrap) loaderWrap.classList.remove('is-hidden');
}
export function hideLoader() {
    if (loaderWrap) loaderWrap.classList.add('is-hidden');
}