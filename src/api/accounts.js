const URL = 'https://back-ecommerce-wl58.onrender.com/api/accounts/'

export async function login(params) {
  return fetch(`${URL}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    return response.json();
  });
}

export async function register(params) {
  return fetch(`${URL}register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
  })
}
