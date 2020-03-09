import React from 'react';
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  name: {
    fontFamily: 'Saira Extra Condensed',
    fontSize: 36,
    fontWeight: 800,
    color: '#3a79c1',
    lineHeight: 1.3,
  },
  title: {
    fontFamily: 'Saira Extra Condensed',
    fontSize: 16,
    fontWeight: 800,
    fontStyle: 'italic',
    lineHeight: 1.3,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#495057',
  },
  email: {
    textDecoration: 'none',
    color: '#3a79c1',
  },
});

const HeaderSection = ({ name, title, email, address }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.contactContainer}>
      <Link style={styles.email} src={`mailto:${email}`}>
        {email}
      </Link>
      <Text>&nbsp;| {address}</Text>
    </View>
  </View>
);

export default HeaderSection;
