import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'

export default class TopProduct extends Component {
    render() {
        const { wrapper, titleTop, textTitle, body, product, imgProduct, productName, productPrice } = styles;
        return (
            <View style={wrapper} >
                <View style={titleTop}>
                    <Text style={textTitle}> TOP PRODUCT </Text>
                </View>
                <View style={body} elevation={5}>
                    <View style={product} >
                        <Image
                            source={require('../../../../media/temp/sp1.jpeg')}
                            style={imgProduct}
                        />
                        <Text style={productName}>BLACK OF THE SEA</Text>
                        <Text style={productPrice}>$200</Text>
                    </View>
                    <View style={product} >
                        <Image
                            source={require('../../../../media/temp/sp2.jpeg')}
                            style={imgProduct}
                        />
                        <Text style={productName}>CONTRAST EMBRO</Text>
                        <Text style={productPrice}>$121</Text>
                    </View>
                    <View style={{ height: 10, width }} />
                    <View style={product} >
                        <Image
                            source={require('../../../../media/temp/sp3.jpeg')}
                            style={imgProduct}
                        />
                        <Text style={productName}>BLACK OF THE SEA</Text>
                        <Text style={productPrice}>$200</Text>
                    </View>
                    <View style={product} >
                        <Image
                            source={require('../../../../media/temp/sp4.jpeg')}
                            style={imgProduct}
                        />
                        <Text style={productName}>CONTRAST EMBRO</Text>
                        <Text style={productPrice}>$121</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const { width } = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const imgProductHeight = (productWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        margin: 10,
    },
    titleTop: {
        paddingLeft: 2,
        justifyContent: 'center',
        height: 30
    },
    textTitle: {
        fontSize: 15,
        color: '#AEAEAE'
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    product: {
        width: productWidth,
        paddingBottom: 5,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1
    },
    imgProduct: {
        width: productWidth,
        height: imgProductHeight
    },
    productName: {
        marginTop: 5,
        color: '#989898',
        fontWeight: '500',
        fontSize: 12,
    },
    productPrice: {
        color: '#C82762',
        fontWeight: '500'
    }
})