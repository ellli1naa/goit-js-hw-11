// main.js
import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  showError,
  clearGallery,
} from './js/render-functions.js';

const form = document.querySelector('#search-form');
const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('#loader');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.currentTarget.elements.searchQuery.value.trim();

  if (!query) {
    showError('Please enter a search term.');
    return;
  }

  clearGallery(galleryContainer);

  showLoader();

  try {
    const images = await fetchImages(query);
    renderImages(images, galleryContainer);
  } catch (error) {
    showError(
      'Sorry, there are no images matching your search query. Please try again!'
    );
  } finally {
    hideLoader();
  }
});

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}
