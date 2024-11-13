
import PropTypes from 'prop-types';
import './Button.css'
import { BsFillCartPlusFill } from "react-icons/bs";


export default function Button({ onClick, text = 'Comprar', disabled = false }) {

  return (
    <BsFillCartPlusFill
      onClick={onClick}
      disabled={disabled}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer', width: '90%', height: '80%', background: 'none' }}
    >
      {text}
    </BsFillCartPlusFill>
  );
}


Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool
};
