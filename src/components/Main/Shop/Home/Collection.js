import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, Image } from 'react-native'

const { width, height } = Dimensions.get('window');

export default class Collection extends Component {
    render() {
        const { wrapper, textStyle, logoImage, textCollection } = styles;
        return (
            <View style={wrapper}>
                <View style={textCollection}>
                    <Text style={textStyle}> SPRING COLLECTION </Text>
                </View>
                <View>
                    <Image
                        source={require('../../../../media/temp/banner.jpg')}
                        style={logoImage}
                    />
                </View>
            </View>
        )
    }
}
const imgWidth = width - 30;
const imgHeight = (imgWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.33,
        backgroundColor: '#fff',
        margin: 10,
    },
    textStyle: {
        fontSize: 15,
        color: '#AEAEAE'
    },
    logoImage: {
        width: imgWidth,
        height: imgHeight,
        margin: 5
    },
    textCollection: {
        flex: 13,
        justifyContent: 'center'
    }
})