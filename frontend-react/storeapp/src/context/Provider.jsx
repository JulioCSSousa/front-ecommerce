import { useState} from "react"

import { AppContext } from "./appContext"
import propTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export default function Provider({children}){


    const [valueInput, setValueInput] = useState('')

    const value = {
        valueInput, setValueInput
    }
    return(
        <>
        <AppContext.Provider value = {value}>
        {children}
        </AppContext.Provider>
        </>
    )
}

Provider.prototype = {
    children: propTypes.any
}.isRequired