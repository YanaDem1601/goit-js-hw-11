import axios from "axios";

const API_KEY = '55821000-c477eb790cad5f38062000930';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;           
  } catch (error) {
    console.error('Pixabay API error:', error);
    throw error;
  }
}
