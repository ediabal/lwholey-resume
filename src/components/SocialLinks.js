import React from 'react';

const SocialLinks = ({ links = [], className = '' }) => (
  <div className={`social-links ${className}`}>
    {links.map((social, i) => {
      const { icon, url } = social;
      return (
        <a
          key={`sli-${i}`}
          className="social-links__link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={icon}></i>
        </a>
      );
    })}
  </div>
);

export default SocialLinks;
