import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class Home extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#DCDBDB' }}>
        <Collection />
        <Category />
        <TopProduct />
      </ScrollView>
    )
  }
}
