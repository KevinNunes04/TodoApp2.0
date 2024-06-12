import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
export default function AddButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.title}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    position: 'absolute',
    marginTop: '9.4%',
    marginLeft: '5.5%',
    backgroundColor: '#90bafc',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#4168a6',
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
