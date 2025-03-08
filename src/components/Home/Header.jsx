import { useNavigate } from 'react-router-dom';
import { getUserAuth, removeUserAuth } from '../../storage/AuthenticatorStorage';
import CanvaCartShop from '../utils/CanvaShopCart';
import Navbar from '../utils/Navbar';
import './Header.css';
import Logo from '/images/logo-no-b.gif';


export default function Header() {


    const navigate = useNavigate()

    function handleLogout() {
        removeUserAuth()
        navigate('/login')
    }

    return (
        <>
            <header>
                <section className="header-container">
                    <div className="logo-content" style={{ cursor: 'pointer' }}>
                        <img src={Logo} alt="Logo" style={{ height: '60px' }} />
                    </div>
                </section>
                <section className='canvacartshop-icon'>
                    <CanvaCartShop />
                </section>
                <section>
                    <div className="label-menu-container">
                        <div className="account-menu">
                            <h6 className="account-header" style={{ cursor: 'pointer' }}><b>Minha Conta</b></h6>
                            {getUserAuth()?.token ? (
                                <p className="logout" style={{ cursor: 'pointer' }} onClick={handleLogout}>
                                    Sair
                                </p>
                            ) : (
                                <div className="login-register-links">
                                    <a href="/login" className="login-link">Entrar</a>
                                    <span className="divider"> / </span>
                                    <a href="/register" className="register-link">Cadastrar</a>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

            </header >
            <div className="navbar">
                <Navbar />
            </div>
        </>
    );
}
