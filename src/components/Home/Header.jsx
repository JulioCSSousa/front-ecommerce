
import CanvaCartShop from '../utils/CanvaShopCart';
import './Header.css';
import Logo from '/home/ubuntudev/programming/E-commerce-front/public/images/logo-no-b.gif';


export default function Header() {

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
                    <CanvaCartShop />
                </section>
            </header>
        </>
    );
}
