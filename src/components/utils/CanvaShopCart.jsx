import CartItem from './CartItem';
import { AppContext } from '../../context/appContext';
import { useContext, useEffect, useState } from 'react';
import './CanvaShopCart.css'
import { Link as RouterLink } from 'react-router-dom'

export default function CanvaCartShop() {

    const { cartItems } = useContext(AppContext);
    const initialIsMobile = window.innerWidth <= 500;

    const [isMobile, setIsMobile] = useState(initialIsMobile);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 500);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="cart-container">
                <div className="cart-span-num">
                    <span className='spanNum'>{cartItems.reduce((total, item) => total + (item.quantity || 1), 0)}</span>
                </div>
                <button className="btn p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas" aria-controls="cartOffcanvas">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-bag-heart" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                    </svg>
                </button>
                {!isMobile && (
                    <div className="label-cart">
                        <label htmlFor="">Carrinho</label>
                    </div>
                )}
            </div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="cartOffcanvasLabel">Carrinho</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="item-content">
                    {cartItems.length === 0 ? (
                        <label>Seu carrinho está vazio.</label>
                    ) : (
                        cartItems.map((cartItem) => (
                            <CartItem key={cartItem.name} data={cartItem} />
                        ))
                    )}
                </div>
                <RouterLink component={RouterLink} to={'/OrderSummary'}>
                    <div className="canv-buy-btn">
                        <button className="btn btn-dark">Comprar</button>
                    </div>  
                </RouterLink>
            </div>

        </>
    )
}