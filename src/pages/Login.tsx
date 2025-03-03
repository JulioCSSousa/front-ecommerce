import React from "react";
import { useState } from "react";
import Header from "../components/Home/Header";


export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loginValidate, setLoginValidate] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const [loading, setLoading] = useState(false)

    async function handleLogin() {
        setLoginValidate(true)
        setLoginError(false)

        if (!userName || !password) {
            return
        }

        setLoading(true)
        const res = '' //chamada api
        setLoading(false)

        if (!res) {
            return setLoginError(true)
        }

        alert('ok')
    }

    return (
        <>
            <Header />

            <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '400px', marginTop: '50px' }}>
                    <h3 style={{ marginBottom: '30px' }}>Faça login</h3>

                    <p style={{ marginBottom: 0, marginTop: '15px' }}>Nome do usuário</p>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Digite seu nome..."
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <p
                        style={{
                            marginBottom: 0,
                            marginTop: '5px',
                            color: 'red',
                            display: loginValidate && !userName ? 'block' : 'none'
                        }}
                    >
                        Nome do usúario é obrigatório
                    </p>

                    <p style={{ marginBottom: 0, marginTop: '15px' }}>Senha</p>

                    <div className="input-group">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            className="form-control"
                            placeholder="Digite sua senha..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div
                            className="input-group-text password-toggle"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                            {passwordVisible ? '☻' : '☺'}
                        </div>
                    </div>
                    <p
                        style={{
                            marginTop: '5px',
                            color: 'red',
                            display: loginValidate && !password ? 'block' : 'none'
                        }}
                    >
                        Senha é obrigatória
                    </p>

                    <p
                        style={{
                            marginTop: '10px',
                            textAlign: 'center',
                            color: loading ? 'darkGray' : 'red',
                            display: loading || loginError ? 'block' : 'none'
                        }}
                    >
                        {loading ? 'Fazendo login, por favor aguarde...' :
                            'Usuário ou senha incorretos, favor tente novamente'
                        }
                    </p>

                    <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
                        <button className="btn btn-secondary" style={{ width: '48%' }}>Criar uma conta</button>
                        <button className="btn btn-dark" style={{ width: '48%' }} onClick={handleLogin}>Fazer login</button>
                    </div>

                    <p style={{ marginBottom: 0, marginTop: '15px' }}>Esqueceu sua senha? <span style={{ color: 'blue' }}>Clique aqui</span></p>
                </div>

            </div >

        </>
    )
}
