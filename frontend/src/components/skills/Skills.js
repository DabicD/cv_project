import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import FrknSpan, { spanType } from '../frkn-span/FrknSpan';
import { isMobile } from '../../utils/utils'; 
import data from './skillsData';

const Skills = ({
  id,
  className
}) => {
  const [mobile, setMobile] = useState(isMobile());

  useEffect(() => {
    const checkMobile = () => {
      if(isMobile() !== mobile) {
        setMobile(isMobile());
      }
    };
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobile]);

  const SkillsArticle = ({
    item
  }) => (
    <article className="dd-skills__article">
      <h3 className="dd-skills__sub-title">{item.name}</h3>
      <ul className="dd-skills__list">
        {item.list.map((item, index) => (
          <li key={index} className="dd-skills__list-item">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );

  return (
    <section id={id} className={`dd-skills${className ? ` ${className}` : ''}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-10">
            <h2 className="dd-skills__title">
              <FrknSpan type={spanType.neon.sky}>SKILLS</FrknSpan>
            </h2>
            {!mobile ? 
              <div className="d-flex justify-content-around flex-wrap">
                {data.map((item, index) => <SkillsArticle item={item} key={index}/>)}
              </div>
            : null}
          </div>
        </div>
      </div>
      {mobile ?
        <div className="container--fluid">
          <div className="row g-0">
            <div className="col">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={60}
              slidesPerView={1}
              navigation
              pagination={{
                clickable: true
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: true
              }}
            >
              {data.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <SkillsArticle item={item}/>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            </div>
          </div>
        </div>
      : null}
    </section>
  );
};

Skills.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string
};

export default Skills;