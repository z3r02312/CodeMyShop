import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { createStackNavigator , createAppContainer } from 'react-navigation';
import Authentication from './src/components/Authentication/Authentication';
import ChangeInfo from './src/components/ChangeInfo/ChangeInfo';
import Main from './src/components/Main/Main';
import OrderHistory from './src/components/OrderHistory/OrderHistory';
import Menu from './src/components/Main/Menu';

const AppNavigator = createStackNavigator({
  Main: { screen: Main },
  ChangeInfo: { screen: ChangeInfo },
  Authentication: { screen: Authentication },
  OrderHistory: { screen: OrderHistory },
  Menu: {screen: Menu}
}, {
  headerMode: 'none',
  initialRouteName: 'Main'
});
const App = createAppContainer(AppNavigator);

export default App;
