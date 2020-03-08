import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  name: {
    fontSize: 32,
    fontWeight: 800,
    color: '#3a79c1',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 2.5,
  },
  contactContainer: {},
});

const Header = ({ name, title, email, address }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.contactContainer}>
      {email} | {address}
    </Text>
  </View>
);

export default Header;
