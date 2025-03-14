import axios from 'axios';

export default async function fetchProductById(id) {
    const linkprod = 'https://back-ecommerce-wl58.onrender.com/api/products';


    try {
        const res = await axios.get(`${linkprod}${id}`);
        return res.data;
    } catch (error) {
        throw new Error(`Erro na requisição: ${error.response?.status || error.message}`);
    }
}
