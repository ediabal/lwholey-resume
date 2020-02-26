import React from 'react';

const ExperienceSectionItemDetailsList = ({ details = [] }) => (
  <div className="details-list">
    <h4>Details:</h4>
    <ul>
      {details.map(detail => (
        <li>{detail}</li>
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
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">{title}</h3>
        <div className="subheading mb-3">{subtitle}</div>
        <p>{content}</p>
        {details.length > 0 && (
          <ExperienceSectionItemDetailsList details={details} />
        )}
      </div>
      <div className="resume-date text-md-right">
        <span className="text-primary">{dates}</span>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const jobs = [
    {
      title: 'Senior UX Engineer',
      subtitle: 'FireEye, Inc. · Remote',
      content:
        "Core developer on the FireEye UX team currently working on the FireEye Design System, Muse. Muse serves as the source of styled patterns and components for all FireEye's internal and public web applications. The project utilizes web components that are portable to both React and Angular projects as well as supported in almost all major browsers.",
      details: [
        'Researching, prototyping, creating, driving, and supporting project design and architectural decisions.',
        'Developing reusable web components as well as design patterns for the foundation of the Muse monorepo project.',
        'Collaborating with other teams to gain insight into future requirements and contributions for further adoption of the Muse Design System.',
      ],
      dates: 'AUG 2019 - PRESENT',
    },
    {
      title: 'Senior Full-Stack Web Developer',
      subtitle: 'FireEye, Inc. · Remote',
      content:
        'Full-stack Ruby on Rails and React developer on the Managed Defense engineering team for our two customer facing service and intelligence portals, MD Portal & FIP, as well as our internal unified analyst console, UAC.',
      details: [
        'Drove and supported project design and architectural decisions.',
        'Provided ongoing maintenance and feature development utilizing Ruby on Rails, React.js, and other supporting tech such as Redux, GraphQL, Elastic Search, and Docker.',
        'Onboarded and mentored new coworkers and bringing others up to speed on adopted tech.',
        'Supported and improved upon the deployment of our applications.',
      ],
      dates: 'JUN 2015 - AUG 2019',
    },
    {
      title: 'Software Engineer',
      subtitle: 'CACI · Dahlgren, VA',
      content:
        'Contributed to and completed multiple short and long term federal contracts as a software engineer and full stack web developer for the Naval Surface Warfare Center, Dahlgren Division (NSWCDD).',
      details: [
        'Involved in the formation and member of the first Scrum team for the Targeting Message Media Maker (TM3) Java GUI project.',
        'Developed the frontend for the Weather Reentry Interaction Planner (WRIP) web application in vanilla JavaScript and delivered the project  in under 6 months.',
        'Introduced gamification to the Talent Manager Dashboard (TMD) Java web application via unlockable custom badges and achievements.',
      ],
      dates: 'MAR 2014 - MAY 2015',
    },
    {
      title: 'Computer Science Department Lab Aide',
      subtitle: 'University of Mary Washington · Fredericksburg, VA',
      content:
        'Assisted students with computer science related inquiries, as well as provided IT support to the Unix and Windows Lab.',
      dates: 'MAY 2013 – MAY 2014',
    },
    {
      title: 'Computer Science Tutor',
      subtitle: 'University of Mary Washington · Fredericksburg, VA',
      content:
        'Tutored introductory and mid-level classes using Python, Java, and C++. Classes included Introduction to Computer Science, Problem-solving and Algorithmic Development, Data Structures, and Object-Oriented Analysis and Design.',
      dates: 'OCT 2013 – JAN 2014',
    },
  ];

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="experience"
    >
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>

        {jobs.map(job => (
          <ExperienceSectionItem {...job} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
