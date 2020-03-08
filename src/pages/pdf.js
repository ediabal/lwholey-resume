import React from 'react';
import {
  PDFViewer,
  Page,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
import Layout from '../components/Layout';
import {
  Header,
  Avatar,
  ExperienceSection,
  SkillsSection,
  EducationSection,
  InterestsSection,
} from '../components/pdf/index';

import {
  name,
  title,
  address,
  email,
  education,
  experience,
  skills,
  interestsParagraph,
} from '../json/json-bundle';

// Create styles
const styles = StyleSheet.create({
  page: {
    fontSize: 10,
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftColumn: { flexDirection: 'column', width: '70%', paddingRight: 10 },
  rightColumn: { flexDirection: 'column', width: '30%', paddingLeft: 10 },
});

const PDF = () => {
  return (
    <Layout isPDF>
      <PDFViewer style={{ height: '100vh', width: '100vw' }}>
        <Document
          author={name}
          keywords={`${name}, resume`}
          subject={`${name}'s Resume`}
          title="Resume"
        >
          <Page size="A4" style={styles.page}>
            <View style={styles.container}>
              <View style={styles.leftColumn}>
                <Header
                  name={name}
                  title={title}
                  email={email}
                  address={address}
                />
                <ExperienceSection experience={experience} />
              </View>

              <View style={styles.rightColumn}>
                <Avatar />
                <SkillsSection skills={skills} />
                <EducationSection education={education} />
                <InterestsSection text={interestsParagraph} />
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </Layout>
  );
};

export default PDF;
