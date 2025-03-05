
import { useEffect, useState } from "react";
import Header from "../Home/Header";
import './ProductDetail.css'
import { useParams } from "react-router-dom";
import fetchProductById from "../../api/fetchProductById";
import CepInput from "../utils/CepInput";


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
        return <div>Loading...</div>;
    }
    return (
        <>
            <Header />
            <div className="img-body">
            <img src={product.img} alt={product.name} className="product-image" />

            </div>
            <div className="product-detail">
                <div className="product-card-large">
                    <div className="image-container">
                        <img
                            src={product.imageUrl}
                            alt={product.description}
                            className="product-image"
                        />
                    </div>
                </div>
                <div className="side-detail">
                    <div className="side-name">{product.name}</div>
                    <div className="price">
                        <h2>{product.price ?? 0}</h2>
                    </div>
                    <div className="description">
                        <h3>{product.description}</h3>
                    </div>
                    <div className="quant">
                        <label>
                            Quantidade:
                        </label>
                        <input type="number" min="1" />
                    </div>
                    <div className="btn-cont">
                        <button className="btn btn-primary" id="buy-btn">Comprar</button>
                    </div>
                    <div className="cep">
                        <label>
                            Simulador de frete:
                        </label>
                        <div>
                            <CepInput type="text" id="cep" placeholder="CEP" />
                        </div>
                        <div className="cal-btn">
                            <button className="btn btn-primary">
                                Calcular
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}