import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Main from '../Main/Main';
import Authentication from '../Authentication/Authentication';
import OrderHistory from '../OrderHistory/OrderHistory';

export default class ChangeInfo extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View 
        style={{ flex: 1,
        backgroundColor: 'lightblue' }}
    >
        <Text >Welcome to ChangeInfo</Text>
        <TouchableOpacity 
            
            onPress={() => {
            navigate('Main');
        }}>
            <Text
            style={{margin:40,color:'white'}}
            >Back to Main</Text>
        </TouchableOpacity>
       
      </View>
    );
  }
}
