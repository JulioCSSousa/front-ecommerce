// Função assíncrona para buscar os produtos
export default async function seedProducts(data) {
    let linkprod = 'https://back-ecommerce-wl58.onrender.com:5000/api/products'
    let linklocal = 'http://localhost:5000/api/products'
    
    return await fetch(linkprod,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error na requisição');
            
        }
    })
  }
  
  
  const newProduct0 = {
    "name": "Kit Presenteável Alecrim Vela Perfumada 180g + Difusor de Varetas 250mL",
    "description": "ou 5x com juros Cartão de Crédito - PagBank",
    "image": "https://acdn.mitiendanube.com/stores/002/088/667/products/kit_dia_a_dia_vela_perfumada_180g_-_dif__250ml__-_alecrim_frente1-487a9b4a931e0bc32616495078143847-640-0.webp",
    "price": 239
  }

  const newProduct1 = {
    "name": "Kit Bebê Difusor + Perfume para Ambientes",
    "description": "ou 5x com juros Cartão de Crédito - PagBank",
    "image": "https://acdn.mitiendanube.com/stores/002/088/667/products/perfume_para_ambientes_acqua_aroma_250ml_bebe_principal1-e7f31060286ea8747916646220264051-1024-1024-029cbe39453f1c258916800270489689-640-0.webp",
    "price": 199
  }
  const newProduct2 = {
    "name": "Kit Presenteável Bambu Chinês Vela Perfumada 180g + Difusor de Varetas 250mL",
    "description": "ou 5x com juros Cartão de Crédito - PagBank",
    "image": "https://acdn.mitiendanube.com/stores/002/088/667/products/kit_dia_a_dia_vela_perfumada_180g_-_dif__250ml__-_bambu_frente1-0e734c4725690425bd16495077303663-640-0.webp",
    "price": 177
  }
  const newProduct3 = {
    "name": "Kit Bebê Difusor + Perfume para Ambientes",
    "description": "ou 5x com juros Cartão de Crédito - PagBank",
    "image": "https://acdn.mitiendanube.com/stores/002/088/667/products/perfume_para_ambientes_acqua_aroma_250ml_bebe_principal1-e7f31060286ea8747916646220264051-1024-1024-029cbe39453f1c258916800270489689-640-0.webp",
    "price": 199
  }
  const newProduct4 = {
    "name": "Kit Presenteável Lavanda Vela Perfumada 180g + Difusor de Varetas 250mL",
    "description": "ou 5x com juros Cartão de Crédito - PagBank",
    "image": "https://acdn.mitiendanube.com/stores/002/088/667/products/9f35082196d680175d0375157548d3f3awsaccesskeyidakiatclmsgfx4g7qtfvdexpires1650977576signaturexbkwxebsho85tjnthvrccg9i5jo3d-55f1c64a04fa8becb816483855784872-1024-1024.webp",
    "price": 199
  }
  const newProduct5 = {
    "name": "Kit Presenteável Lavanda Vela Perfumada 180g + Difusor de Varetas 250mL",
    "description": "ou 5x com juros Cartão de Crédito - PagBank",
    "image": "https://acdn.mitiendanube.com/stores/002/088/667/products/9f35082196d680175d0375157548d3f3awsaccesskeyidakiatclmsgfx4g7qtfvdexpires1650977576signaturexbkwxebsho85tjnthvrccg9i5jo3d-55f1c64a04fa8becb816483855784872-1024-1024.webp",
    "price": 199
  }
  const newProduct6 = {
    "name": "Kit Presenteável Lavanda Vela Perfumada 180g + Difusor de Varetas 250mL",
    "description": "ou 5x com juros Cartão de Crédito - PagBank",
    "image": "https://acdn.mitiendanube.com/stores/002/088/667/products/9f35082196d680175d0375157548d3f3awsaccesskeyidakiatclmsgfx4g7qtfvdexpires1650977576signaturexbkwxebsho85tjnthvrccg9i5jo3d-55f1c64a04fa8becb816483855784872-1024-1024.webp",
    "price": 199
  }
  const newProduct7 = {
    "name": "Kit Presenteável Lavanda Vela Perfumada 180g + Difusor de Varetas 250mL",
    "description": "ou 5x com juros Cartão de Crédito - PagBank",
    "image": "https://acdn.mitiendanube.com/stores/002/088/667/products/9f35082196d680175d0375157548d3f3awsaccesskeyidakiatclmsgfx4g7qtfvdexpires1650977576signaturexbkwxebsho85tjnthvrccg9i5jo3d-55f1c64a04fa8becb816483855784872-1024-1024.webp",
    "price": 199
  }
  const newProduct8 = {
    "name": "Kit Presenteável Lavanda Vela Perfumada 180g + Difusor de Varetas 250mL",
    "description": "ou 5x com juros Cartão de Crédito - PagBank",
    "image": "https://acdn.mitiendanube.com/stores/002/088/667/products/9f35082196d680175d0375157548d3f3awsaccesskeyidakiatclmsgfx4g7qtfvdexpires1650977576signaturexbkwxebsho85tjnthvrccg9i5jo3d-55f1c64a04fa8becb816483855784872-1024-1024.webp",
    "price": 199
  }
  const newProduct9 = {
    "name": "Kit Presenteável Lavanda Vela Perfumada 180g + Difusor de Varetas 250mL",
    "description": "ou 5x com juros Cartão de Crédito - PagBank",
    "image": "https://acdn.mitiendanube.com/stores/002/088/667/products/9f35082196d680175d0375157548d3f3awsaccesskeyidakiatclmsgfx4g7qtfvdexpires1650977576signaturexbkwxebsho85tjnthvrccg9i5jo3d-55f1c64a04fa8becb816483855784872-1024-1024.webp",
    "price": 199
  }
  const newProduct10 = {
    "name": "Kit Presenteável Lavanda Vela Perfumada 180g + Difusor de Varetas 250mL",
    "description": "ou 5x com juros Cartão de Crédito - PagBank",
    "image": "https://acdn.mitiendanube.com/stores/002/088/667/products/9f35082196d680175d0375157548d3f3awsaccesskeyidakiatclmsgfx4g7qtfvdexpires1650977576signaturexbkwxebsho85tjnthvrccg9i5jo3d-55f1c64a04fa8becb816483855784872-1024-1024.webp",
    "price": 199
  }


  const prodArray = [newProduct0, newProduct1, newProduct2, newProduct3, newProduct4, newProduct5, newProduct6, newProduct7, newProduct8, newProduct9, newProduct10]
for(let i=0; i < prodArray.length; i++){
    let item = prodArray[i]
  seedProducts(item)
  .then(data => console.log('Produto criado:', data))
  .catch(error => console.error(error));
}