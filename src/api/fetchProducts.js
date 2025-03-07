import axios from 'axios';

export default async function fetchProducts(params) {
  const linkprod = 'https://back-ecommerce-wl58.onrender.com/api/products?';

  try {
    const url = params ? `${linkprod}txt=${params}` : linkprod;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Erro na requisição: ${error.response?.status || error.message}`);
  }
}
