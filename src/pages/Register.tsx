import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Home/Header"
import { register } from "../api/accounts"
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography
} from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"

export default function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
  const [validate, setValidate] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const passwordMatch = password === confirmPassword
  const isPhoneValid = phoneNumber.length >= 11
  const isEmailValid = email.includes("@")
  const isPasswordLengthValid = password.length >= 6

  const isFormInvalid =
    !name ||
    !phoneNumber ||
    !email ||
    !password ||
    !confirmPassword ||
    !passwordMatch ||
    !isPhoneValid ||
    !isEmailValid ||
    !isPasswordLengthValid

  async function handleCreateAccount() {
    try {
      setLoading(true)
      setValidate(true)
      setError(false)

      if (isFormInvalid) return

      const res = await register({
        name,
        phoneNumber: phoneNumber.replace(/\D/g, ""),
        email,
        password,
        confirmPassword
      })

      navigate("/login")
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />

      <Box
        sx={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          mt: 4,
          px: 2,
          mb: 8
        }}
      >
        <Paper sx={{ width: 400, p: 4 }} elevation={3}>
          <Typography variant="h5" gutterBottom>
            Crie já sua conta
          </Typography>

          <TextField
            label="Nome"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={validate && !name}
            helperText={validate && !name ? "Nome é obrigatório" : ""}
          />

          <TextField
            label="Telefone"
            type="tel"
            fullWidth
            margin="normal"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            error={validate && (!isPhoneValid || !phoneNumber)}
            helperText={
              validate && !phoneNumber
                ? "Telefone é obrigatório"
                : validate && !isPhoneValid
                ? "Telefone inválido"
                : ""
            }
          />

          <TextField
            label="E-mail"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={validate && (!isEmailValid || !email)}
            helperText={
              validate && !email
                ? "E-mail é obrigatório"
                : validate && !isEmailValid
                ? "E-mail inválido"
                : ""
            }
          />

          <TextField
            label="Senha"
            type={passwordVisible ? "text" : "password"}
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={validate && (!password || !isPasswordLengthValid)}
            helperText={
              validate && !password
                ? "Senha é obrigatória"
                : validate && !isPasswordLengthValid
                ? "A senha deve ter pelo menos 6 caracteres"
                : ""
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setPasswordVisible(!passwordVisible)}>
                    {passwordVisible ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <TextField
            label="Repita a senha"
            type={confirmPasswordVisible ? "text" : "password"}
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={validate && !passwordMatch}
            helperText={validate && !passwordMatch ? "Senhas não correspondem" : ""}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                    {confirmPasswordVisible ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          {loading && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Criando sua conta, por favor aguarde...
            </Typography>
          )}
          {error && (
            <Typography variant="body2" color="error" sx={{ mt: 2 }}>
              Falha ao criar conta, favor tente novamente.
            </Typography>
          )}

          <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => navigate("/login")}
            >
              Fazer login
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={handleCreateAccount}
            >
              Criar conta
            </Button>
          </Box>

          <Typography
            sx={{ mt: 2, textAlign: "center", color: "primary.main", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Já possui uma conta? Faça login
          </Typography>
        </Paper>
      </Box>
    </>
  )
}
