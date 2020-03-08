import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import SectionHeader from './SectionHeader';

const styles = StyleSheet.create({
  container: {
    fontSize: 10,
  },
  educationItem: {
    marginBottom: 10,
  },
  title: {},
  degree: {
    marginBottom: 5,
  },
  dates: {},
});

const EducationSection = ({ education = [] }) => (
  <View style={styles.container}>
    <SectionHeader text="Education" />
    {education.map(({ title, abbrDegree, gpa, abbrDates }) => (
      <View style={styles.educationItem}>
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
