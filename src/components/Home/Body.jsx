import { useContext, useEffect, useState } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import ProductCard from '../utils/ProductCard';
import SearchBar from '../utils/SearchBar';
import Load from '../utils/Load';
import fetchProducts from '../../api/fetchProducts';
import { AppContext } from '../../context/appContext';

export default function Body() {
  const [products, setProducts] = useState([]);
  const { valueInput } = useContext(AppContext);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoad] = useState(true);

  useEffect(() => {
    setLoad(true);
    fetchProducts(valueInput)
      .then((response) => {
        if (Array.isArray(response)) {
          setAllProducts(response);
          setProducts(response);
        } else {
          console.error("Erro: resposta inválida de fetchProducts");
          setProducts([]);
        }
        setLoad(false);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
        setLoad(false);
      });
  }, []);

  useEffect(() => {
    if (!valueInput) {
      setProducts(allProducts);
    } else {
      const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(valueInput.toLowerCase()) ||
        product.description.toLowerCase().includes(valueInput.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  }, [valueInput, allProducts]);

  return (
    <>
      <SearchBar />

      <Box sx={{ backgroundColor: '#212121', p: 4, color: 'white' }}>
        <Typography variant="h5">Collapsed content</Typography>
        <Typography variant="body2">Toggleable via the navbar brand.</Typography>
      </Box>

      <Box className="banner-front">
        <img src="" alt="" className="front-img" />
      </Box>

      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Veja produtos selecionados especialmente para você
        </Typography>
        <Typography variant="body1">
          Devido à hospedagem gratuita, os produtos podem demorar bastante tempo para o completo carregamento na primeira vez
        </Typography>
      </Box>

      <Container sx={{ py: 4 }}>
        {loading ? (
          <Load />
        ) : (
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <ProductCard
                  data={{
                    name: product.name,
                    imageUrl: product.imageUrl,
                    price: product.price,
                    description: product.description,
                    linkTo: `/products/${product.id}`
                  }}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}
