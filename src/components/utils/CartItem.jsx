import './CartItem.css';
import { BsFillCartDashFill } from "react-icons/bs";
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AppContext } from '../../context/appContext';

export default function CartItem({ data }) {
    const { imageUrl, name, price, quantity } = data;
    const { setCartItems } = useContext(AppContext);

    const handleRemoveCart = () => {
        setCartItems(prevItems => {
            const itemExists = prevItems.some(item => item.name === data.name);
            if (itemExists) {
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

    const handleAddCart = () => {
        setCartItems(prevItems => {
            return prevItems.map(item =>
                item.name === data.name
                    ? { ...item, quantity: (item.quantity || 0) + 1 }
                    : item
            );
        });
    };

    const handleDecreaseCart = () => {
        setCartItems(prevItems => {
            return prevItems.map(item =>
                item.name === data.name
                    ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                    : item
            );
        });
    };

    return (
        <section className="cart-item">
            <div className="image-content">
                <img src={imageUrl} alt={name} className="cart-item-image" />
            </div>
            <div className="cart-info">
                <h3 className="cart-title">{name}</h3>
                <div className="price-quantity">
                    <span className="cart-item-price">R$ {(quantity * price).toFixed(2)}</span>
                    <div className="quantity-controls">
                        <button className="quantity-btn" onClick={handleDecreaseCart}>-</button>
                        <span className="span-num">{quantity}</span>
                        <button className="quantity-btn" onClick={handleAddCart}>+</button>
                    </div>
                </div>
            </div>
            <div className="remove-icon-content">
                <button type="button" className="remove-icon" onClick={handleRemoveCart}>
                    <BsFillCartDashFill />
                </button>
            </div>
        </section>
    );
}

CartItem.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    }).isRequired,
};
