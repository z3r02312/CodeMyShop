import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity,Image,StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedTab: 'Home' }
    }
    openMenu() {
        const { open } = this.props;
        open();
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        style={styles.icon}
                        selected={this.state.selectedTab === 'Home'}
                        title="Home"
                        renderIcon={() => <Image source={require('../../../media/appIcon/home0.png')} style={styles.icon}/>}
                        renderSelectedIcon={() => <Image source={require('../../../media/appIcon/home.png')} style={styles.icon}/>}
                        selectedTitleStyle={{color:'#2AA189'}}
                        onPress={() => this.setState({ selectedTab: 'Home' })}>
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                    style={styles.icon}
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        renderIcon={() => <Image source={require('../../../media/appIcon/cart0.png')} style={styles.icon}/>}
                        renderSelectedIcon={() => <Image source={require('../../../media/appIcon/cart.png')} style={styles.icon}/>}
                        badgeText="1"
                        selectedTitleStyle={{color:'#2AA189'}}
                        onPress={() => this.setState({ selectedTab: 'cart' })}>
                        <Cart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                    
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        renderIcon={() => <Image source={require('../../../media/appIcon/search0.png')} style={styles.icon}/>}
                        renderSelectedIcon={() => <Image source={require('../../../media/appIcon/search.png')} style={styles.icon}/>}
                        selectedTitleStyle={{color:'#2AA189'}}
                        onPress={() => this.setState({ selectedTab: 'search' })}>
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        renderIcon={() => <Image source={require('../../../media/appIcon/contact0.png')} style={styles.icon}/>}
                        renderSelectedIcon={() => <Image source={require('../../../media/appIcon/contact.png')} style={styles.icon}/>}
                        selectedTitleStyle={{color:'#2AA189'}}
                        onPress={() => this.setState({ selectedTab: 'contact' })}>
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

export default Shop;
const styles = StyleSheet.create ({
    icon:{
        width:23,height:23
    }
})