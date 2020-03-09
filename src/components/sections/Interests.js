import React from 'react';

const Interests = ({ paragraphs = [] }) => (
  <section id="interests" className="interests-section">
    <div className="interests-section__content">
      <h2 className="interests-section__header">Interests</h2>
      {paragraphs.map((paragraph, i) => (
        <p key={`ip-${i}`}>{paragraph}</p>
      ))}
    </div>
  </section>
);

export default Interests;
