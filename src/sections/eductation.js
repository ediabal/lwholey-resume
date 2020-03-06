import React from 'react';
import LinkPreview from '../components/LinkPreview';
import { toKebabCase } from '../utils';

const EducationSectionItem = ({ title, degree, gpa, dates, url }) => (
  <div key={toKebabCase(title)} className="education-section-item">
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

const EducationSection = () => (
  <section id="education" className="education-section">
    <div className="education-section__content">
      <h2 className="education-section__header">Education</h2>

      <EducationSectionItem
        title="University of Mary Washington"
        degree="Bachelor of Science in Computer Science"
        gpa="3.68"
        dates="2011 - 2014"
        url="https://www.umw.edu/"
      />

      <EducationSectionItem
        title="Germanna Community College"
        degree="Associate of Arts and Sciences"
        gpa="3.74"
        dates="2009 - 2011"
        url="https://www.germanna.edu/"
      />
    </div>
  </section>
);

export default EducationSection;
