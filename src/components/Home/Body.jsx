
import ProductCard from '../utils/Card';
import './Body.css';
import '../utils/Card'
import SearchBar from '../utils/SearchBar'
import { useContext, useEffect, useState } from 'react';
import Load from '../utils/Load'
import fetchProducts from '../../api/fetchProducts'
import { AppContext } from '../../context/appContext';


export default function Body() {

  const [products, setProducts] = useState([])
  const { valueInput } = useContext(AppContext);

  const [loading, setLoad] = useState(true)

  useEffect(() => {
    fetchProducts(valueInput).then((response) => {
      setProducts(response.data);
      setLoad(false)
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
        <h1 style={{ fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
          Veja produtos selecionados especialmente para você
        </h1>
      </div>
      <div className='' style={{ display: 'flex', margin: '20px' }}>
      </div>
      <div className="body-container">
        <div className="product-container">
          <div className="product-content">
            {loading ? <Load /> : products.map((product) =>
                <ProductCard
                  key={product.id}
                  data={{ name: product.name, 
                    image: product.image, 
                    price: product.price, 
                    description: 
                    product.description, 
                    linkTo: `/products/${product.id}` }}
                />
            )};
          </div>
        </div>
      </div>
    </>
  );
}
