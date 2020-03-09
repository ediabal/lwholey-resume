import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import SectionHeader from './SectionHeader';
import List from './List';

const styles = StyleSheet.create({
  container: {
    fontSize: 10,
    marginBottom: 5,
  },
  skills: {},
});

const SkillsSection = ({ skills = [] }) => (
  <View style={styles.container}>
    <SectionHeader text="Skills & Proficiencies" />

    <View style={styles.skills}>
      <List
        list={skills
          .filter(({ resume = false }) => resume === true)
          .map(({ name }) => name)}
      />
    </View>
  </View>
);

export default SkillsSection;
