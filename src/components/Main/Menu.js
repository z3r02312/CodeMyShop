import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Authentication from '../Authentication/Authentication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHistory from '../OrderHistory/OrderHistory';

class Menu extends Component {
    render() {
       
        return (
           
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'mediumseagreen'
                }}>
                <Text >Welcome to Menu Component</Text>
                <TouchableOpacity
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
                </TouchableOpacity>
            </View>
        );
    }
}

export default Menu;