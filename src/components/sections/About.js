import React from 'react';

import SocialLinks from '../SocialLinks';

const About = ({
  firstName,
  lastName,
  title,
  address,
  socialLinks = [],
  paragraphs = [],
}) => {
  return (
    <section id="about" className="about-section">
      <div className="about-section__content">
        <h1 className="about-section__header">
          {firstName}
          <span className="about-section__header--primary">{lastName}</span>
        </h1>
        <div className="about-section__subheader">
          <div className="about-section__subheader--first">{title}</div>
          <div className="about-section__subheader--second">{address}</div>
        </div>

        {paragraphs.map((paragraph, i) => (
          <p key={`clp-${i}`}>{paragraph}</p>
        ))}

        <SocialLinks links={socialLinks} />
      </div>
    </section>
  );
};

export default About;
