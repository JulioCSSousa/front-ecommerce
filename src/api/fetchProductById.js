import axios from 'axios';

export default async function fetchProductById(id) {
    const linkprod = 'https://back-ecommerce-wl58.onrender.com/api/products';
    const linklocal = 'http://localhost:5000/api/products/id?id=';

    try {
        const res = await axios.get(`${linklocal}${id}`);
        console.log(res.data)
        return res.data;
    } catch (error) {
        throw new Error(`Erro na requisição: ${error.response?.status || error.message}`);
    }
}
