import React from 'react';

const AboutSection = ({
  firstName,
  lastName,
  title,
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
          <div className="about-section__subheader--first">{title}</div>
          <div className="about-section__subheader--second">{address}</div>
        </div>

        {paragraphs.map((paragraph, i) => (
          <p key={`clp-${i}`}>{paragraph}</p>
        ))}

        <div className="social-icons">
          {socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                <i className={icon}></i>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
