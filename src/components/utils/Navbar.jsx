import { useState } from "react";
import { fetchProductsByCategory } from "../../api/fetchProductsByCategory";
import {
  Box,
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  CircularProgress,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCategoryClick = async (categoryName) => {
    setCategory(categoryName);
    setShowModal(true);
    setLoading(true);
    const fetchedProducts = await fetchProductsByCategory(categoryName);
    setProducts(fetchedProducts);
    setLoading(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setProducts([]);
  };

  const categories = [
    "CORPO E BANHO",
    "COLÔNIAS",
    "ÁGUAS PERFUMADAS",
    "DIFUSOR DE AROMAS",
    "AROMATIANTES DE AMBIENTE",
    "ESSÊNCIA CONCENTRADA",
  ];

  return (
    <>
      <Box
        component="nav"
        sx={{
          width: "100%",
          backgroundColor: "#f5f5f5",
          py: 2,
          px: 3,
          borderBottom: "1px solid #ccc",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          flexWrap="wrap"
        >
          {categories.map((cat) => (
            <Button
              key={cat}
              variant="text"
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </Button>
          ))}
        </Stack>
      </Box>

      <Dialog open={showModal} onClose={closeModal} fullWidth maxWidth="md">
        <DialogTitle>{category}</DialogTitle>
        <DialogContent>
          {loading ? (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <CircularProgress />
              <Typography variant="body2" sx={{ mt: 2 }}>
                Carregando produtos...
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card sx={{ height: "100%" }}>
                    <CardMedia
                      component="img"
                      image={product.imageUrl}
                      alt={product.name}
                      sx={{ height: 160, objectFit: "cover" }}
                    />
                    <CardContent>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
          <Box sx={{ textAlign: "right", mt: 3 }}>
            <Button onClick={closeModal}>Fechar</Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
