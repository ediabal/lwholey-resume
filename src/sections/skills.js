import React from 'react';
import LinkPreview from '../components/LinkPreview';

const SkillIcon = ({ skill, link }) => (
  <li className="skills-section__icons__icon">
    <LinkPreview url={link}>
      <i className={`fab fa-${skill}`}></i>
    </LinkPreview>
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
    <LinkPreview url={link}>{skill}</LinkPreview>
  </li>
);

const SkillsList = ({ skills = [] }) => (
  <ul className="skills-section__list">
    {skills.map(({ name, link }, i) => (
      <SkillListItem key={`sli-${i}`} skill={name} link={link} />
    ))}
  </ul>
);

const SkillsSection = () => {
  const skills = [
    {
      name: 'JavaScript',
      icon: 'js-square',
      link: 'https://eloquentjavascript.net/',
    },
    { name: 'React.js', icon: 'react', link: 'https://reactjs.org/' },
    {
      name: 'HTML',
      icon: 'html5',
      link: 'https://www.w3schools.com/html/default.asp',
    },
    {
      name: 'CSS',
      icon: 'css3-alt',
      link: 'https://www.w3schools.com/css/default.asp',
    },
    { name: 'SASS', icon: 'sass', link: 'https://sass-lang.com/' },
    { name: 'Storybook', link: 'https://storybook.js.org/' },
    { name: 'Web Components', link: 'https://www.webcomponents.org/' },
    { name: 'Stencil', link: 'https://stenciljs.com/' },
    { name: 'lit-html', link: 'https://lit-html.polymer-project.org/' },
    { name: 'Python', icon: 'python', link: 'https://www.python.org/' },
    { name: 'Ruby', link: 'https://www.ruby-lang.org/en/' },
    {
      name: 'Ruby on Rails',
      link: 'https://guides.rubyonrails.org/index.html',
    },
    { name: 'GraphQL', link: 'https://graphql.org/' },
    { name: 'nodejs', icon: 'node-js', link: 'https://nodejs.org/en/' },
    { name: 'npm', icon: 'npm', link: 'https://www.npmjs.com/' },
    { name: 'yarn', icon: 'yarn', link: 'https://yarnpkg.com/' },
    { name: 'Lerna', link: 'https://lerna.js.org/' },
    { name: 'Docker', icon: 'docker', link: 'https://www.docker.com/' },
    { name: 'GitHub', icon: 'github', link: 'https://github.com/ediabal' },
    { name: 'Scrum & Kanban', link: 'https://www.atlassian.com/agile/kanban' },
  ];

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

export default SkillsSection;
