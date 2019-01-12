import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Main from '../Main/Main';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHistory from '../OrderHistory/OrderHistory';

export default class Authentication extends Component {
  render() {
    const { push } = this.props.navigation;
    return (
        <View 
        style={{ flex: 1,
        backgroundColor: 'chocolate' }}
    >
        <Text >Welcome to Authentication</Text>
        <TouchableOpacity  
            onPress={() => {
                push('Main');
        }}>
            <Text
            style={{margin:40,color:'white'}}
            >Back to Main</Text>
        </TouchableOpacity>
       
      </View>
    );
  }
}
