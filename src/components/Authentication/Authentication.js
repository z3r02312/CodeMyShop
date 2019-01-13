import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';


export default class Authentication extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formSignIn: true
        }
    }
    signIn(){
        this.setState({formSignIn:true})
    }
    signUp(){
        this.setState({formSignIn:false})
    }
    render() {
        const { goBack } = this.props.navigation;
        const {
            row1, icon,
            titleStyle, wrapper,
            controlSign, signIn,
            signUp, inActive,
            active, inputTxt,
            submitSignIn, txtSubmit } = styles;
        const signInJSX = (
            <View>
                <TextInput style={inputTxt} placeholder='Enter your email'></TextInput>
                <TextInput style={inputTxt} placeholder='Enter your password'></TextInput>
                <TouchableOpacity style={submitSignIn}>
                    <Text style={txtSubmit}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
        const signOutJSX = (
            <View>
                <TextInput style={inputTxt} placeholder='Enter your name'></TextInput>
                <TextInput style={inputTxt} placeholder='Enter your email'></TextInput>
                <TextInput style={inputTxt} placeholder='Enter your password'></TextInput>
                <TextInput style={inputTxt} placeholder='Re-enter your password'></TextInput>
                <TouchableOpacity style={submitSignIn}>
                    <Text style={txtSubmit}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );
        const check = this.state.formSignIn ? signInJSX : signOutJSX;
        return (
            <View style={wrapper}>
                <View style={row1}>
                    <TouchableOpacity onPress={() => goBack()}>
                        <Image
                            source={require('../../media/appIcon/back_white.png')}
                            style={icon}
                        />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Wearing a Dress</Text>
                    <Image
                        source={require('../../media/appIcon/ic_logo.png')}
                        style={icon}
                    />
                </View>
                {check}
                <View style={controlSign}>
                    <TouchableOpacity style={signIn} onPress={this.signIn.bind(this)}>
                        <Text style={this.state.formSignIn?active:inActive}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signUp} onPress={this.signUp.bind(this)}>
                        <Text style={!this.state.formSignIn?active:inActive}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1, backgroundColor: '#2AA189', padding: 20, justifyContent: 'space-between'
    },
    row1: {
        flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 4, alignItems: 'center'
    },
    icon: {
        width: 30, height: 30
    },
    titleStyle: {
        color: '#FFF', fontFamily: 'roboto', fontSize: 18, fontWeight: '300'
    },
    controlSign: {
        flexDirection: 'row',
        marginBottom: 20
    },
    active: {
        color: '#2AA189'
    },
    inActive: {
        color: '#E0E0E0'
    },
    signIn: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        alignItems: 'center',
        flex: 1,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1
    },
    signUp: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        alignItems: 'center',
        flex: 1,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    },
    inputTxt: {
        backgroundColor: '#fff',
        height: 40,
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 15
    },
    submitSignIn: {
        backgroundColor: '#2AA189',
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtSubmit: {
        color: '#fff'
    }
})