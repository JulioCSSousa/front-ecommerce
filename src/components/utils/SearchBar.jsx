import { useContext, useEffect, useState } from 'react'
import './SearchBar.css'
import { AppContext } from '../../context/appContext'


export default function SearchBar() {

    const {setValueInput} = useContext(AppContext)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        setValueInput(searchValue)
    }, )

    const handleSearch = (event) => {
        event.preventDefault()
        return searchValue;

    }

    return (
        <>
            <form onSubmit={handleSearch}>
                <div className="search-container">
                    <div className="col">
                        <div className="input-group">
                            <input value={searchValue} onChange={({ target }) => setSearchValue(target.value)} type="text" id='searchBar' className="form-control" placeholder="O que deseja encontrar?" />
                            <button className="btn btn-outline-secondary" id="search-btn" type="button" style={{ border: 'none', position: 'relative' }}>
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}