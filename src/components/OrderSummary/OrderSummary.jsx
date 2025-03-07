import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import './OrderSummary.css';
import { FaShoppingCart, FaTrash, FaArrowLeft, FaCreditCard, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function OrderSummary() {
    const { setCartItems, cartItems } = useContext(AppContext);
    const navigate = useNavigate(); // Inicializando o hook useNavigate

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

    const handleAddCart = (itemToAdd) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) =>
                item.name === itemToAdd.name
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        });
    };

    const handleDecreaseCart = (itemToDecrease) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) =>
                item.name === itemToDecrease.name && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        });
    };
    const handleGoBack = () => {
        navigate("/"); // Redireciona para a página principal ("/")
    };
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleClearCart = () => {
        setCartItems([]);
    };

    return (
        <div className="order-summary-container">
            {/* Header */}
            <div className="order-header">
                <button className="back-button" onClick={handleGoBack}>
                    <FaArrowLeft />
                </button>
                <h1 className="cart-title">
                    <FaShoppingCart /> Meu Carrinho
                </h1>
                {cartItems.length > 0 && (
                    <button className="clear-cart-btn" onClick={handleClearCart}>
                        <FaTrash /> Limpar Carrinho
                    </button>
                )}
            </div>

            {/* Conteúdo Principal */}
            <div className="order-content">
                {/* Lista de Itens */}
                <div className="items-list">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <p>Seu carrinho está vazio. 🛒</p>
                            <button onClick={() => handleGoBack()} className="btn btn-primary">Ver Produtos</button>
                        </div>
                    ) : (
                        cartItems.map((cartItem) => (
                            <div key={cartItem.id} className="cart-item">
                                <div className="item-info">
                                    <img src={cartItem.imageUrl} alt={cartItem.name} className="item-image" />
                                    <div className="item-details">
                                        <div className="name">
                                            <label>{cartItem.name}</label>
                                        </div>
                                        <p>Preço: {cartItem.price.toLocaleString("pt-br", {
                                            style: "currency",
                                            currency: "BRL",
                                        })}</p>
                                    </div>
                                </div>

                                {/* Botões de Aumentar/Diminuir */}
                                <div className="quantity-controls">
                                    <button
                                        className="quantity-btn"
                                        onClick={() => handleDecreaseCart(cartItem)}
                                    >
                                        <FaMinus />
                                    </button>
                                    <span className="quantity">{cartItem.quantity}</span>
                                    <button
                                        className="quantity-btn"
                                        onClick={() => handleAddCart(cartItem)}
                                    >
                                        <FaPlus />
                                    </button>
                                </div>

                                <button className="remove-item-btn" onClick={() => handleRemoveCart(cartItem)}>
                                    <FaTrash />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Resumo do Pedido */}
                {cartItems.length > 0 && (
                    <div className="order-summary-card">
                        <h2>Resumo do Pedido</h2>
                        <div className="summary-details">
                            <p>Subtotal: <span>{calculateTotalPrice().toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            })}</span></p>
                            <p>Frete: <span>Grátis</span></p>
                            <hr />
                            <p className="total-price">Total: <span>{calculateTotalPrice().toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            })}</span></p>
                        </div>
                        <button className="btn btn-checkout" onClick={() => navigate("/checkout")}>
                            <FaCreditCard /> Finalizar Compra
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
