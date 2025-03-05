import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import PropTypes from 'prop-types';
import ItemOrder from "../utils/ItemOrder";
import './CartResume.css';
import Logo from '/images/logo-no-b.gif';

export default function CartResume() {
    const { setCartItems, cartItems } = useContext(AppContext);

    const handleRemoveCart = (itemToRemove) => {
        setCartItems((prevItems) => {
            return prevItems
                .map((item) =>
                    item.name === itemToRemove.name
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0);
        });
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <>
            <section className="container">
                <header>
                    <div className="header-content">
                        <img src={Logo} alt="Logo" />
                    </div>
                </header>
                <div className="my-cart">Meu Carrinho</div>
                <section className="order-container">

                    <div className="items">
                        {cartItems.length === 0 ? (
                            <label>Seu carrinho está vazio.</label>
                        ) : (
                            cartItems.map((cartItem) => (
                                <ItemOrder
                                    key={cartItem.name}
                                    data={cartItem}
                                    onRemove={() => handleRemoveCart(cartItem)}
                                />
                            ))
                        )}
                    </div>
                    <div className="order-resume">
                        <h4>Resumo do Pedido</h4>
                        <div className="total-price">
                            <p>
                                <strong>Total:</strong>{" "}
                                {calculateTotalPrice().toLocaleString("pt-br", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                            </p>
                        </div>
                        <div className="buttons">
                            <div className="keep-buy">
                                <button className="btn btn-secondary">Continuar Comprando</button>
                            </div>
                            <div className="end">
                                <button className="btn btn-dark">Finalizar Compra</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

CartResume.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
};
