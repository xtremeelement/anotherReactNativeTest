import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { colors } from './styles'
import StoreView from './screens/StoreView'


export default function App() {
  
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
