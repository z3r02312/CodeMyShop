import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Button } from 'react-native';
import Authentication from '../Authentication/Authentication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHistory from '../OrderHistory/OrderHistory';
import Menu from './Menu';
import Shop from './Shop/Shop';
import Drawer from 'react-native-drawer';

export default class Main extends Component {
    closeControlPanel = () => {
        this.drawer.close()
      };
    openControlPanel = () => {
        this.drawer.open()
      };
  render() {
    const navigate = this.props.navigation;
    return (
    <View 
        style={{ flex: 1,
        backgroundColor: 'blueviolet' }}
    > 
      
       <Drawer
       tapToClose={true}
       openDrawerOffset={0.4}
        ref={(ref) => {this.drawer = ref;}}
        content={<Menu navigation={this.props.navigation}/>}
        >
        <Shop open={this.openControlPanel.bind(this)} />
      </Drawer>
      
    </View>
    
    );
  }
}
