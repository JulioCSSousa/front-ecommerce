import PropTypes from 'prop-types';
import './Card.css';
import Button from './Button';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/appContext';

export default function ProductCard({ data }) {
    const { setCartItems } = useContext(AppContext);
    const [isAdded, setIsAdded] = useState(false);


    const handleAddCart = () => {
        setCartItems(prevItems => {
            const itemExists = prevItems.some(item => item.name === data.name);
            if (!itemExists) {
                setIsAdded(true);
                setTimeout(() => setIsAdded(false), 2000); 
                return [...prevItems, data];
            }
            return prevItems.map(item =>
                item.name === data.name
                    ? { ...item, quantity: (item.quantity || 1) + 1 } 
                    : item
            );
        });
    };

    return (
        <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4" id='card-container'>
            <div className="product-card">
                <Button onClick={handleAddCart} text={isAdded ? "Adicionado!" : "Comprar"} />
                <a href="#">
                    <img id="img-card" src={data.image} className="card-img" alt={`Imagem de ${data.name}`} />
                </a>
                <div className="card">
                    <div className="card-text">
                        {data.name}
                        <div className='card-price'></div>
                        <h4>{data.price.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}</h4>
                        <div className='card-description'>
                            <div className="description-content">
                                {data.description}
                            </div>
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
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,
};
