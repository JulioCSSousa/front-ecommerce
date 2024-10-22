
import PropTypes from 'prop-types'; 
import './Button.css'
import { BsFillCartPlusFill } from "react-icons/bs";


export default function Button({ onClick, text = 'Comprar', disabled = false }) {

  return (
    <div className='btn-container'>
      <div className='btn-content'>
        <BsFillCartPlusFill 
          onClick={onClick}
          disabled={disabled}
          style={{ cursor: disabled ? 'not-allowed' : 'pointer', width: '30px', height: '30px', background: 'none'}}
        >
          {text}
        </BsFillCartPlusFill>
      </div>
    </div>
  );
}


Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool
};
