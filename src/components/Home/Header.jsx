
import CanvaCartShop from '../utils/CanvaShopCart';
import Navbar from '../utils/Navbar';
import './Header.css';
import Logo from '/images/logo-no-b.gif';


export default function Header() {

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
                    <CanvaCartShop />
                </section>
            </header>
            <div className="navbar">
                <Navbar />
            </div>
        </>
    );
}
