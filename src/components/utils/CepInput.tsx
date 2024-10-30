import React from "react";
import InputMask from "react-input-mask";
import './CepInput.css'

export default function CepInput() {
    return (
        <div className="cep-container">
            <InputMask mask="99999-999" placeholder=" CEP (ex: 13056-201)">
                {(inputProps) => <input id="input-mask" {...inputProps} type="text"/>}
            </InputMask>
        </div>
    );
}
