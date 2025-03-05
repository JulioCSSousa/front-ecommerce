import { useNavigate } from 'react-router-dom';
import { getUserAuth, removeUserAuth } from '../../storage/AuthenticatorStorage';
import CanvaCartShop from '../utils/CanvaShopCart';
import Navbar from '../utils/Navbar';
import './Header.css';
import Logo from '/images/logo-no-b.gif';


export default function Header() {
    const navigate = useNavigate()

    function handleLogout(){
        removeUserAuth()
        navigate('/login')
    }

    return (
        <>
            <header>
                <section className="header-container">
                    <div className="logo-content">
                        <img src={Logo} alt="Logo" style={{ height: '60px' }} />
                    </div>
                </section>
                <section>
                    <div className="label-menu-container">
                        <div>
                            <h6><b>Minha Conta</b></h6>
                        </div>
                        {getUserAuth()?.token ?
                            < button className="btn btn-secondary" onClick={handleLogout} >Sair</button>
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
