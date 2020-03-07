import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import AboutSection from '../components/sections/AboutSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import SkillsSection from '../components/sections/SkillsSection';
import EducationSection from '../components/sections/EductationSection';
import InterestsSection from '../components/sections/InterestsSection';
import {
  firstName,
  lastName,
  title,
  address,
  email,
  aboutParagraphs,
  socialLinks,
  education,
  experience,
  skills,
  interestsParagraphs,
} from '../json/json-bundle';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <div className="index-page">
      <AboutSection
        firstName={firstName}
        lastName={lastName}
        title={title}
        address={address}
        email={email}
        socialLinks={socialLinks}
        paragraphs={aboutParagraphs}
      />

      <hr className="index-page__hr" />

      <ExperienceSection experience={experience} />

      <hr className="index-page__hr" />

      <SkillsSection skills={skills} />

      <hr className="index-page__hr" />

      <EducationSection education={education} />

      <hr className="index-page__hr" />

      <InterestsSection paragraphs={interestsParagraphs} />
    </div>
  </Layout>
);

export default IndexPage;
