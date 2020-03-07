import React from 'react';
import LinkPreview from '../LinkPreview';
import { toKebabCase } from '../../utils';

const EducationSectionItem = ({ title, degree, gpa, dates, url }) => (
  <div className="education-section-item">
    <div className="education-section-item__content">
      <LinkPreview url={url} placement="top-start">
        <h3 className="education-section-item__header">{title}</h3>
      </LinkPreview>
      <div className="education-section-item__subheader">
        {degree} · {gpa} GPA
      </div>
    </div>
    <div className="education-section-item__dates resume-date">{dates}</div>
  </div>
);

const EducationSection = ({ education = [] }) => (
  <section id="education" className="education-section">
    <div className="education-section__content">
      <h2 className="education-section__header">Education</h2>

      {education.map(edu => (
        <EducationSectionItem key={toKebabCase(edu.title)} {...edu} />
      ))}
    </div>
  </section>
);

export default EducationSection;
