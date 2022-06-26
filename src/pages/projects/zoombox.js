import React, { useState } from 'react';
import Breadcrumb from '../../components/common/Broadcrumb/Breadcrumb';
import SEO from '../../components/common/Seo';
import NavBar from '../../components/nav';
import { SITE_IMAGE, ZOOMBOX_URL } from '../../constants';
import '../../assets/scss/zoombox.scss';
import Zoombox from 'zoombox';
import { PrismCode } from 'react-prism';
import 'prismjs';
import 'prismjs/components/prism-jsx.min';
import Footer from '../../components/Footer';

const zoombox = () => {
  const [active, setActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const breadcrumbs = [
    { name: 'Home', link: '/' },
    { name: 'Projects', link: '/projects/' },
    { name: 'Zoombox', link: '/projects/zoombox/' }
  ];
  const images = [
    {
      src: 'https://picsum.photos/id/221/1200/800',
      caption: 'This is caption one'
    },
    {
      src: 'https://picsum.photos/id/198/1200/800',
      caption: 'This is caption two'
    },
    {
      src: 'https://picsum.photos/id/128/1200/800',
      caption: 'This is caption three'
    }
  ];
  return (
    <>
      <div className="min-vh-100 ">
        <SEO
          title="ZoomBox | Image viewer library for react apps | Ashish Patel  "
          description="Zoombox : An Interactive React Image Viewer Library with zooming options"
          keywords="zoombox, zoombox by ashish patel, javascript image viewer, html image viewer, w3school, zoombox image viewer, zoombox, web developer in Jamshedpur, india, jharkhand, javascript plugin, web plugin, wordpress theme, lightbox, zoombox ashish, jquery plugin, jquery themes, javascript image, image viewe"
          url={ZOOMBOX_URL}
          image={SITE_IMAGE}
        />
        <NavBar />
        <div className="container mt-md-2 p-0">
          <Breadcrumb className="mt-3 d-block" breadcrumbs={breadcrumbs} />
          <div className="d-flex justify-content-center flex-column align-items-center">
            <img
              width={200}
              className="text-center mt-5"
              src="https://worldsofashishpatel.com/projects/docs/zoombox--an-interactive-and-feature-rich-vanilla-javascript-image-viewer-plugin-for-developers/images/zoombox_logo_dark.png"
            />
            <p className="text-white-50 mt-3">Image viewer librray for react apps</p>
          </div>

          <h5 className="text-white mt-5">Preface</h5>
          <p className="text-white-50 mb-2">
            Zoombox is inspired from my original zoombox script, which was originally developed in vanilla javascript.
            Please{' '}
            <a
              className="text-primary"
              target={'_blank'}
              rel="noopener noreferrer"
              href="https://worldsofashishpatel.com/projects/docs/zoombox--an-interactive-and-feature-rich-vanilla-javascript-image-viewer-plugin-for-developers/"
            >
              click here
            </a>{' '}
            to implement zoombox in non-react apps.
          </p>
          <p className="text-white-50 mb-2">
            Please consider contributing to zoombox{' '}
            <a target={'_blank'} rel="noopener noreferrer" href="https://github.com/thewebmonk/react-zoombox">
              at here
            </a>
            .
          </p>
          <h5 className="text-white mt-5">Demo</h5>
          <p className="text-white-50 mb-2">Click / Tap below images</p>
          <div className="row m-0 p-0">
            {images.map((image, index) => (
              <div key={index} className={`col-md-4 mt-3 p-0 pe-0 ps-0 ${(index + 1) % 3 === 0 ? '' : 'pe-md-4'}`}>
                <img
                  onClick={() => {
                    setSelectedImage(index);
                    setActive(true);
                  }}
                  className="img-fluid zoombox-image"
                  src={image.src}
                  alt={image.caption}
                />
              </div>
            ))}
          </div>

          <h5 className="text-white mt-5">Sample</h5>
          <pre>
            <PrismCode className={`language-js`}>
              {`import React, { useState } from "react";
import Zoombox from "zoombox";

const App = () => {
  const [active, setActive] = useState(false);
  const images = [
    {
      src: "https://picsum.photos/id/222/1200/800",
      caption: "This is caption one",
    },
    {
      src: "https://picsum.photos/id/230/1200/800",
      caption: "This is caption two",
    },
    {
      src: "https://picsum.photos/id/120/1200/800",
      caption: "This is caption three",
    },
  ];
  return (
    <>
      <button onClick={() => setActive(true)}>
        Click to Open Zoombox, or click on above images
      </button>
      <Zoombox
        {...{
          images,
          active,
          setActive,
        }}
      />
    </>
  );
};
export default App;`}
            </PrismCode>
          </pre>
          <h5 className="text-white mt-5">Features yet to come</h5>
          <ul className="text-white-50">
            <li className="mb-3">Lazy loading</li>
            <li className="mb-3 mt-3">Touch control for mobile devices</li>
            <li className="mb-3">Slide show</li>
            <li className="mb-3">Image Drag</li>
          </ul>
        </div>
      </div>
      <Zoombox
        {...{
          images,
          active,
          setActive,
          selectedImage,
          maskOpacity: 0.9,
          maskClosable: true
        }}
      />
      <Footer />
    </>
  );
};

export default zoombox;
