import { useState } from 'react';
import './SearchBar.css';
import { useContext } from 'react';
import { AppContext } from '../../context/appContext';

export default function SearchBar() {
  const { setValueInput } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  // Função para lidar com a busca
  const handleSearch = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário
    setValueInput(searchValue); // Atualiza o valor global da pesquisa
  };

  // Função para lidar com o pressionamento da tecla Enter
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setValueInput(searchValue); // Atualiza o valor global da pesquisa
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="search-container">
        <div className="col">
          <div className="input-group">
            <input
              value={searchValue}
              onChange={({ target }) => setSearchValue(target.value)} // Atualiza o valor do input
              onKeyDown={handleKeyPress} // Verifica o pressionamento da tecla Enter
              type="text"
              id="searchBar"
              className="form-control"
              placeholder="O que deseja encontrar?"
            />
            <div className="search-btn" >
             <button
                className="btn btn-outline-secondary"
                id="search-btn"
                type="submit" 
                style={{ position: 'relative'}}>
                <i className="fas fa-search"></i>
            </button>
          </div>
          </div>
          
          
        </div>
      </div>
    </form>
  );
}
