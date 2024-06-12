import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
export default function Card({onPress}) {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>Entregar a task completa</Text>
      <Text>01-01-2025</Text>
      <Text>a completar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 100,
    marginTop: 10,
    borderRadius: 10,
    borderColor: '#d6d6d6',
    borderWidth: 2,
    marginLeft: 19.5,
  },
});
