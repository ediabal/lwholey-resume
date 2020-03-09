import React from 'react';

import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import {
  About,
  Education,
  Experience,
  Interests,
  Skills,
} from '../components/sections/index';

import {
  firstName,
  lastName,
  title,
  address,
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
      <About
        firstName={firstName}
        lastName={lastName}
        title={title}
        address={address}
        socialLinks={socialLinks}
        paragraphs={aboutParagraphs}
      />

      <hr className="index-page__hr" />

      <Experience experience={experience} />

      <hr className="index-page__hr" />

      <Skills skills={skills} />

      <hr className="index-page__hr" />

      <Education education={education} />

      <hr className="index-page__hr" />

      <Interests paragraphs={interestsParagraphs} />
    </div>
  </Layout>
);

export default IndexPage;
