import React from 'react';
import Breadcrumb from '../../components/common/Broadcrumb/Breadcrumb';
import SEO from '../../components/common/Seo';
import NavBar from '../../components/nav';
import { PROJECT_URL, SITE_IMAGE } from '../../constants';
import '../../assets/scss/projects.scss';
import { Link } from 'gatsby';
import Footer from '../../components/Footer';

const Project = () => {
  const breadcrumbs = [
    { name: 'Home', link: '/' },
    { name: 'Projects', link: '/projects/' }
  ];
  return (
    <>
      {' '}
      <div className="min-vh-100 ">
        <SEO
          title="Blogs | Ashish Patel: Full stack web developer | Headleass CMSs | React | JamStack | Express | Vue.js "
          description="I'm a passionate full stack web developer, a website is not just about technologies its more about business. So I just not build amazing website but a great business as well. My teck stack revolves around JavaScript including react, vue, nodejs, MERN and JAMstack."
          keywords="javascript, react, vuejs, developer, software engineer, nodejs, express, website, web developer, user interface, ui ux, blogs, articles, portfolio, jamshedpur, india"
          url={PROJECT_URL}
          image={SITE_IMAGE}
        />
        <NavBar />
        <div className="container mt-md-2 p-0">
          <Breadcrumb className="mt-3 d-block" breadcrumbs={breadcrumbs} />
          <p className="text-white-50 mt-3">These are some of my personal projects.</p>
          <div className="projects-container">
            <Link className="project" to="./zoombox">
              <img
                width={200}
                className="text-center mb-3"
                src="https://worldsofashishpatel.com/projects/docs/zoombox--an-interactive-and-feature-rich-vanilla-javascript-image-viewer-plugin-for-developers/images/zoombox_logo_dark.png"
              />
              <h4 className="text-white">Zoombox: Image viewer library for react</h4>
              <p className="text-white opacity-50">
                Zoombox is a lightweight library for adding an intreratcive image viewer into your react app.
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer className="mt-0" />
    </>
  );
};

export default Project;
