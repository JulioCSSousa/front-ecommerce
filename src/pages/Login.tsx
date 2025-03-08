import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Home/Header";
import { login } from "../api/accounts";
import { setUserAuth } from "../storage/AuthenticatorStorage";
import './login.css';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loginValidate, setLoginValidate] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleLogin() {
        try {
            setLoading(true);
            setLoginValidate(true);
            setLoginError(false);

            if (!email || !password) {
                return;
            }

            const res = await login({ email: email, password: password });
            setUserAuth(res);
            navigate('/');
        } catch {
            setLoginError(true);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Header />

            <div className="login-container">
                <div className="login-box">
                    <h3>Faça login</h3>

                    <div>
                        <p>E-mail</p>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Digite seu e-mail..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {loginValidate && !email && <p className="error-message">E-mail é obrigatório</p>}
                    </div>

                    <div>
                        <p>Senha</p>
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
                        {loginValidate && !password && <p className="error-message">Senha é obrigatória</p>}
                    </div>

                    <div className="loading-message">
                        {loading ? 'Fazendo login, por favor aguarde...' :
                            (loginError ? 'Usuário ou senha incorretos, favor tente novamente' : '')}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button className="btn btn-secondary" onClick={() => navigate('/register')}>Criar uma conta</button>
                        <button className="btn btn-dark" onClick={handleLogin}>Fazer login</button>
                    </div>

                    <p className="forgot-password" onClick={() => alert("Recuperação de senha")}>
                        Esqueceu sua senha? Clique aqui
                    </p>
                </div>
            </div>
        </>
    );
}
