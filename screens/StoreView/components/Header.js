import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import{ AntDesign, Entypo } from '@expo/vector-icons'
import { gs } from '../../../styles'

export default function Header() {
    return (
        <View> 
            <Image source={require('../../../images/car.jpg')} style={{width: "100%", height: 300}}/>
            <View style={styles.topButtons}>
                <AntDesign name="close" size={24} color="#fff"/>
                <View>
                    <AntDesign name="save" size={24}/>
                    <AntDesign name="sharealt" size={24}/>
                    <Entypo name="dots-three-vertical" size={18} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   topButtons:{
        ...gs.rowBetween,
        position: 'absolute',
        top: 24,
        left: 32,
        right: 32
   }
})
