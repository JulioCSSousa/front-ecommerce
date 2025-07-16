import { useContext, useEffect, useState } from 'react';
import { Badge, IconButton, Drawer, Box, Typography, Button, Stack } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { AppContext } from '../../context/appContext';
import CartItem from './CartItem';
import { Link as RouterLink } from 'react-router-dom';

export default function CanvaCartShop() {
  const { cartItems } = useContext(AppContext);
  const initialIsMobile = window.innerWidth <= 500;
  const [isMobile, setIsMobile] = useState(initialIsMobile);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <>
      <Stack direction="row" spacing={1} alignItems="center" className="cart-container">
        <Badge badgeContent={totalItems} color="secondary" className="cart-span-num">
          <IconButton onClick={toggleDrawer(true)} color="primary">
            <ShoppingBagIcon fontSize="large" />
          </IconButton>
        </Badge>

        {!isMobile && (
          <Typography variant="body1" className="label-cart">
            Carrinho
          </Typography>
        )}
      </Stack>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: isMobile ? 300 : 400, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Carrinho
          </Typography>

          <Box className="item-content" sx={{ mb: 3 }}>
            {cartItems.length === 0 ? (
              <Typography>Seu carrinho está vazio.</Typography>
            ) : (
              cartItems.map((cartItem) => (
                <CartItem key={cartItem.name} data={cartItem} />
              ))
            )}
          </Box>

          <Button
            fullWidth
            variant="contained"
            component={RouterLink}
            to="/OrderSummary"
            onClick={toggleDrawer(false)}
          >
            Comprar
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
