import { useState, useContext } from 'react'
import { AppContext } from '../../context/appContext'
import { Box, InputBase, IconButton, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export default function SearchBar() {
  const { setValueInput } = useContext(AppContext)
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()
    setValueInput(searchValue)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSearch}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 3,
        px: 2,
      }}
    >
      <Paper
        component="form"
        sx={{
          p: '2px 8px',
          display: 'flex',
          alignItems: 'center',
          width: { xs: '100%', sm: '500px' },
          borderRadius: 3,
          boxShadow: 2,
        }}
      >
        <InputBase
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          sx={{ ml: 1, flex: 1 }}
          placeholder="O que deseja encontrar?"
          inputProps={{ 'aria-label': 'Buscar' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="buscar">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  )
}
