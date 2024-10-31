import './Navbar.css'



export default function Navbar() {

    return (
        <>
            <nav className='nav'>
                <ul className='list'>
                    <li className='item-list'>
                        <label>CORPO E BANHO</label>
                    </li>
                    <li className='item-list'>
                        <label>COLÔNIAS</label>
                    </li >
                    <li className='item-list'>
                        <label>ÁGUAS PERFUMADAS</label>
                    </li>
                    <li className='item-list'>
                        <label>DIFUSOR DE AROMAS</label>
                    </li>
                    <li className='item-list'>
                        <label>AROMATIANTES DE AMBIENTE</label>
                    </li>
                    <li className='item-list'>
                        <label>ESSÊNCIA CONCENTRADA</label>
                    </li>
                </ul>
            </nav>
        </>
    )
}