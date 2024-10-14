
import PropTypes from 'prop-types'; // Opcional: Usar para validação de tipos em componentes de classe ou funcional.
import './button.css'

export default function Button({ text = 'Comprar', onClick, color = 'primary', className = 'btn btn-success', disabled = false }) {
  return (
    <div className='btn-container'>
      <div className='btn-content'>
        <button
          className={`${color} ${className}`} // Usando classes Bootstrap como exemplo
          onClick={onClick}
          disabled={disabled}
          style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
        >
          {text}
        </button>
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
