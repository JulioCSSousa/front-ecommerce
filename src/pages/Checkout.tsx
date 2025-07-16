import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Home/Header';
import { getUserAuth } from '../storage/AuthenticatorStorage';

import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  Paper
} from '@mui/material';

export default function Checkout() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [auth, setAuth] = useState({ name: '', email: '' });

  useEffect(() => {
    const data = getUserAuth();
    if (data) {
      setAuth(data);
    }
  }, []);

  const handleNext = () => {
    if (!auth.name) {
      navigate('/login');
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step === 0) {
      navigate(-1);
    } else {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Stepper activeStep={step} alternativeLabel>
            {['Identificação', 'Entrega', 'Pagamento'].map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box mt={4}>
            {step === 0 && (
              <>
                {auth.name ? (
                  <>
                    <TextField
                      label="Nome"
                      value={auth.name}
                      fullWidth
                      disabled
                      margin="normal"
                    />
                    <TextField
                      label="E-mail"
                      value={auth.email}
                      fullWidth
                      disabled
                      margin="normal"
                    />
                  </>
                ) : (
                  <Typography textAlign="center" color="text.secondary" mt={2}>
                    Você não está logado. Clique no botão abaixo para fazer login.
                  </Typography>
                )}
              </>
            )}

            {step === 1 && (
              <FormControl fullWidth margin="normal">
                <InputLabel id="delivery-label">Modo de entrega</InputLabel>
                <Select labelId="delivery-label" defaultValue="normal">
                  <MenuItem value="express">Entrega Express</MenuItem>
                  <MenuItem value="normal">Entrega Normal</MenuItem>
                </Select>
              </FormControl>
            )}

            {step === 2 && (
              <FormControl fullWidth margin="normal">
                <InputLabel id="payment-label">Método de pagamento</InputLabel>
                <Select labelId="payment-label" defaultValue="credit">
                  <MenuItem value="credit">Cartão de crédito</MenuItem>
                  <MenuItem value="debit">Cartão de débito</MenuItem>
                  <MenuItem value="pix">Pix</MenuItem>
                </Select>
              </FormControl>
            )}
          </Box>

          <Box mt={4} display="flex" justifyContent="space-between">
            <Button variant="outlined" onClick={handleBack}>
              Voltar
            </Button>

            <Button
              variant="contained"
              onClick={step === 2 ? () => alert('Compra finalizada!') : handleNext}
            >
              {step === 0 && !auth.name
                ? 'Fazer login'
                : step === 2
                ? 'Concluir'
                : 'Avançar'}
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
