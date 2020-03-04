import React from 'react';
import { chunk } from 'lodash';

const SkillIcon = ({ skill }) => (
  <li className="skill-icon">
    <i className={`fab fa-${skill}`}></i>
  </li>
);

const SkillListItem = ({ skill }) => (
  <li className="skill-list-item">
    <i className="fa fa-check fa-li"></i> {skill}
  </li>
);

const SkillsSection = () => {
  const skills = [
    { name: 'JavaScript', icon: 'js-square' },
    { name: 'React.js', icon: 'react' },
    { name: 'HTML', icon: 'html5' },
    { name: 'CSS', icon: 'css3-alt' },
    { name: 'SASS', icon: 'sass' },
    { name: 'Storybook' },
    { name: 'Web Components' },
    { name: 'StencilJs' },
    { name: 'lit-html' },
    { name: 'Python', icon: 'python' },
    { name: 'Ruby' },
    { name: 'Ruby on Rails' },
    { name: 'GraphQL' },
    { name: 'nodejs', icon: 'node-js' },
    { name: 'npm', icon: 'npm' },
    { name: 'yarn', icon: 'yarn' },
    { name: 'Lerna' },
    { name: 'Docker', icon: 'docker' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Scrum & Kanban' },
  ];

  const skillIcons = skills.filter(({ icon = null }) => icon != null);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-section__content">
        <h2 className="skills-section__header">Skills</h2>

        <div className="skills-section__subheader">
          Programming Languages, Tools &amp; Proficiencies
        </div>

        <ul className="skills-section__icons">
          {skillIcons.map(({ icon }, i) => (
            <SkillIcon key={`skill-icon-${i}`} skill={icon} />
          ))}
        </ul>

        <div className="skills-section__skills">
          {chunk(skills, 5).map((chunk, i) => (
            <ul key={`sl-${i}`} className="skills-section__skills__list fa-ul">
              {chunk.map(({ name }, j) => (
                <SkillListItem key={`sl-${i}-${j}`} skill={name} />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
