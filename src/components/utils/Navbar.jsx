import { useState } from 'react';
import { fetchProductsByCategory } from '../../api/fetchProductsByCategory';
import './Navbar.css';

export default function Navbar() {
    const [showModal, setShowModal] = useState(false);
    const [category, setCategory] = useState('');
    const [products, setProducts] = useState([]);

    // Função para abrir o modal e buscar produtos por categoria
    const handleCategoryClick = async (categoryName) => {
        setCategory(categoryName); // Definir a categoria selecionada
        setShowModal(true); // Mostrar o modal
        const fetchedProducts = await fetchProductsByCategory(categoryName); // Buscar produtos
        setProducts(fetchedProducts); // Armazenar os produtos
    };

    // Função para fechar o modal
    const closeModal = () => {
        setShowModal(false);
        setProducts([]); // Limpar os produtos ao fechar o modal
    };

    return (
        <>
            <nav className='nav'>
                <ul className='list'>
                    <li className='item-list' onClick={() => handleCategoryClick('CORPO E BANHO')}>
                        <label>CORPO E BANHO</label>
                    </li>
                    <li className='item-list' onClick={() => handleCategoryClick('COLÔNIAS')}>
                        <label>COLÔNIAS</label>
                    </li>
                    <li className='item-list' onClick={() => handleCategoryClick('ÁGUAS PERFUMADAS')}>
                        <label>ÁGUAS PERFUMADAS</label>
                    </li>
                    <li className='item-list' onClick={() => handleCategoryClick('DIFUSOR DE AROMAS')}>
                        <label>DIFUSOR DE AROMAS</label>
                    </li>
                    <li className='item-list' onClick={() => handleCategoryClick('AROMATIANTES DE AMBIENTE')}>
                        <label>AROMATIANTES DE AMBIENTE</label>
                    </li>
                    <li className='item-list' onClick={() => handleCategoryClick('ESSÊNCIA CONCENTRADA')}>
                        <label>ESSÊNCIA CONCENTRADA</label>
                    </li>
                </ul>
            </nav>

            {showModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{category}</h2>
                        <div className="product-list">
                            {products.length > 0 ? (
                                products.map((product) => (
                                    <div key={product.id} className="product-card">
                                        <img src={product.imageUrl} alt={product.name} />
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                    </div>
                                ))
                            ) : (
                                <p>Carregando produtos...</p>
                            )}
                        </div>
                        <button className="close-button" onClick={closeModal}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
