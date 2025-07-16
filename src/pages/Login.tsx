import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Home/Header'
import { login } from '../api/accounts'
import { setUserAuth } from '../storage/AuthenticatorStorage'
import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  IconButton,
  InputAdornment
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [loginValidate, setLoginValidate] = useState(false)
  const [loginError, setLoginError] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleLogin() {
    try {
      setLoading(true)
      setLoginValidate(true)
      setLoginError(false)

      if (!email || !password) return

      const res = await login({ email, password })
      setUserAuth(res)
      navigate('/')
    } catch {
      setLoginError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
          px: 2
        }}
      >
        <Paper sx={{ p: 4, maxWidth: 400, width: '100%' }} elevation={3}>
          <Typography variant="h5" gutterBottom>
            Faça login
          </Typography>

          <TextField
            label="E-mail"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={loginValidate && !email}
            helperText={loginValidate && !email ? 'E-mail é obrigatório' : ''}
          />

          <TextField
            label="Senha"
            variant="outlined"
            type={passwordVisible ? 'text' : 'password'}
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={loginValidate && !password}
            helperText={loginValidate && !password ? 'Senha é obrigatória' : ''}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setPasswordVisible(!passwordVisible)} edge="end">
                    {passwordVisible ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          {loading && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Fazendo login, por favor aguarde...
            </Typography>
          )}

          {loginError && (
            <Typography variant="body2" color="error" sx={{ mt: 2 }}>
              Usuário ou senha incorretos, favor tente novamente
            </Typography>
          )}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button variant="outlined" onClick={() => navigate('/register')}>
              Criar uma conta
            </Button>
            <Button variant="contained" onClick={handleLogin}>
              Fazer login
            </Button>
          </Box>

          <Typography
            variant="body2"
            sx={{ mt: 3, textAlign: 'center', cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => alert('Recuperação de senha')}
          >
            Esqueceu sua senha? Clique aqui
          </Typography>
        </Paper>
      </Box>
    </>
  )
}
