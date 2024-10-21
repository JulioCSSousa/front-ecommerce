import PropTypes from 'prop-types';
import './card.css';
import Button from './Button';

export default function ProductCard({ data }) {
  const { name, image, description, price } = data;
  console.log(image)

  return (
    <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4" id='card-container'>
      <div className="product-card">
        <a href="#">
          <img id="img-card" src={image} className="card-img" alt={name} />
        </a>
        <div className="card">
          <div className="card-text">
            {name}
            <div className='card-price'></div>
            <h4>{price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL'
            })}</h4>
            <div className='card-description'>
              <div className="description-content">
              {description}
              </div>
            </div> 
          </div>
        </div>
        <Button text="Comprar" />
      </div>
    </div>
  );
}


ProductCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
