import './navBar.css'
export default function NavBar() {

    return (
        <>
            <div className="nav-container" >
                <nav className="navbar bg-dark" style={{ height: '5vh' }}>
                </nav>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginLeft: '20px'}}>
                <a className="collapse nav-link" href="#">Aromatizantes</a>
                <div className="collapse navbar-collapse"  id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Escritório <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sala</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Acessórios</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}