import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import FrknSpan, { spanType } from '../frkn-span/FrknSpan';

import { ReactComponent as EmailIcon } from '../../assets/icons/email.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg';
import danielPhoto from '../../assets/img/daniel_photo.png';

const titleData = 'ABOUT ME';

const Intro = ({
  id,
  className
}) => {
  const [title, setTitle] = useState('');
  const titleRef = useRef(null);

  useEffect(() => {
    let interval = setInterval(() => {
      setTitle(title => {
        let nextLength = title.length + 1;
        if(nextLength === titleData.length) {
          clearInterval(interval);
        }
        return titleData.slice(0, nextLength);
      });
    }, 200)
    return () => {
      clearInterval(interval);
    };
  },[])

  return (
    <section id={id} className={`dd-intro${className ? ` ${className}` : ''}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-10">
              <div className="dd-intro__content">
                <article className="dd-intro__article">
                  <h2 ref={titleRef} className="dd-intro__title">
                    <FrknSpan type={spanType.neon.sky}>{title}</FrknSpan>
                  </h2>
                  <section className="dd-intro__container">
                    <img src={danielPhoto} alt="author photography" className="dd-intro__image"/>
                    <p className="dd-intro__text">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <section className="dd-intro__contact">
                      <h3 className="dd-intro__contact-title">Contact</h3>
                      <a href="https://www.linkedin.com/in/danieldabic/" className="dd-intro__contact-link" data-tooltip="LinkedIn" target="_blank" rel="noreferrer">
                        <LinkedinIcon/>
                      </a>
                      <a href="mailto:danieldabic@wp.pl" className="dd-intro__contact-link" data-tooltip="E-mail (not preferred)">
                        <EmailIcon/>
                      </a>
                      <a href="tel: +48 796 988 221" className="dd-intro__contact-link" data-tooltip="Phone">
                        <PhoneIcon/>
                      </a>
                    </section>
                  </section>
                </article>
              </div>
          </div>
        </div> 
      </div>
    </section>
  );
};

Intro.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string
};

export default Intro;