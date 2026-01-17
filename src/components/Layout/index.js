import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from '@assets/images/favicon.png';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

const IMAGE_URL = '@assets/images/favicon.jpg';
const META_DESCRIPTION = `It is a pleasure to invite you to our wedding. Please visit here to see more details`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Pranit Weds❤️ Janhavi</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        <meta property="og:title" content="Pranit Weds Janhavi" />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:site_name" content="Pranit Weds Janhavi" />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta name="twitter:title" content="Pranit Weds Janhavi" />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE_URL} />


        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
