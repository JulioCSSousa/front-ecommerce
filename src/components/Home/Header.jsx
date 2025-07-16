import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Box, Typography, Button, IconButton, Link, Stack } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { getUserAuth, removeUserAuth } from '../../storage/AuthenticatorStorage';
import CanvaCartShop from '../utils/CanvaShopCart';
import Navbar from '../utils/Navbar';
import Logo from '/images/logo-no-b.gif';

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUserAuth();
    navigate('/login');
  };

  const isAuthenticated = !!getUserAuth()?.token;

  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
            <img src={Logo} alt="Logo" style={{ height: 60 }} />
          </Box>

          {/* Carrinho */}
          <IconButton color="inherit">
            <CanvaCartShop />
          </IconButton>

          {/* Conta / Login */}
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Minha Conta
            </Typography>

            {isAuthenticated ? (
              <Button color="error" onClick={handleLogout} size="small">
                Sair
              </Button>
            ) : (
              <Stack direction="row" spacing={1}>
                <Link href="/login" underline="none" variant="body2" color="primary">
                  Entrar
                </Link>
                <Typography variant="body2">/</Typography>
                <Link href="/register" underline="none" variant="body2" color="primary">
                  Cadastrar
                </Link>
              </Stack>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Navbar customizada */}
      <Box className="navbar">
        <Navbar />
      </Box>
    </>
  );
}
