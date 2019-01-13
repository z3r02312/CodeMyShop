import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

const { height } = Dimensions.get('screen');

export default class Header extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image
                            source={require('../../../media/appIcon/ic_menu.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>Wearing a Dress</Text>
                    <Image
                        source={require('../../../media/appIcon/ic_logo.png')}
                        style={styles.icon}
                    />
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder='What do you want to buy?'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 8, backgroundColor: '#2AA189', padding: 8, justifyContent: 'space-around'
    },
    row1: {
        flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 4
    },
    textInput: {
        height: height / 20, backgroundColor: 'white', fontSize: 11, color: '#717171', paddingTop: 0, paddingBottom: 0
    },
    icon: {
        width: 20, height: 20
    },
    titleStyle: {
        color: '#FFF', fontFamily: 'roboto'
    }
})