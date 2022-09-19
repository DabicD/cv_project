import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const FrknBurger = forwardRef(({
  type,
  color,
  size,
  onClick,
}, ref) => {
  const burgerHTML = () => {
    switch(type) {
      case burgerType.floatingLabel: {
        return (
          <button
            className={`dd-frknburger dd-frknburger--${burgerType.floatingLabel}`}
            onClick={onClick}
            style={size ? {width: size, height: size} : {}}
            ref={ref}
          >
            <div style={color ? {backgroundColor: color} : {}}></div>
            <div style={color ? {backgroundColor: color} : {}}></div>
            <div style={color ? {backgroundColor: color} : {}}></div>
          </button>
        );
      }
      default: 
        return <button className='dd-frknburger'>default</button>
    }
  };

  return burgerHTML();
});

FrknBurger.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func
};

export const burgerType = {
  floatingLabel: 'floatinglabel'
};

export default FrknBurger;