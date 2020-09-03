import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { gs, colors } from '../../../styles'

const Bookmark = () => {
    return (
        <View style={styles.Bookmark}> 
            <Feather name="bookmark" size={24} color={colors.pink}/>
        </View>
    )
}

export default Bookmark

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
