import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import { toKebabCase } from '../../../utils';

import { SectionHeader } from '../components/index';

const styles = StyleSheet.create({
  container: {
    fontSize: 10,
  },
  educationItem: {
    marginBottom: 5,
  },
  title: {
    fontSize: 12,
    fontFamily: 'Saira Extra Condensed',
    fontWeight: 800,
    color: '#495057',
  },
  degree: {
    fontFamily: 'Saira Extra Condensed',
    marginBottom: 2.5,
  },
  dates: {
    fontFamily: 'Saira Extra Condensed',
    color: '#495057',
  },
});

const EducationSection = ({ education = [] }) => (
  <View style={styles.container}>
    <SectionHeader text="Education" />
    {education.map(({ title, abbrDegree, gpa, abbrDates }, i) => (
      <View key={`${toKebabCase(title)}-${i}`} style={styles.educationItem}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.degree}>{abbrDegree}</Text>
        <Text style={styles.dates}>
          {abbrDates} - {gpa} GPA
        </Text>
      </View>
    ))}
  </View>
);

export default EducationSection;
