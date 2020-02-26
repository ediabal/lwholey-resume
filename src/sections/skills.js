import React from 'react';
import { chunk } from 'lodash';

const SkillIcon = ({ skill }) => (
  <li className="list-inline-item">
    <i className={`fab fa-${skill}`}></i>
  </li>
);

const SkillListItem = ({ skill }) => (
  <li>
    <i className="fa fa-check fa-li text-primary"></i> {skill}
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
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="skills"
    >
      <div className="w-100">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">
          Programming Languages, Tools &amp; Proficiencies
        </div>

        <ul className="list-inline dev-icons">
          {skillIcons.map(({ icon }) => (
            <SkillIcon skill={icon} />
          ))}
        </ul>

        <div className="dev-skills">
          {chunk(skills, 5).map(chunk => (
            <ul className=" fa-ul mb-0">
              {chunk.map(({ name }) => (
                <SkillListItem skill={name} />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
