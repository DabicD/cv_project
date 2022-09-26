import PropTypes from 'prop-types';
import FrknFlipCard from '../frkn-flipcard/FrknFlipCard';
import { ReactComponent as Triangles } from '../../assets/icons/triangles.svg';

const TechCard = ({
  name,
  icon,
  description,
  group
}) => {

  const bgColor = (item) => {
    switch(item) {
      case 'FrontEnd':
        return 'rgba(255, 0, 0, 0.5)';
      case 'BackEnd':
        return 'rgba(0, 0, 0, 0.5)';
      case 'Utils':
        return 'rgba(0, 255, 0, 0.5)';
      default: 
        return 'rgba(0, 0, 255, 0.5)';
    }
  }

  const IconImg = () => (
    <img
      loading="lazy"
      src={require(`../../assets/icons/${icon.path}`)}
      alt={`${name} icon`}
      className="dd-techcard__icon"
      author={icon.author ? icon.author : null}
      license={icon.license ? icon.license : null}
      style={icon.extraStyle ? icon.extraStyle : null}
    />
  );

  return (
    <FrknFlipCard className="dd-techcard__custom-flipcard-layout">
      <FrknFlipCard.Front className="dd-techcard">
        <div className="dd-techcard__top">
          <IconImg/>
          <Triangles/>
        </div>
        <div className="dd-techcard__badges">
          {group.map((item, index) =>
            <span
              key={index}
              style={{backgroundColor: bgColor(item)}}
            >
              {item}
            </span>
          )}
        </div>
        <h4 className="dd-techcard__title">{name}</h4>
      </FrknFlipCard.Front>
      <FrknFlipCard.Back className="dd-techcard">
        <div className="dd-techcard__top">
          <IconImg/>
        </div>
        <p className="dd-techcard__description">{description.text}</p>
      </FrknFlipCard.Back>
    </FrknFlipCard>
  );
};

TechCard.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.object,
  description: PropTypes.object,
  group: PropTypes.array
};

export default TechCard;