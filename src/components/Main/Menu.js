import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogedIn: true
        }
    }
    render() {
        const { wrapper, imgProfile, btnStyle, btnSignIn, btnLogin, txtName,loginStyle } = styles;
        const logOut = (
            <View>
                <TouchableOpacity style={btnStyle}>
                    <Text style={btnSignIn}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
        const logIn = (
            <View style={loginStyle}>
                <Text style={txtName}>Tran Quang Tien</Text>
                <View style={{ marginTop: 50 }}>
                    <TouchableOpacity style={btnStyle}>
                        <Text style={btnLogin}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnStyle}>
                        <Text style={btnLogin}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnStyle}>
                        <Text style={btnLogin}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
        const mainJSX = this.state.isLogedIn ? logIn : logOut;
        return (
            <View style={wrapper}>
                <Image source={require('../../media/temp/profile.png')} style={imgProfile} />
                {mainJSX}




                {/* <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Authentication')
                    }>
                    <Text
                        style={{ margin: 40, color: 'white' }}
                    >Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('ChangeInfo')
                    }>
                    <Text
                        style={{ margin: 40, color: 'white' }}
                    >Go to ChangeInfo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('OrderHistory')
                    }>
                    <Text
                        style={{ margin: 40, color: 'white' }}
                    >Go to OrderHistory</Text>
                </TouchableOpacity> */}
            </View>
        );
    }
}

export default Menu;
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#2AA189',
        borderRightWidth: 2,
        borderRightColor: '#fff',
        alignItems: 'center'
    },
    imgProfile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 15
    },
    btnStyle: {
        width: 160,
        height: 40,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    btnSignIn: {
        color: '#2AA189'
    },
    btnLogin: {
        color: '#2AA189',
        fontSize: 12,
        fontWeight: '400',
    },
    txtName: {
        color: '#fff',
        fontSize: 13,
    },
    loginStyle:{
        flex:1,
        alignItems:'center'
    }
})