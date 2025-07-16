import { useContext } from 'react'
import { AppContext } from '../../context/appContext'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
  Paper,
  Divider,
} from '@mui/material'
import {
  FaArrowLeft,
  FaCreditCard,
  FaTrash,
  FaPlus,
  FaMinus,
  FaShoppingCart,
} from 'react-icons/fa'

export default function OrderSummary() {
  const { setCartItems, cartItems } = useContext(AppContext)
  const navigate = useNavigate()

  const handleRemoveCart = (itemToRemove) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.name === itemToRemove.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  const handleAddCart = (itemToAdd) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.name === itemToAdd.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const handleDecreaseCart = (itemToDecrease) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.name === itemToDecrease.name && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  const handleClearCart = () => {
    setCartItems([])
  }

  const handleGoBack = () => {
    navigate('/')
  }

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
        <Button onClick={handleGoBack} startIcon={<FaArrowLeft />}>
          Voltar
        </Button>
        <Typography variant="h5" fontWeight="bold">
          <FaShoppingCart style={{ marginRight: 8 }} />
          Meu Carrinho
        </Typography>
        {cartItems.length > 0 && (
          <Button onClick={handleClearCart} color="error" startIcon={<FaTrash />}>
            Limpar Carrinho
          </Button>
        )}
      </Box>

      {/* Conteúdo */}
      {cartItems.length === 0 ? (
        <Box textAlign="center" sx={{ mt: 8 }}>
          <Typography variant="h6">Seu carrinho está vazio. 🛒</Typography>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleGoBack}
          >
            Ver Produtos
          </Button>
        </Box>
      ) : (
        <Grid container spacing={4}>
          {/* Lista de Itens */}
          <Grid item xs={12} md={8}>
            {cartItems.map(cartItem => (
              <Paper
                key={cartItem.id}
                elevation={2}
                sx={{
                  p: 2,
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <img
                    src={cartItem.imageUrl}
                    alt={cartItem.name}
                    style={{ width: 80, height: 80, borderRadius: 8, objectFit: 'cover' }}
                  />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {cartItem.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Preço:{' '}
                      {cartItem.price.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                      })}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IconButton onClick={() => handleDecreaseCart(cartItem)}>
                    <FaMinus />
                  </IconButton>
                  <Typography>{cartItem.quantity}</Typography>
                  <IconButton onClick={() => handleAddCart(cartItem)}>
                    <FaPlus />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleRemoveCart(cartItem)}>
                    <FaTrash />
                  </IconButton>
                </Box>
              </Paper>
            ))}
          </Grid>

          {/* Resumo do Pedido */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Resumo do Pedido
              </Typography>
              <Box sx={{ mb: 1 }}>
                <Typography>Subtotal:</Typography>
                <Typography fontWeight="bold">
                  {calculateTotalPrice().toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography>Frete:</Typography>
                <Typography fontWeight="bold">Grátis</Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Total:
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {calculateTotalPrice().toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </Typography>
              </Box>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<FaCreditCard />}
                onClick={() => navigate('/checkout')}
              >
                Finalizar Compra
              </Button>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Box>
  )
}
