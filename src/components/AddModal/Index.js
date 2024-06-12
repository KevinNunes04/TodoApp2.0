import React, {useState} from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
export default function AddTask({ visible, onClose }) {
    const [taskText, setTaskText] = useState('');
    const [dateText, setDateText] = useState('');
    const handleDateChange = (text) => {
     
      const regex = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
      if (regex.test(text)) {
        setDateText(text);
      }
    };

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType='fade'
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.buttonReturn} onPress={onClose}>
            <Text style={styles.buttonText}>X</Text>
          </TouchableOpacity>
          <Text>Nova Tarefa</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite sua tarefa'
            onChangeText={setTaskText}
            value={taskText}
          />
          <TextInput
            style={styles.input}
            placeholder='00/00/0000'
            onChangeText={handleDateChange}
            value={dateText}
            editable={true}
            keyboardType='numeric'
          />
          <TouchableOpacity style={styles.buttonComplete} onPress={onClose}>
            <Text style={styles.buttonText}>Adicionar Tarefa?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonReturn: {
    backgroundColor: '#fc031c',
    paddingVertical: 2.5,
    paddingHorizontal: 7,
    borderRadius: 5,
    marginRight: 230,
  },
  buttonComplete: {
    backgroundColor: '#24fc03',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
