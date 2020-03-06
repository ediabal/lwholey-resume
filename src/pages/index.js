import React from 'react';

import {
  firstName,
  lastName,
  address,
  email,
  aboutParagraphs,
  socialLinks,
  education,
  experience,
  skills,
  interestsParagraphs,
} from '../json/json-bundle';

import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

import AboutSection from '../sections/about';
import ExperienceSection from '../sections/experience';
import SkillsSection from '../sections/skills';
import EducationSection from '../sections/eductation';
import InterestsSection from '../sections/interests';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <div className="index-page">
      <AboutSection
        firstName={firstName}
        lastName={lastName}
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
