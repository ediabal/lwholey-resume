import React from 'react';
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
import Layout from '../components/Layout';
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

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  leftColumn: {},
  rightColumn: {},
  header: {},
  avatar: {},
  experience: {},
  skills: {},
  education: {},
  interests: {},
  footer: {},
});

const PDF = () => {
  return (
    <Layout isPDF>
      <PDFViewer style={{ height: '100vh', width: '100vw' }}>
        <Document
          author={`${firstName} ${lastName}`}
          keywords={`${firstName}, ${lastName}, resume`}
          subject={`${firstName} ${lastName}'s Resume`}
          title="Resume"
        >
          <Page size="A4" style={styles.page}>
            <View>
              <Text>Section #1</Text>
            </View>
            <View>
              <Text>Section #2</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </Layout>
  );
};

export default PDF;
