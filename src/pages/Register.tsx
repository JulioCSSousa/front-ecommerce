import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Home/Header";
import { register } from "../api/accounts";

export default function Register() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumberValidation, setPhoneNumberValidation] = useState(false);
    const [emailValidation, setEmailValidation] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [createDataValidate, setCreateDataValidate] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const [loading, setLoading] = useState(false)

    function dataValidation() {
        if (!name || !phoneNumber || !email || !password || !confirmPassword || !passwordMatch) {
            return true
        }
        if (phoneNumber.length < 11) {
            return true
        }
        if (!email.includes('@')) {
            return true
        }
        return false
    }

    async function handleCreateAccount() {
        try {
            setLoading(true)
            setCreateDataValidate(true)
            setLoginError(false)

            if (dataValidation()) {
                return
            }

            const res = await register(
                {
                    name: name,
                    phoneNumber: phoneNumber.replace(/\D/g, ''),
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword
                })

            navigate('/login')
        } catch {
            return setLoginError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (password === confirmPassword) {
            return setPasswordMatch(true)
        }
        return setPasswordMatch(false)
    }, [password, confirmPassword])

    useEffect(() => {
        if (phoneNumber.length > 10) {
            return setPhoneNumberValidation(true)
        }
        return setPhoneNumberValidation(false)
    }, [phoneNumber])

    useEffect(() => {
        if (email.includes('@')) {
            return setEmailValidation(true)
        }
        return setEmailValidation(false)
    }, [email])

    return (
        <>
            <Header />

            <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
                <div style={{ width: '400px', marginTop: '50px' }}>
                    <h3 style={{ marginBottom: '30px' }}>Crie já sua conta</h3>

                    <p style={{ marginBottom: 0, marginTop: '15px' }}>Nome</p>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Digite seu nome..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <p
                        style={{
                            marginBottom: 0,
                            marginTop: '5px',
                            color: 'red',
                            display: createDataValidate && !name ? 'block' : 'none'
                        }}
                    >
                        Nome é obrigatório
                    </p>

                    <p style={{ marginBottom: 0, marginTop: '15px' }}>Telefone</p>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Digite seu telefone..."
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <p
                        style={{
                            marginBottom: 0,
                            marginTop: '5px',
                            color: 'red',
                            display: createDataValidate && (!phoneNumberValidation || !phoneNumber) ? 'block' : 'none'
                        }}
                    >
                        {!phoneNumber ? 'Telefone é obrigatório' : 'Telefone inválido'}
                    </p>

                    <p style={{ marginBottom: 0, marginTop: '15px' }}>E-mail</p>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Digite seu e-mail..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p
                        style={{
                            marginBottom: 0,
                            marginTop: '5px',
                            color: 'red',
                            display: createDataValidate && (!emailValidation || !email) ? 'block' : 'none'
                        }}
                    >
                        {!email ? 'E-mail é obrigatório': 'E-mail inválido'}
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
                            display: createDataValidate && !password ? 'block' : 'none'
                        }}
                    >
                        Senha é obrigatória
                    </p>

                    <p style={{ marginBottom: 0, marginTop: '15px' }}>Repita a senha</p>
                    <div className="input-group">
                        <input
                            type={confirmPasswordVisible ? "text" : "password"}
                            className="form-control"
                            placeholder="Repita sua senha..."
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <div
                            className="input-group-text password-toggle"
                            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                        >
                            {confirmPasswordVisible ? '☻' : '☺'}
                        </div>
                    </div>
                    <p
                        style={{
                            marginTop: '5px',
                            color: 'red',
                            display: !passwordMatch ? 'block' : 'none'
                        }}
                    >
                        Senhas não conrrespondem
                    </p>

                    <p
                        style={{
                            marginTop: '10px',
                            textAlign: 'center',
                            color: loading ? 'darkGray' : 'red',
                            display: loading || loginError ? 'block' : 'none'
                        }}
                    >
                        {loading ? 'Criando sua conta, por favor aguarde...' :
                            'Falha ao criar conta, favor tente novamente'
                        }
                    </p>

                    <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
                        <button className="btn btn-secondary" style={{ width: '48%' }} onClick={() => navigate('/login')}>Fazer login </button>
                        <button className="btn btn-dark" style={{ width: '48%' }} onClick={handleCreateAccount}>Criar conta</button>
                    </div>

                    <p style={{ marginBottom: 0, marginTop: '15px' }}>Já possui uma conta? <span style={{ color: 'blue' }}>Faça login</span></p>
                </div>

            </div >

        </>
    )
}
