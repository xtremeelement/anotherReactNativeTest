import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { gs, colors } from '../../../styles'

const Bookmark = () => {
    return (
        <View style={styles.bookmark}> 
            <Feather name="bookmark" size={24} color={colors.pink}/>
        </View>
    )
}

export default Bookmark

const styles = StyleSheet.create({
    bookmark: {
        position: 'absolute',
        width: 56,
        height: 56,
        right: 32,
        top: -28,
        backgroundColor: colors.text,
        ...gs.center,
        borderRadius: 28,
        zIndex: 100
    }
})
