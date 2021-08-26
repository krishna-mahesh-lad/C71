import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from "./Screen/SearchScreen";
import TransScreen from "./Screen/TransScreen";

export default class App extends Component {
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  search: {screen: SearchScreen},
  transaction: {screen: TransScreen},
  },
  {defaultNavigationOptions:({navigation}) => {
      tabBarIcon: () => {
        const routeName = navingation.state.routeName
        if(routename === 'transaction'){
          return(
            <Image
            source = {require('./assets/book.png')}
            style = {{width:40, height:40}}/>
          )
        }
        if(routename === 'search'){
          return(
            <Image
            source = {require('./assets/searchingbook.png')}
            style = {{width:40, height:40}}/>
          )
        }
      }
  }}
  );

const AppContainer = createAppContainer(TabNavigator);