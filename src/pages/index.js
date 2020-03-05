import React from 'react';

import config from '../../config';

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
      <AboutSection {...config} />

      <hr className="index-page__hr" />

      <ExperienceSection />

      <hr className="index-page__hr" />

      <SkillsSection />

      <hr className="index-page__hr" />

      <EducationSection />

      <hr className="index-page__hr" />

      <InterestsSection />
    </div>
  </Layout>
);

export default IndexPage;
