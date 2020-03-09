import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: 'Saira Extra Condensed',
    fontSize: 12,
    fontWeight: 800,
    color: '#3a79c1',
    textTransform: 'uppercase',
  },
});

const SectionHeader = ({ text }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

export default SectionHeader;
