import { AppContext } from '../../context/appContext';
import { useContext } from 'react';
import './CanvaShopCart.css';
import { Link as RouterLink } from 'react-router-dom';

export default function CanvaCartShop() {
    const { cartItems } = useContext(AppContext);

    return (
        <>
            {/* Ícone do Carrinho */}
            <div className="cart-container">
                <div className="cart-icon-wrapper">
                    <button className="btn p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas" aria-controls="cartOffcanvas">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-bag-heart" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                        </svg>
                    </button>
                    <span className="cart-badge">{cartItems.reduce((total, item) => total + (item.quantity || 1), 0)}</span>
                </div>
                <label className="cart-label">Carrinho</label>
            </div>

            {/* Offcanvas do Carrinho */}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="cartOffcanvasLabel">Carrinho</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {/* Lista de Itens */}
                    <div className="cart-items-list">
                        {cartItems.length === 0 ? (
                            <p className="empty-cart-message">Seu carrinho está vazio. 🛒</p>
                        ) : (
                            cartItems.map((cartItem) => (
                                <div key={cartItem.name} className="cart-item">
                                    <div className="item-image">
                                        <img src={cartItem.imageUrl} alt={cartItem.name} />
                                    </div>
                                    <div className="item-details">
                                        <h4>{cartItem.name}</h4>
                                        <p>Quantidade: {cartItem.quantity}</p>
                                        <p>Preço: {(cartItem.price * cartItem.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                    </div>
                                    <button className="remove-item-btn" onClick={() => {}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                        </svg>
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Botão de Finalizar Compra */}
                    {cartItems.length > 0 && (
                        <RouterLink to="/OrderSummary" className="checkout-link">
                            <button className="btn btn-dark checkout-btn">Finalizar Compra</button>
                        </RouterLink>
                    )}
                </div>
            </div>
        </>
    );
}