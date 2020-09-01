import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import SVG from "./images/svg.js";
import Waves from "./images/wave.svg";
import DateTimePicker from '@react-native-community/datetimepicker';


export default function App() {

  const imgURL = require("./images/car.jpg");
  return (
    <View style={styles.container}>
      <ImageBackground source={imgURL} style={styles.image__style}>
        <Text style={styles.text}>SSD International Inc.</Text>        
      </ImageBackground>      
      <View style={styles.showBox}>
      </View>
      <StatusBar backgroundColor="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',    
    alignItems: 'center',   
  },
  image__style: {
    flex: 0,
    height: 200,    
    alignSelf: 'stretch',
  },
  text: {
    color: "white",
    marginTop: '20%',
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'black',
    width: '80%',
    alignSelf: 'center'
    // textAlignVertical: 'center'
  },
  svgThing: {
    marginTop: -15,
    height: '100%',
    width: '100%'
  },
  showBox:{
    backgroundColor: 'white',
    width: '90%',
    height: '50%',
    marginTop: -15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    textAlign: 'right'
  }
});
