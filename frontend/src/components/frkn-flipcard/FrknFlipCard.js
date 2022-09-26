import PropTypes from 'prop-types';

const FrknFlipCard = ({
  children,
  className,
  style
}) => {
  return (
    <article
      onClick={(e) => {e.currentTarget.classList.toggle('dd-frknflipcard--flip')}}
      className={`dd-frknflipcard${className ? ` ${className}` : ''}`}
      style={style ? style : null}
    >
      {children}
    </article>
  );
};

const FrontSide = ({
  children,
  className,
  style
}) => {
  return (
    <section
      className={`dd-frknflipcard__section dd-frknflipcard__section--front${className ? ` ${className}` : ''}`}
      style={style ? style : null}
    >
      {children}
    </section>
  );
};

const BackSide = ({
  children,
  className,
  style
}) => {
  return (
    <section
      className={`dd-frknflipcard__section dd-frknflipcard__section--back${className ? ` ${className}` : ''}`}
      style={style ? style : null}
    >
      {children}
    </section>
  );
};

const propTypesConfig = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object
};
FrontSide.propTypes = propTypesConfig;
BackSide.propTypes = propTypesConfig;
FrknFlipCard.propTypes = propTypesConfig;

FrknFlipCard.Front = FrontSide;
FrknFlipCard.Back = BackSide;
export default FrknFlipCard;