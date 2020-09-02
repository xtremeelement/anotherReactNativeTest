import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function Header() {
    return (
        <View>
            <Image source={require('../../../images/car.jpg')} style={{width: "100%", height: 400}}/>
        </View>
    )
}

const styles = StyleSheet.create({
   
})
