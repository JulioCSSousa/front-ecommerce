import { useState } from "react";
import { AppContext } from "./appContext";
import PropTypes from 'prop-types'; 


export default function Provider({ children }) {
    const [valueInput, setValueInput] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const [spanNum, setSpanNum] = useState(1);

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
