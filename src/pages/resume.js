import * as React from 'react';
import NavBar from '../components/nav';
import Footer from '../components/Footer';
import '../assets/scss/pages.scss';
import '../assets/scss/resume.scss';
import Breadcrumb from '../components/common/Broadcrumb/breadcrumb';
import { object } from 'prop-types';
import { resume } from '../data/resume-data';
import SEO from '../components/common/Seo';
import { RESUME_URL } from '../constants';

const Portfolio = () => {
  const breadcrumbs = [
    { name: 'Home', link: '/' },
    { name: 'Resume', link: '/resume' }
  ];
  return (
    <>
      <SEO
        title="Resume | Ashish Patel: Full stack web developer | Headleass CMSs | React | JamStack | Express | Vue.js "
        description="I'm a passionate full stack web developer, a website is not just about technologies its more about business. So I just not build amazing website but a great business as well. My teck stack revolves around JavaScript including react, vue, nodejs, MERN and JAMstack."
        keywords="resume, resume builder, resume examples, cv, cv builder, develoepr resume, developer jobs ,javascript, react, vuejs"
        url={RESUME_URL}
        image=""
      />
      <div className="min-vh-100 ">
        <NavBar />
        <div className="container p-0">
          <Breadcrumb className="mt-3 d-block" breadcrumbs={breadcrumbs} />
          <div className="resume mt-5">
            <h1 className="text-white">Ashish Patel</h1>
            <a href="mailto:aspatel808@gmail.com" className="d-block mb-2">
              aspatel808@gmail.com
            </a>
            <p>Jamshedpur, India</p>
            {Object.entries(resume).map((data) => {
              const heading = data[0];
              const details = data[1];
              return (
                <>
                  <hr />
                  <div className="row m-0 p-0">
                    <div className="col-md-4 p-0">
                      <h5 className="resume-heading mb-4">{heading}</h5>
                    </div>
                    <div className="col-md-8 p-0">
                      {details.map((detail, index) => (
                        <div className={index !== 0 ? 'mt-4 pt-3' : ''}>
                          <h6 dangerouslySetInnerHTML={{ __html: detail.title }} />
                          <p
                            dangerouslySetInnerHTML={{
                              __html: detail.subtitle
                            }}
                          />

                          <p
                            dangerouslySetInnerHTML={{
                              __html: detail.para
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Portfolio;
