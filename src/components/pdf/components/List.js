import React from 'react';
import { Image, Text, View, StyleSheet } from '@react-pdf/renderer';

import { toKebabCase } from '../../../utils';

import checkmark from '../../../assets/images/check-mark.png';

const styles = StyleSheet.create({
  list: {
    textAlign: 'justify',
  },
  listItem: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  bullet: {
    width: 15,
    height: 15,
    color: '#28a745',
    margin: '0 5',
  },
  item: {
    flex: 1,
  },
});

const List = ({ list = [] }) => (
  <View style={styles.list}>
    {list.map((item, i) => (
      <View key={`${toKebabCase(item)}-${i}`} style={styles.listItem}>
        <Image src={checkmark} style={styles.bullet} />
        <Text style={styles.item}>{item}</Text>
      </View>
    ))}
  </View>
);

export default List;
