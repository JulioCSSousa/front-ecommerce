import './ShopCart.css'
import { BsFillCartDashFill } from "react-icons/bs";
import PropTypes from 'prop-types'
import { useEffect } from 'react';


export default function CartItem({ data }) {

    var { image, name, price, quantity } = data;

    useEffect(() => {
        quantity = 1;
    })

    return (
        <>
            <section className="cart-item" >
                <img src={image} alt="#" className='cart-item-image' />
                <span className='span-num'>
                    {quantity}
                </span>
                <div className="cart-content">
                    <h3 className="cart-title">{name}</h3>
                    <h3 className="cart-item-price">R$ {quantity * price}</h3>
                </div>
                <button type="button" className="remove-icon">
                    <BsFillCartDashFill />
                </button>

            </section>

        </>
    )
}

CartItem.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    }).isRequired,
};
