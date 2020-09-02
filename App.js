import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from './styles'
import StoreView from './screens/StoreView'
export default function App() {

  const imgURL = require("./images/car.jpg");
  return (
    <ScrollView style={styles.container}>
      <StoreView/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,    
   
  },  
});
