import React from 'react';

const EducationSectionItem = ({ title, degree, gpa, dates, url }) => (
  <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
    <div className="resume-content">
      <h3 className="mb-0">
        <a key={url} href={url} target="_blank">
          {title}
        </a>
      </h3>
      <div className="subheading mb-3">
        {degree} · {gpa} GPA
      </div>
    </div>
    <div className="resume-date text-md-right">{dates}</div>
  </div>
);

const EducationSection = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="education"
  >
    <div className="w-100">
      <h2 className="mb-5">Education</h2>

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
