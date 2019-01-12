import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Collection from './Collection';
import Category from './Category';

export default class Home extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#DCDBDB'}}>
        <Collection/>
        <Category/>
      </View>
    )
  }
}
