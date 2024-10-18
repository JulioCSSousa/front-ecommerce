// Função assíncrona para buscar os produtos
export default async function fetchProducts(params) {
  let link = 'https://back-ecommerce-wl58.onrender.com/api/products'
  if (params) {
    const res = await fetch(`${link}?name=${params}`);
    if (!res.ok) {
      throw new Error(`Erro na requisição: ${res.status}`);
    }
    return res.json()
  }

  const res = await fetch(`${link}`);

  if (!res.ok) {
    throw new Error(`Erro na requisição: ${res.status}`);
  }
  const data = await res.json();

  return data;
}

// Definindo um valor para `params`
const params = 'asta';

// Usando a função assíncrona com `await` dentro de uma função assíncrona
(async () => {
  try {
    const products = await fetchProducts(params);
    console.log(products); // Exibe os produtos no console
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
  }
})();
