import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export default function TaskModal({ visible, onClose }) {
  //Modal de tarefa recebe as propriedades que são passadas no componente de Screen(visible e onClose )]
  //On close modifica o setModalVisibility que estava true para false
  //o Visible recebe o valor modificado de false para true no modalVisible
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
          <Text>Deseja Finaliza a Tarefa?</Text>
          <TouchableOpacity style={styles.buttonComplete} onPress={onClose}>
            <Text style={styles.buttonText}>Finalizar</Text>
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
});
