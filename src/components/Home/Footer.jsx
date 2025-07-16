import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: '#f5f5f5', pt: 6, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Sobre Nós */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Sobre Nós
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Este site possui hospedagem gratuita e está em desenvolvimento para fins de estudo em programação.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={20} />
              </Link>
              <Link href="mailto:contato@exemplo.com" aria-label="Email">
                <FaEnvelope size={20} />
              </Link>
            </Stack>
          </Grid>

          {/* Links Úteis */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Links Úteis
            </Typography>
            <Stack spacing={1}>
              <Link href="/politica-de-privacidade" underline="hover" color="inherit">
                Política de Privacidade
              </Link>
              <Link href="/termos-de-uso" underline="hover" color="inherit">
                Termos de Uso
              </Link>
              <Link href="/faq" underline="hover" color="inherit">
                FAQ
              </Link>
            </Stack>
          </Grid>

          {/* Contato */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contato
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: contato@exemplo.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Telefone: (11) 1234-5678
            </Typography>
          </Grid>
        </Grid>

        {/* Rodapé Inferior */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Feito com <FaHeart color="red" /> por você | &copy; {new Date().getFullYear()} Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
