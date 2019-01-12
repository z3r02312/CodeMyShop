import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Main from '../Main/Main';
import Authentication from '../Authentication/Authentication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';

export default class OrderHistory extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View 
        style={{ flex: 1,
        backgroundColor: 'mediumseagreen' }}
    >
        <Text >Welcome to OrderHistory</Text>
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
