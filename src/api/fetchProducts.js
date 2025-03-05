import axios from 'axios';

export default async function fetchProducts(params) {
  let linkprod = 'https://back-ecommerce-wl58.onrender.com/api/products';

  try {
    const url = params ? `${linkprod}?name=${params}` : linkprod;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Erro na requisição: ${error.response?.status || error.message}`);
  }
}
