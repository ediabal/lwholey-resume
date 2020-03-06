import React from 'react';

const AboutSection = ({
  firstName,
  lastName,
  address,
  email,
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
          {address} · <a href={`mailto:${email}`}>{email}</a>
        </div>

        {paragraphs.map((paragraph, i) => (
          <p key={`clp-${i}`}>{paragraph}</p>
        ))}

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
