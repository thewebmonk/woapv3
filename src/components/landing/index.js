import React from 'react';
import Button from '../common/Button';

const Landing = () => {
  return (
    <div className="landing container">
      <p className="text-center mt-0 mt-md-4">HI, I’m Ashish Patel, a Full stack web developer</p>
      <h1>
        I build amazing user interfaces, APIs, <br /> Apps and much more !
      </h1>
      <div className="mt-3">
        <Button className="me-2" text="Resume" onClick={() => {}} type="primary" link="/resume/" />
        <Button className="ms-2" text="Read Blogs" onClick={() => {}} type="primary-outline" link="/blogs/" />
      </div>
    </div>
  );
};

export default Landing;
