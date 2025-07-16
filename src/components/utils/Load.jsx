import { Box, CircularProgress } from '@mui/material'

export default function Load() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 4
      }}
    >
      <CircularProgress size={80} thickness={5} />
    </Box>
  )
}
