import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from '../Header/Index';
import Card from '../Card/Index';
import TaskModal from '../TaskCard/Index';


export default function Body() {
    const [modalVisible, setModalVisibility] = useState(false);// variável para guardar o estado de ativação do botão, por padrão false
    const abreModal = () => {
      setModalVisibility(true);
      //modifica a visibilidade do modal para true quando o botão for pressionado useState de 0 false vai para true
    }
        const fechaModal = () => {
          setModalVisibility(false);
          //mesma função da abreModal, porém troca o useState de true para false
        };
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Header />
      <ScrollView>
        <Card onPress={abreModal} />
        <Card onPress={abreModal} />
        <Card onPress={abreModal} />
        <Card onPress={abreModal} />
        <Card onPress={abreModal} />
        <Card onPress={abreModal} />
        <Card onPress={abreModal} />
        <Card onPress={abreModal} />
        <Card onPress={abreModal} />
        <Card onPress={abreModal} />
        <TaskModal visible={modalVisible} onClose={fechaModal} />
      </ScrollView>
    </View>
  );
}
//ScrollView para gerar a tela rolável a partir da quantidade de elemntos, podendo garantir que se for adicionado mais elementos doque a tela possui de altura eles poderão ser acessados

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    flexDirection: 'column',
  },
});
