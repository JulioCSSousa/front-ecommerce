// Função assíncrona para buscar os produtos
export default async function fetchProductByID(id) {
    let linkprod = 'https://back-ecommerce-wl58.onrender.com/api/products'
    let linklocal = 'http://localhost:8000/api/products'
    if (id) {
      const res = await fetch(`${linkprod}/${id}`);
      if (!res.ok) {
        throw new Error(`Erro na requisição: ${res.status}`);
      }
      return res.json()
    }
  
    const res = await fetch(`${linkprod}`);
  
    if (!res.ok) {
      throw new Error(`Erro na requisição: ${res.status}`);
    }
    const data = await res.json();
  
    return data;
  }
  
  