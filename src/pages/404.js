import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <div className="e-404-page">
      <section id="about" className="e-404-page__section">
        <header>
          <h2>
            404
            <br />
            Page not found
            <br />
            Not a valid URL
          </h2>
        </header>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
