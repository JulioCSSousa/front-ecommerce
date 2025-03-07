import axios from 'axios';

export async function fetchProductsByCategory(txt) {
    const linkprod = 'https://back-ecommerce-wl58.onrender.com/api/products';

    
    try {
        const res = await axios.get(`${linkprod}?txt=${txt}`);
        console.log(res.data)
        return res.data;
    } catch (error) {
        throw new Error(`Erro na requisição: ${error.response?.status || error.message}`);
    }
}
