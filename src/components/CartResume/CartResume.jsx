import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import PropTypes from 'prop-types';
import ItemOrder from "../utils/ItemOrder";
import './CartResume.css'
import Logo from '/images/logo-no-b.gif';
export default function CartResume() {

    const { setCartItems, cartItems } = useContext(AppContext);

    const handleRemoveCart = () => {
        setCartItems(prevItems => {
            const itemExists = prevItems.some(item => item.name === cartItems.name);
            if (itemExists) {
                return prevItems
                    .map(item =>
                        item.name === cartItems.name
                            ? { ...item, quantity: (item.quantity || 1) - 1 }
                            : item
                    )
                    .filter(item => item.quantity > 0);
            }
            return prevItems;
        });
    };


    return (
        <>
            <section className="container">
                <header>
                    <div className="header-content">
                        <img src={Logo} />
                    </div>
                </header>
                <div className="my-cart">
                        Meu Carrinho
                    </div>
                <section className="order-container">
                    
                    <div className="order-content">
                        <div className="item">
                            {cartItems.length === 0 ? (
                                <p>Seu carrinho está vazio.</p>
                            ) : (
                                cartItems.map((cartItem) => (
                                    <ItemOrder key={cartItem.name} data={cartItem} />
                                ))
                            )}
                        </div>
                        <div className="delivery-tax">
                            CEP
                        </div>
                        <div className="order-resume">
                            <label htmlFor="" className="total-price">
                                { }
                            </label>
                        </div>

                    </div>

                </section>
            </section>
        </>
    )
}

CartResume.propTypes = {
    cartItems: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    }).isRequired,
};