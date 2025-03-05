import PropTypes from 'prop-types';
import './Card.css';
import Button from './Button';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/appContext';
import { Link as RouterLink } from 'react-router-dom';


export default function ProductCard({ data }) {
    const { setCartItems } = useContext(AppContext);
    const [isAdded, setIsAdded] = useState(false);


    const handleAddCart = () => {
        setCartItems(prevItems => {
            const itemExists = prevItems.some(item => item.name === data.name);
            if (!itemExists) {
                setIsAdded(true);
                setTimeout(() => setIsAdded(false), 2000);
                return [...prevItems, { ...data, quantity: 1 }];
            }
            return prevItems.map(item =>
                item.name === data.name
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        });
    };

    return (
        <div className="product-container">
            <div className="product-card">
                <div className="product-card-content">
                    <div className="img-content">
                        <RouterLink to={data.linkTo} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img id="img-card" src={data.imageUrl} className="card-img" alt={`Imagem de ${data.name}`} />
                        </RouterLink>
                        <div className="add-cart-btn">
                            <Button onClick={handleAddCart} text={isAdded ? "Adicionado!" : "Comprar"} />
                        </div>
                        <RouterLink Component={RouterLink} to={'/CartResume'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="buy-btn">
                                <button onClick={handleAddCart} className="btn btn-dark" style={{ borderRadius: '50px', height: '50px', width: '130px' }} id='card-buy-btn'>Comprar</button>
                            </div>
                        </RouterLink>
                    </div>
                </div>
                <div className="card">
                    <div className="card-text">
                        {data.name}
                        <div className='card-price'></div>
                        <h4>{data.price.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}</h4>
                        <div className='card-description'>
                            {data.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

ProductCard.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        linkTo: PropTypes.string.isRequired
    }).isRequired,
};
