import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, Image, ImageBackground } from 'react-native'
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');


export default class Category extends Component {
    render() {
        const { wrapper, textStyle, logoImage, textCollection, textInSwiper } = styles;
        return (
            <View style={wrapper}>
                <View style={textCollection}>
                    <Text style={textStyle}> LIST OF CATEGORY </Text>
                </View>
                <View style={{ flex: 4, marginBottom: 5 }}>
                    <Swiper autoplay activeDotColor={'#2AA088'}>
                        <ImageBackground
                            source={require('../../../../media/temp/little.jpg')}
                            style={logoImage}
                        >
                            <Text style={textInSwiper}>LITTLE DRESS</Text>
                        </ImageBackground >
                        <ImageBackground
                            source={require('../../../../media/temp/maxi.jpg')}
                            style={logoImage}
                        >
                            <Text style={textInSwiper}>MAXI DRESS</Text>
                        </ImageBackground >
                        <ImageBackground
                            source={require('../../../../media/temp/party.jpg')}
                            style={logoImage}
                        >
                            <Text style={textInSwiper}>PARTY DRESS</Text>
                        </ImageBackground >
                        <ImageBackground
                            source={require('../../../../media/temp/mini.jpg')}
                            style={logoImage}
                        >
                            <Text style={textInSwiper}>MINI DRESS</Text>
                        </ImageBackground >
                        <ImageBackground
                            source={require('../../../../media/temp/midi.jpg')}
                            style={logoImage}
                        >
                            <Text style={textInSwiper}>MIDI DRESS</Text>
                        </ImageBackground >
                        <ImageBackground
                            source={require('../../../../media/temp/fit.jpg')}
                            style={logoImage}
                        >
                            <Text style={textInSwiper}>FIT DRESS</Text>
                        </ImageBackground >
                    </Swiper>
                </View>
            </View>

        )
    }
}
const imgWidth = width - 30;
const imgHeight = (imgWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.3,
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#6A6A6A',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 15,
        color: '#AEAEAE'
    },
    logoImage: {
        width: imgWidth,
        height: imgHeight,
        margin: 5,
        alignItems:'center',
        justifyContent: 'center'

    },
    textCollection: {
        flex: 1,
        justifyContent: 'center',
    },
    textInSwiper: {
        fontSize:12,
        fontWeight:'bold',
        color:'#BDBDBD',
        marginBottom:25
    }
})