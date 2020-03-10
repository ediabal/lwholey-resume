import React from 'react';

import { toKebabCase } from '../../utils';

const EducationItem = ({ title, degree, gpa, dates, url }) => (
  <div className="education-section-item">
    <div className="education-section-item__content">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <h3 className="education-section-item__header">{title}</h3>
      </a>
      <div className="education-section-item__subheader">
        {degree} · {gpa} GPA
      </div>
    </div>
    <div className="education-section-item__dates resume-date">{dates}</div>
  </div>
);

const Education = ({ education = [] }) => (
  <section id="education" className="education-section">
    <div className="education-section__content">
      <h2 className="education-section__header">Education</h2>

      {education.map(edu => (
        <EducationItem key={toKebabCase(edu.title)} {...edu} />
      ))}
    </div>
  </section>
);

export default Education;
