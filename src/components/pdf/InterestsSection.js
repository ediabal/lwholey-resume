import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import SectionHeader from './SectionHeader';

const styles = StyleSheet.create({
  container: { fontSize: 10 },
  interests: {},
});

const InterestsSection = ({ text }) => (
  <View style={styles.container}>
    <SectionHeader text="Hobbies & Interests" />

    <Text style={styles.interests}>{text}</Text>
  </View>
);

export default InterestsSection;
