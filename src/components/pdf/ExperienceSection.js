import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import SectionHeader from './SectionHeader';
import List from './List';

const styles = StyleSheet.create({
  container: {},
  experienceItem: {
    marginBottom: 10,
  },
  titleContainer: {
    marginBottom: 5,
  },
  title: {
    fontSize: 12,
    fontWeight: 800,
    marginBottom: 5,
  },
  subtitleContainer: {
    flexDirection: 'row',
    fontWeight: 800,
    justifyContent: 'space-between',
  },
  subtitle: {},
  dates: {
    textTransform: 'uppercase',
    alignItems: 'flex-end',
    justifySelf: 'flex-end',
  },
  contentContainer: {
    marginBottom: 5,
  },
  content: {
    textAlign: 'justify',
    fontSize: 10,
  },
});

const ExperienceSection = ({ experience = [] }) => (
  <View style={styles.container}>
    <SectionHeader text="Experience" />

    {experience.map(({ title, subtitle, dates, content, details = [] }) => (
      <View style={styles.experienceItem}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.dates}>{dates}</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.content}>{content}</Text>
        </View>

        <List list={details} />
      </View>
    ))}
  </View>
);

export default ExperienceSection;
