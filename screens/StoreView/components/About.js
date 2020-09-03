import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { gs, colors } from '../../../styles'

const store = {
    name: "ATI FX45 GI 1911",
    price: '$389',
    location: "Apopka",
    about: "k ajskdj flk fi owanlk fa; boa jas;ldkjf lkwef j;aks dflnas,df nasodf jq;wlekjrr lad fzoxicuv oajs ddfkl wkal ef ajsdf io jasoj dfwehr ;adf"
}

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={gs.title}>{store.name}</Text>

            <Text style={styles.info}>
                {store.price} &#8226; {store.location}
            </Text>
            <View style={gs.divider}/>

            <Text style={gs.sectionTitle}>About {store.name}</Text>
            <Text style={styles.about}>{store.about}</Text>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container:{
        ...gs.sectionContainer,
        backgroundColor: colors.darkBg,
    },
    info: {
        color: colors.textSec,
        fontWeight: '600',
        marginTop: 4
    },
    about: {
        fontSize: 13,
        fontWeight: '600',
        color: colors.textSec,
        marginTop: 6,
        lineHeight: 20

    }
})
