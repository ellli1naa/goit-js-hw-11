const API_KEY = '46858923-7c3fdcfc6a46f2062867c0871';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.hits.length === 0) {
      throw new Error('No images found');
    }
    return data.hits;
  } catch (error) {
    throw error;
  }
}
