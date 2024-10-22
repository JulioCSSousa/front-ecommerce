import { useContext } from 'react';
import CartItem from '../utils/ShopCart';
import './Header.css';
import Logo from '/home/ubuntudev/programming/E-commerce-front/public/images/logo-no-b.gif';
import { AppContext } from '../../context/appContext';

export default function Header() {
    const { cartItems } = useContext(AppContext);


    return (
        <>
            <header>
                <section className="header-content">
                    <nav className="navbar m-2" style={{ marginRight: '20px' }}>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                    <div className="img-content">
                        <img src={Logo} alt="Logo" style={{ height: '60px' }} />
                    </div>
                </section>
                <div className="offcanvas offcanvas-start" style={{ width: '50vw' }} tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="navbarOffcanvasLgLabel">Offcanvas</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        Content for the offcanvas goes here.
                    </div>
                </div>
                <section>
                    <div className="label-menu-container">
                        <div>
                            <h6><b>Minha Conta</b></h6>
                        </div>
                        <div className='label-in'>
                            <div style={{ marginRight: '5px' }}>
                                <a href='#'>Entrar</a>
                            </div>
                            /
                            <div style={{ marginLeft: '5px' }}>
                                <a href='#'>Cadastrar</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="cart-container">
                        <button className="btn p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas" aria-controls="cartOffcanvas">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-bag-heart" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                            </svg>
                            <span className='spanNum'>{cartItems.reduce((total, item) => total + (item.quantity || 1), 0)}</span> 
                        </button>
                        <div className="label-cart">
                            <label htmlFor="">Carrinho</label>
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="cartOffcanvasLabel">Carrinho</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        {cartItems.length === 0 ? ( 
                            <p>Seu carrinho está vazio.</p>
                        ) : (
                            cartItems.map((cartItem) => (
                                <CartItem key={cartItem.name} data={cartItem} /> 
                            ))
                        )}
                    </div>
                </section>
            </header>
        </>
    );
}
