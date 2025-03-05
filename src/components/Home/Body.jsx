
import ProductCard from '../utils/ProductCard';
import './Body.css';
import '../utils/ProductCard'
import SearchBar from '../utils/SearchBar'
import { useContext, useEffect, useState } from 'react';
import Load from '../utils/Load'
import fetchProducts from '../../api/fetchProducts'
import { AppContext } from '../../context/appContext';


export default function Body() {

  const [products, setProducts] = useState([]);
  const { valueInput } = useContext(AppContext);

  const [loading, setLoad] = useState(true)

  useEffect(() => {
    fetchProducts(valueInput).then((response) => {
        if (Array.isArray(response)) {
            setProducts(response);
        } else {
            console.error("Erro: resposta inválida de fetchProducts");
            setProducts([]);
        }
        setLoad(false);
    }).catch((error) => {
        console.error("Erro na requisição:", error);
        setLoad(false);
    });
}, [valueInput]);


  return (
    <>
      <SearchBar />
      <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
        <div className="bg-dark p-4">
          <h5 className="text-body-emphasis h4">Collapsed content</h5>
          <span className="text-body-secondary">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <div className="banner-front">
        <img src="" alt='' className="front-img" />
      </div>
      <div className="main-center-text" style={{ height: '20vh', paddingTop: '20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", margin: "2px"}}>
          Veja produtos selecionados especialmente para você
        </h1>
        <p style={{margin: "2px"}}>Devido à hospedagem gratuita, os produtos podem demorar bastante tempo para o completo carregamento na primeira vez</p>
      </div>
      <div className='' style={{ display: 'flex', margin: '20px' }}>
      </div>
      <div className="body-container">
            {loading ? <Load /> : products.map((product) =>
                <ProductCard
                    key={product.id}
                    data={{ name: product.name, 
                    imageUrl: product.imageUrl, 
                    price: product.price, 
                    description: 
                    product.description, 
                    linkTo: `/products/${product.id}` }}
                    
                />
            )}
        </div>
    </>
  )
}