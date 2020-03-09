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
    fontFamily: 'Saira Extra Condensed',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    fontWeight: 800,
    color: '#495057',
    marginBottom: 2.5,
  },
  title: {
    fontFamily: 'Saira Extra Condensed',
    fontSize: 12,
    fontWeight: 800,
  },
  subtitle: {
    fontSize: 12,
  },
  dates: {
    textTransform: 'uppercase',
    alignItems: 'flex-end',
    justifySelf: 'flex-end',
  },
  contentContainer: {
    marginBottom: 2.5,
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
          <Text style={styles.title}>
            {title} @ {subtitle}
          </Text>
          <Text style={styles.dates}>{dates}</Text>
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
