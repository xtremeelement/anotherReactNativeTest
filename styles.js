import {StyleSheet} from 'react-native';


export const colors ={
    darkBg: '#222',
    lightBg: '#333',
    darkHl: '#666',
    lightHl: '#888',
    pink: '#ea3372',
    textSec: '#aaa'
}

export const gs = StyleSheet.create({
    rowCenter:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})