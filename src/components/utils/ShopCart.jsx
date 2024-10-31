import './ShopCart.css'
import { BsFillCartDashFill } from "react-icons/bs";
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/appContext';

export default function CartItem({ data }) {
    // eslint-disable-next-line react/prop-types
    const { image, name, price, quantity } = data;
    const { setCartItems } = useContext(AppContext);
    const [setIsAdded] = useState(false);


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
        <section>
            <section className="cart-item">
                <div className="image-content">
                    <img src={image} alt={name} className='cart-item-image' />
                </div>
                <div className="span-content">
                    <span className='span-num'>
                        {quantity}
                    </span>
                </div>
                <div className="cart-content">
                    <h3 className="cart-title">{name}</h3>
                    <h3 className="cart-item-price">R$ {quantity * price || 1}</h3>
                </div>
                <div className="remove-icon-content">
                    <button type="button" className="remove-icon" onClick={handleRemoveCart}>
                        <BsFillCartDashFill />
                    </button>
                </div>
            </section>
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
