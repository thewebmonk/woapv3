import React from 'react';
import Button from '../common/Button';
import Particles from 'react-tsparticles';
import { config } from '../../constants/particles';

const Landing = () => {
  return (
    <div className="landing container">
      <p className="text-center mt-0 mt-md-4">
        HI, I’m Ashish Patel, a Full stack web developer
      </p>
      <h1>
        I build amazing user interfaces, APIs, <br /> Apps and much more !
      </h1>
      <div className="mt-3">
        <Button
          className="me-2"
          text="Read Blogs"
          onClick={() => {}}
          type="primary"
        />
        <Button
          className="ms-2"
          text="Portfolio"
          onClick={() => {}}
          type="primary-outline"
        />
      </div>
    </div>
  );
};

export default Landing;
