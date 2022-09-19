import { useRef } from 'react';
import FrknSpan, { spanType } from '../frkn-span/FrknSpan';
import FrknBurger, { burgerType } from '../frkn-burger/FrknBurger';
import Logo from '../logo/Logo';

const Header = () => {
  const headerRef = useRef(null);
  const burgerRef = useRef(null);

  const handleClick = {
    closeHeader: () => {
      headerRef.current.classList.remove('dd-header--open');
      burgerRef.current.classList.remove('open');
    },
    toggleHeader: (event) => {
      headerRef.current.classList.toggle('dd-header--open');
      event.currentTarget.classList.toggle('open');
    }
  }

  return (
    <header className="dd-header" ref={headerRef}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="dd-header__content">
              <Logo href="#app" onClick={handleClick.closeHeader}/>
              <nav className="dd-header__nav">
                <ul className="dd-header__list">
                  <li className="dd-header__list-item">
                    <a href="#aboutme" onClick={handleClick.closeHeader}>
                      <FrknSpan
                        type={spanType.neon.sky}
                        className="dd-header__navspan"
                      >
                        About me
                      </FrknSpan>
                    </a>
                  </li>
                  <li className="dd-header__list-item">
                    <a href="#technologies" onClick={handleClick.closeHeader}>
                      <FrknSpan
                        type={spanType.neon.sky}
                        className="dd-header__navspan"
                      >
                        Technologies
                      </FrknSpan>
                    </a>
                  </li>
                  <li className="dd-header__list-item">
                    <a href="#skills" onClick={handleClick.closeHeader}>
                      <FrknSpan
                        type={spanType.neon.sky}
                        className="dd-header__navspan"
                      >
                        Skills
                      </FrknSpan>
                    </a>
                  </li>
                  <li className="dd-header__list-item">
                    <a href="#experience" onClick={handleClick.closeHeader}>
                      <FrknSpan
                        type={spanType.neon.sky}
                        className="dd-header__navspan"
                      >
                        Experience
                      </FrknSpan>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="dd-header__toggler">
                <FrknBurger
                  type={burgerType.floatingLabel}
                  onClick={handleClick.toggleHeader}
                  ref={burgerRef}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;