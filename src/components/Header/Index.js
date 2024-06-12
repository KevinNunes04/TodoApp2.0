import { StyleSheet, Text, View } from 'react-native';
import React, { useState} from 'react';
import AddButton from '../AddButton';
import AddTask from '../AddModal/Index';
export default function Header() {
 const [modalVisible, setModalVisibility] = useState(false);
 const abreModal = () => {
   setModalVisibility(true);
 };
 const fechaModal = () => {
   setModalVisibility(false);
 };
  return (
    <View style={styles.HeaderContainer}>
      <AddButton onPress={abreModal}/>
        <AddTask visible={modalVisible} onClose={fechaModal} />
  
      <View style={styles.TitleContainer}>
        <Text style={styles.title}>Lista de Tarefas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: '#5e9cff',
    width: 500,
    height: 145,
  },
  TitleContainer: {
    textAlign: 'center',
    width: 150,
    marginTop: '13.5%',
    marginLeft: '24%',
    paddingLeft: 5,
    flexDirection: 'row',
  },
  title: {
      color: '#ffffff',
      fontSize: 20,
      fontWeight: 'bold',
  },
});
