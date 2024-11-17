import { useEffect, useState } from "react";
import { AppContext } from "./appContext";
import PropTypes from 'prop-types'; 


export default function Provider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        const storedItems = localStorage.getItem("cartItems");
        return storedItems ? JSON.parse(storedItems) : [];
    });

    const [valueInput, setValueInput] = useState('');
    const [spanNum, setSpanNum] = useState(1);

    // Sincronizar o estado do carrinho com o localStorage sempre que ele mudar
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const value = {
        valueInput,
        setValueInput,
        cartItems,
        setCartItems,
        spanNum, 
        setSpanNum
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}


Provider.propTypes = {
    children: PropTypes.node.isRequired 
};
