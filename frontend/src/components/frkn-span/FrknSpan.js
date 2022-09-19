import PropTypes from 'prop-types';

const FrknSpan = ({
  type,
  children,
  style,
  className,
  hover
}) => {
  const extraClasses = () => {
    const _variant = type ? ` dd-frknspan--${type}` : '';
    const _class = className ? ` ${className}` : '';
    const _hover = hover ? ` dd-frknspan__hover--${hover}` : '';
    return `${_hover}${_variant}${_class}`;
  }
  
  return (
    <span className={`dd-frknspan${extraClasses()}`} style={{...style}}>
      {children}
    </span>
  );
};

FrknSpan.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  hover: PropTypes.string
};

export const spanType = {
  neon: {
    sky: 'neon-sky',
    lavende: 'neon-lavende',
    white: 'neon-white'
  }
};
export const hoverType = {
  rainbow: 'rainbow',
  nohover: 'nohover'
};
export default FrknSpan;