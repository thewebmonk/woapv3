import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';

const SEO = ({ title, description, image, keywords, isArticle }) => {
  const { href } = useLocation();
  // console.log(title, description, image, keywords);
  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
      {/* <meta name="image" content={image} /> */}

      <meta property="og:url" content={href} />

      {isArticle && <meta property="og:type" content="article" />}

      {title && <meta property="og:title" content={title} />}

      {description && <meta property="og:description" content={description} />}

      {image && <meta property="og:image" content={image} />}

      <meta name="robots" content={keywords} />
      <meta name="keywords" content={keywords} />
      <meta name="googlebot" content={keywords} />

      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}

      <meta name="theme-color" content="#151821" />
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  isArticle: PropTypes.bool
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  isArticle: false
};
