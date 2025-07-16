import { useContext, useState } from "react";
import { AppContext } from "../../context/appContext";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Typography,
  Button as MuiButton,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import Button from "./Button";

export default function ProductCard({ data }) {
  const { setCartItems } = useContext(AppContext);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddCart = () => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.some((item) => item.name === data.name);
      if (!itemExists) {
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
        return [...prevItems, { ...data, quantity: 1 }];
      }
      return prevItems.map((item) =>
        item.name === data.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        maxWidth: 300,
        borderRadius: 3,
        boxShadow: 3,
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      <RouterLink to={data.linkTo} style={{ textDecoration: "none" }}>
        <CardMedia
          component="img"
          image={data.imageUrl}
          alt={`Imagem de ${data.name}`}
          sx={{
            height: "180px",
            objectFit: "contain",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            transition: "0.3s",
          }}
        />
      </RouterLink>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          {data.name}
        </Typography>

        <Typography variant="h6" color="primary" gutterBottom>
          {data.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {data.description}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 2,
          pb: 2,
        }}
      >
        <MuiButton
          size="small"
          variant="outlined"
          color="primary"
          onClick={handleAddCart}
        >
          {isAdded ? "Adicionado!" : "Comprar"}
        </MuiButton>

        <MuiButton
          size="small"
          variant="contained"
          component={RouterLink}
          to="/OrderSummary"
        >
          Ver Carrinho
        </MuiButton>
      </CardActions>
    </Card>
  );
}
