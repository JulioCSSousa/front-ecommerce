import axios from 'axios';

export default async function fetchProductById(id) {
    const linkprod = 'https://back-ecommerce-wl58.onrender.com/api/products/';
    const linklocal = 'http://localhost:5000/api/products/';

    const url = linkprod;
    
    try {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    } catch (error) {
        throw new Error(`Erro na requisição: ${error.response?.status || error.message}`);
    }
}
