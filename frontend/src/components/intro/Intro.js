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
                      Engineer graduated in Applied Informatics from the University in Lodz.
                      Have very solid fundamental knowledge of IT. During studies I was coding in C/C++14, python, java and android...
                      but finally decided to develop my passion in Web development. My commercial experience has been started in july 2021.
                      My native language is Polish, but don't hesitate to contact me also in English. (B2)
                    </p>
                    <section className="dd-intro__contact">
                      <h3 className="dd-intro__contact-title">Contact</h3>
                      <a
                        href="https://www.linkedin.com/in/danieldabic/"
                        className="dd-intro__contact-link"
                        data-tooltip="LinkedIn"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="linkedin"
                      >
                        <LinkedinIcon/>
                      </a>
                      <a
                        href="mailto:danieldabic@wp.pl"
                        className="dd-intro__contact-link"
                        data-tooltip="E-mail (not preferred)"
                        aria-label="email"
                      >
                        <EmailIcon/>
                      </a>
                      <a
                        href="tel: +48 796 988 221"
                        className="dd-intro__contact-link"
                        data-tooltip="Phone"
                        aria-label="phone"
                      >
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