import React from 'react';

const SkillIcon = ({ skill, link }) => (
  <li className="skills-section__icons__icon">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <i className={`fab fa-${skill}`}></i>
    </a>
  </li>
);

const SkillIconsList = ({ skillIcons = [] }) => (
  <ul className="skills-section__icons">
    {skillIcons.map(({ icon, link }, i) => (
      <SkillIcon key={`si-${i}`} skill={icon} link={link} />
    ))}
  </ul>
);

const SkillListItem = ({ skill, link }) => (
  <li className="skills-section__list__item">
    <i className="fa fa-check"></i>&nbsp;
    <a href={link} target="_blank" rel="noopener noreferrer">
      {skill}
    </a>
  </li>
);

const SkillsList = ({ skills = [] }) => (
  <ul className="skills-section__list">
    {skills.map(({ name, link }, i) => (
      <SkillListItem key={`sli-${i}`} skill={name} link={link} />
    ))}
  </ul>
);

const Skills = ({ skills = [] }) => {
  const skillIcons = skills.filter(({ icon = null }) => icon != null);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-section__content">
        <h2 className="skills-section__header">Skills</h2>

        <div className="skills-section__subheader">
          Programming Languages, Tools &amp; Proficiencies
        </div>

        <SkillIconsList skillIcons={skillIcons} />

        <SkillsList skills={skills} />
      </div>
    </section>
  );
};

export default Skills;
