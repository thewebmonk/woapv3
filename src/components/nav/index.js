import { Link } from 'gatsby';
import React, { useState } from 'react';
import { fadeIn, fadeOut } from 'react-animations';
import Search from '../common/Search';
import styled, { keyframes, css } from 'styled-components';
import { useTransition, animated } from 'react-spring';

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
  // const fadeinAnimation = keyframes`${fadeIn}`;
  // const fadeOutAnimation = keyframes`${fadeOut}`;
  // const fadein = css`
  //   animation: 1s ${fadeinAnimation};
  // `;
  // const fadeout = css`
  //   animation: 1s ${fadeOutAnimation};
  // `;
  // const FadeInDiv = styled.div`
  //   ${(props) => (props.show ? fadeout : fadein)};
  // `;

  return (
    <nav>
      <div className="brand-with-search">
        <div className="brand">
          <img src="/images/woap_logo.png" />
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
        <Link>Portfolio</Link>
        <Link>Blogs</Link>
        <Link>Resume</Link>
        <Link>Contact</Link>
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
            <Link>Portfolio</Link>
            <Link>Blogs</Link>
            <Link>Resume</Link>
            <Link>Contact</Link>
          </animated.div>
        ) : null
      )}
    </nav>
  );
};
export default Nav;
