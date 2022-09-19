import PropTypes from 'prop-types';
import FrknSpan, { spanType } from '../frkn-span/FrknSpan';
import logo from '../../assets/img/logo.png';

const Logo = ({
  onClick,
  href
}) => {
  return (
    <h1 className="dd-logo">
      <a className="dd-logo__link" href={href} onClick={onClick}>
        <img src={logo} alt="logo" className="dd-logo__image"/>
        <span className="dd-logo__text">
          <FrknSpan
            type={spanType.neon.sky}
            className="dd-logo__span"
          >
            DANIEL
          </FrknSpan>
          <FrknSpan
            type={spanType.neon.lavende}
            className="dd-logo__span"
          >
            DABIC
          </FrknSpan>
          <FrknSpan
            type={spanType.neon.white}
            className="dd-logo__span"
          >
            WEB DEVELOPER
          </FrknSpan>
        </span>
      </a>
  </h1>
  );
};

Logo.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string.isRequired
};

export default Logo;
