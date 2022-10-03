import PropTypes from 'prop-types';

const Footer = ({
  id,
  className
}) => {
  return (
    <footer id={id} className={`dd-footer${className ? ` ${className}` : ''}`}>
      <small className="dd-footer__copyright">Copyright &copy; 2022 Daniel Dabic, All Rights Reserved </small>
    </footer>
  );
}

Footer.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string
};

export default Footer;