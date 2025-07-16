import { useContext, useState } from 'react'
import { AppContext } from '../../context/appContext'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { IoRemoveCircleOutline } from 'react-icons/io5'
import { Box, Typography, IconButton } from '@mui/material'

export default function ItemOrder({ data }) {
  const { image, name, price, quantity } = data
  const { setCartItems } = useContext(AppContext)
  const [setIsAdded] = useState(false)

  const handleAddCart = () => {
    setCartItems(prevItems => {
      const itemExists = prevItems.some(item => item.name === data.name)
      if (!itemExists) {
        setIsAdded(true)
        setTimeout(() => setIsAdded(false), 2000)
        return [...prevItems, { ...data, quantity: 1 }]
      }
      return prevItems.map(item =>
        item.name === data.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    })
  }

  const handleRemoveCart = () => {
    setCartItems(prevItems => {
      const itemExists = prevItems.some(item => item.name === data.name)
      if (itemExists) {
        return prevItems
          .map(item =>
            item.name === data.name
              ? { ...item, quantity: (item.quantity || 1) - 1 }
              : item
          )
          .filter(item => item.quantity > 0)
      }
      return prevItems
    })
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2,
        p: 1,
        borderBottom: '1px solid #e0e0e0'
      }}
    >
      {/* Imagem */}
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          width: 80,
          height: 80,
          objectFit: 'cover',
          borderRadius: 1
        }}
      />

      {/* Controles */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={handleAddCart} size="large">
          <IoIosAddCircleOutline size={30} />
        </IconButton>
        <Typography sx={{ mx: 1 }}>{quantity}</Typography>
        <IconButton onClick={handleRemoveCart} size="large">
          <IoRemoveCircleOutline size={30} />
        </IconButton>
      </Box>

      {/* Informações */}
      <Box sx={{ textAlign: 'right', maxWidth: 160 }}>
        <Typography variant="subtitle2" fontWeight={600}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          R$ {(quantity * price).toFixed(2)}
        </Typography>
      </Box>
    </Box>
  )
}
