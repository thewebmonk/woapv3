import React, { useState } from 'react';
import Search from '../common/Search';
import { useTransition, animated } from 'react-spring';
import woaplogo from '../../assets/images/woap_logo.png';
import Links from './components/Links';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const transition = useTransition(showMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  const transition2 = useTransition(showMenu, {
    from: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 100, opacity: 0 },
    delay: 200
  });

  return (
    <nav>
      <div className="brand-with-search">
        <div className="brand">
          <img src={woaplogo} />
        </div>
        <div className="actions">
          <Search />
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="ham d-flex d-md-none"
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
      {transition((style, item) =>
        item ? (
          <animated.div style={style} className="overloay d-block d-md-none" />
        ) : null
      )}
      <div className="links d-none d-md-flex">
        <Links />
      </div>
      {transition2((style, item) =>
        item ? (
          <animated.div
            style={style}
            className="links d-flex d-md-none"
            onClick={() => {
              setShowMenu(false);
              console.log(showMenu);
            }}
          >
            <div
              className="cross"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <div className="bar" />
              <div className="bar" />
            </div>
            <Links />
          </animated.div>
        ) : null
      )}
    </nav>
  );
};
export default Nav;
