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
    <div className="container-fluid p-0">
      <AboutSection {...config} />

      <hr className="m-0" />

      <ExperienceSection />

      <hr className="m-0" />

      <SkillsSection />

      <hr className="m-0" />

      <EducationSection />

      <hr className="m-0" />

      <InterestsSection />
    </div>
  </Layout>
);

export default IndexPage;
