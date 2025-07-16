import { useEffect, useState } from "react";
import Header from "../Home/Header";
import { useParams } from "react-router-dom";
import fetchProductById from "../../api/fetchProductById";
import CepInput from "../utils/CepInput";
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  CircularProgress,
  Paper,
} from "@mui/material";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id)
      .then((response) => setProduct(response))
      .catch((error) => {
        console.error("Erro ao buscar produto:", error);
      });
  }, [id]);

  if (!product) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Header />

      <Box sx={{ px: { xs: 2, md: 8 }, py: 4 }}>
        <Grid container spacing={4}>
          {/* Imagem */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Box
                component="img"
                src={product.imageUrl || product.img}
                alt={product.name}
                sx={{
                  width: "100%",
                  maxHeight: 500,
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            </Paper>
          </Grid>

          {/* Detalhes */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>

            <Typography variant="h5" color="primary" gutterBottom>
              {product.price?.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {product.description}
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography>Quantidade:</Typography>
              <TextField
                type="number"
                defaultValue={1}
                inputProps={{ min: 1 }}
                sx={{ width: 100, mt: 1 }}
              />
            </Box>

            <Button
              variant="contained"
              size="large"
              sx={{ mb: 4 }}
              id="buy-btn"
            >
              Comprar
            </Button>

            <Box sx={{ mt: 4 }}>
              <Typography variant="subtitle1" gutterBottom>
                Simulador de frete:
              </Typography>

              <CepInput type="text" placeholder="CEP" />

              <Button variant="outlined" sx={{ mt: 2 }}>
                Calcular
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
