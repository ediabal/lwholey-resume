import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  list: {
    textAlign: 'justify',
  },
  listItem: {
    flexDirection: 'row',
    marginTop: 5,
  },
  bullet: {
    width: 10,
  },
  item: {
    flex: 1,
  },
});

const List = ({ list = [] }) => (
  <View style={styles.list}>
    {list.map(item => (
      <View style={styles.listItem}>
        <Text style={styles.bullet}>-</Text>
        <Text style={styles.item}>{item}</Text>
      </View>
    ))}
  </View>
);

export default List;
