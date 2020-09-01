import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity } from 'react-native';
import SVG from "./images/svg.js";
import Waves from "./images/wave.svg";
import DateTimePicker from '@react-native-community/datetimepicker';
import MapView, { Marker } from 'react-native-maps'
import {RNCamera, Barcode} from 'react-native-camera'

export default function App() {

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [test, setTest] = useState({coordinate:{latitude: 28.6933, longitude:-81.5321}})
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if(show == false){

      setShow(true);
    }else{
      setShow(false);
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const marker = {
    latitude: 28,
    longitude: -81
  }
  
  const changeMarker= (coordinate)=>{
    console.log(coordinate.nativeEvent.coordinate)
    setTest({coordinate:{
      latitude: coordinate.nativeEvent.coordinate.latitude,
      longitude: coordinate.nativeEvent.coordinate.longitude
    }})
  }
  const imgURL = require("./images/car.jpg");
  return (
    <View style={styles.container}>
      <ImageBackground source={imgURL} style={styles.image__style}>
        <Text style={styles.text}>SSD International Inc.</Text>        
      </ImageBackground>      
      <View style={styles.showBox}>
        <Text style={{textAlign: "center"}}>Reserve a spot for CCW Class</Text>        
        <TouchableOpacity style={styles.select__button} onPress={showDatepicker}><Text style={{color: 'white', textAlign: 'center'}}>Select Time</Text></TouchableOpacity>
        <TouchableOpacity style={styles.select__button} onPress={showTimepicker}><Text style={{color: 'white', textAlign: 'center'}}>Select Date</Text></TouchableOpacity>
        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      {/* <RNCamera/> */}
        <View style={{height: '100%', width: '100%'}}>
          <MapView
            initialRegion={{
              latitude: 28.6934,
              longitude: -81.5322,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={styles.map__stuff}
            showsBuildings={true}
            showsCompass={true}
            showsTraffic={true}
            showsUserLocation={true}
            onPress={changeMarker}
            mapType="hybrid"
            
            
          >
            <Marker
              coordinate={{latitude: 28.6934, longitude:-81.5322}}
              title="test"
              description="another test"
            />
            <Marker
              coordinate={{latitude: test.coordinate.latitude, longitude: test.coordinate.longitude}}
              title="test2"
              description="another test2"
            />
            
          </MapView>
        </View>
      </View>
      <StatusBar backgroundColor="white" style="auto"/>
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
    height: 200,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  text: {
    color: "white",
    marginTop: '20%',
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '80%',
    alignSelf: 'center'
    // textAlignVertical: 'center'
  },  
  showBox:{
    backgroundColor: 'white',
    width: '90%',
    height: '100%',
    marginTop: -15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    textAlign: 'right'
  },
  select__button:{
    marginTop: 10,
    height: 40,
    backgroundColor: 'orange',
    justifyContent: 'center'
    
  },
  map__stuff:{
    ...StyleSheet.absoluteFillObject,
  }
});
