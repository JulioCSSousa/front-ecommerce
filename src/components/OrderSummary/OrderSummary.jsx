import { useContext } from "react";
import { AppContext } from "../../context/appContext";

import ItemOrder from "../utils/ItemOrder";
import './OrderSummary.css';


export default function OrderSummary() {
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
        <section className="order-summary-container">
            <header className="order-header">
                <img src="" alt="Logo" className="order-logo" />
            </header>
            <h2 className="cart-title">Meu Carrinho</h2>
            <section className="order-content">
                <div className="items-list">
                    {cartItems.length === 0 ? (
                        <p className="empty-cart">Seu carrinho está vazio.</p>
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
                <div className="order-summary">
                    <h3>Resumo do Pedido</h3>
                    <p className="total-price">
                        <strong>Total:</strong> {calculateTotalPrice().toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </p>
                    <div className="order-buttons">
                        <button className="btn btn-secondary">Continuar Comprando</button>
                        <button className="btn btn-primary">Finalizar Compra</button>
                    </div>
                </div>
            </section>
        </section>
    );
}

OrderSummary.propTypes = {}; 

