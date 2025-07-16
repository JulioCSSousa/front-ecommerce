import { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { BsFillCartDashFill } from 'react-icons/bs';
import { Box, Typography, Button, IconButton } from '@mui/material';

export default function CartItem({ data }) {
  const { imageUrl, name, price, quantity } = data;
  const { setCartItems } = useContext(AppContext);

  const handleRemoveCart = () => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.name === name
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const handleAddCart = () => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.name === name
          ? { ...item, quantity: (item.quantity || 0) + 1 }
          : item
      )
    );
  };

  const handleDecreaseCart = () => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.name === name
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        borderBottom: '1px solid #ddd',
        pb: 2,
        mb: 2
      }}
    >
      <Box sx={{ flexShrink: 0 }}>
        <img src={imageUrl} alt={name} style={{ width: 80, height: 80, borderRadius: 4 }} />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          R$ {(quantity * price).toFixed(2)}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button variant="outlined" size="small" onClick={handleDecreaseCart}>-</Button>
          <Typography>{quantity}</Typography>
          <Button variant="outlined" size="small" onClick={handleAddCart}>+</Button>
        </Box>
      </Box>

      <IconButton color="error" onClick={handleRemoveCart}>
        <BsFillCartDashFill />
      </IconButton>
    </Box>
  );
}
