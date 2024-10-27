import './ShopCart.css'
import { BsFillCartDashFill } from "react-icons/bs";
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/appContext';

export default function CartItem({ data }) {
    // eslint-disable-next-line react/prop-types
    const { image, name, price, quantity } = data;
    const { setCartItems } = useContext(AppContext);
    const [isAdded, setIsAdded] = useState(false);


    const handleRemoveCart = () => {
        setCartItems(prevItems => {
            const itemExists = prevItems.some(item => item.name === data.name);
            if (itemExists) {
                setIsAdded(true);
                setTimeout(() => setIsAdded(false), 2000); 
                
                return prevItems
                    .map(item =>
                        item.name === data.name
                            ? { ...item, quantity: (item.quantity || 1) - 1 }
                            : item
                    )
                    .filter(item => item.quantity > 0); 
            }
            return prevItems;
        });
    };

    return (
        <section className="cart-item">
            <img src={image} alt={name} className='cart-item-image' />
            <span className='span-num'>
                {quantity}
            </span>
            <div className="cart-content">
                <h3 className="cart-title">{name}</h3>
                <h3 className="cart-item-price">R$ {quantity * price || 1}</h3>
            </div>
            <button type="button" className="remove-icon" onClick={handleRemoveCart}>
                <BsFillCartDashFill />
            </button>
        </section>
    );
}

CartItem.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,
};
