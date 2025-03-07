import { useNavigate } from 'react-router-dom';
import { getUserAuth, removeUserAuth } from '../../storage/AuthenticatorStorage';
import CanvaCartShop from '../utils/CanvaShopCart';
import Navbar from '../utils/Navbar';
import './Header.css';
import Logo from '/images/logo-no-b.gif';
import { useEffect, useState } from 'react';


export default function Header() {
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
                <section>
                    <div className="label-menu-container" >
                        {!isMobile && (
                            <div>
                                <h6 style={{ cursor: 'pointer' }}><b>Minha Conta</b></h6>
                            </div>
                        )
                        }
                        {getUserAuth()?.token ?
                            < p style={{ cursor: 'pointer' }} onClick={handleLogout} >Sair</p>
                            :
                            <div className='label-in'>
                                <div style={{ marginRight: '5px' }}>
                                    <a href='/login'>Entrar</a>
                                </div>
                                /
                                <div style={{ marginLeft: '5px' }}>
                                    <a href='/register'>Cadastrar</a>
                                </div>
                            </div>
                        }
                    </div>
                </section>
                <section>
                    <CanvaCartShop />
                </section>
            </header >
            <div className="navbar">
                <Navbar />
            </div>
        </>
    );
}
