import React from 'react';

const AboutSection = ({ firstName, lastName, address, email, socialLinks }) => {
  return (
    <section id="about" className="about-section">
      <div className="about-section__content">
        <h1 className="about-section__header">
          {firstName}
          <span className="about-section__header--primary">{lastName}</span>
        </h1>
        <div className="about-section__subheader">
          {address} · <a href={`mailto:${email}`}>{email}</a>
        </div>

        <p>
          Currently, I am working as a remote full-stack web developer building
          the Muse Design System component library for FireEye, Inc.
        </p>

        <p>
          I started my career in web development in 2014 when I got my first
          real taste of building web applications for the Naval Surface Warfare
          Center, Dahlgren Division (NSWCDD), a real mouthful, I know. After
          finishing what looked liked my last web application contract there I
          decided it was time to make the move to the private sector.
        </p>

        <p>
          Not long aftwards, I began working for FireEye, Inc. on their customer
          facing security platform portal and it was very cool! FireEye has been
          extremely beneficial to my personal development and growth as they
          have facilitied my interests and continued learning. They've also
          given me the freedom to work remotely on many different projects and
          teams thus allowing me to learn many new technologies along the way.
        </p>

        <p>
          For the past few years I've been heavily involved in designing and
          implementing front-end solutions in technologies such as React.js,
          Ruby on Rails and, most recently, Web Components. I continue to be
          very interested in web application development and learning new
          technologies and frameworks.
        </p>

        <p>Welcome and thank you for visiting this page!</p>

        <div className="social-icons">
          {socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <a key={url} href={url} target="_blank">
                <i className={`fab ${icon}`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
