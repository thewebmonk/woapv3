import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { SITE_ICON } from '../../../constants';

const SEO = ({ title, description, image, keywords, url }) => {
  // console.log(title, description, image, keywords);
  return (
    <Helmet title={title} htmlAttributes={{ lang: 'en' }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Ashish Patel" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <link rel="shortcut icon" type="image/x-icon" href={SITE_ICON} />
      <link rel="canonical" href={url} />
      <meta name="google-site-verification" content="k99fDQnnvg1K6mixKZeeoZktaDgckuvKIe0ZrmMT9uE" />
      <meta name="robots" content={keywords} />
      <meta name="googlebot" content={keywords} />
      <meta name="keywords" content={keywords} />
      <meta itemProp="name" content={title} />
      <meta itemProp="url" content={url} />
      <meta itemProp="description" content={description} />
      <meta itemProp="thumbnailUrl" content={image} />
      <meta itemProp="image" content={image} />
      <link rel="image_src" href={SITE_ICON} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={'Worlds of Ashish Patel'} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="400" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={description} />
      <meta name="theme-color" content="#151821" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
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
