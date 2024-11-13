import './ItemOrder.css';
import { BsFillCartDashFill } from "react-icons/bs";
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/appContext';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoRemoveCircleOutline } from "react-icons/io5";


export default function ItemOrder({ data }) {
    const { image, name, price, quantity } = data;
    const { setCartItems } = useContext(AppContext);
    const [setIsAdded] = useState(false);

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

    return (
        <section>
            <section className="cart-item">
                <div className="image-content">
                    <img src={image} alt={name} className="cart-item-image" />
                </div>
                <div className="span-content">
                    <div className="add-icon-content">
                        <button type="button" className="add-icon" onClick={handleAddCart}>
                            <IoIosAddCircleOutline style={{height: '40px', width: '30px'}}/>
                        </button>
                    </div>
                    <span className="span-num">
                        {quantity}
                    </span>
                    <div className="remove-icon-content">
                        <button type="button" className="remove-icon" onClick={handleRemoveCart}>
                            <IoRemoveCircleOutline style={{height: '40px', width: '30px'}}/>
                        </button>
                    </div>
                </div>
                <div className="cart-content">
                    <h3 className="cart-title">{name}</h3>
                    <h3 className="cart-item-price">R$ {(quantity * price).toFixed(2)}</h3>
                </div>
            </section>
        </section>
    );
}

ItemOrder.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    }).isRequired,
};
