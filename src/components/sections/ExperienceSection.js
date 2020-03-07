import React from 'react';
import { toKebabCase } from '../../utils';

const ExperienceSectionItemDetailsList = ({ title, details = [] }) => (
  <div className="experience-section-item-details-list">
    <h4>Details:</h4>
    <ul className="experience-section-item-details-list__list fa-ul">
      {details.map((detail, i) => (
        <li
          key={`${toKebabCase(title)}-d-${i}`}
          className="experience-section-item-details-list__list__item"
        >
          <i className="fa fa-check fa-li"></i> {detail}
        </li>
      ))}
    </ul>
  </div>
);

const ExperienceSectionItem = ({
  title,
  subtitle,
  content,
  details = [],
  dates,
}) => {
  return (
    <div className="experience-section-item">
      <div className="experience-section-item__content">
        <h3 className="experience-section-item__header">{title}</h3>
        <div className="experience-section-item__subheader">{subtitle}</div>
        <p>{content}</p>
        {details.length > 0 && (
          <ExperienceSectionItemDetailsList title={title} details={details} />
        )}
      </div>
      <div className="experience-section-item__dates resume-date">{dates}</div>
    </div>
  );
};

const ExperienceSection = ({ experience = [] }) => (
  <section id="experience" className="experience-section">
    <div className="experience-section__content">
      <h2 className="experience-section__header">Experience</h2>

      {experience.map((job, i) => (
        <ExperienceSectionItem key={`j-${i}`} {...job} />
      ))}
    </div>
  </section>
);

export default ExperienceSection;
