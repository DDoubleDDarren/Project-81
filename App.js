import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tab';
import WelcomeScreen from './screens/WelcomeScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import SettingScreen from './screens/SettingScreen.js';
import ExchangeScreen from './screens/ExchangeScreen.js';
import customSideBarMenu from './conponents/customSideBarMenu.js';

export default function App() {
  return (
    <AppContainer/>
  );
}
  const TabNavigator = createBottomTabNavigator({
    HomeScreen : {screens:HomeScreen},
    ExchangeScreen : {screens:ExchangeScreen},
  },
  {
    defaultNavigationOptions : ({navigation}) => ({
      tabBarIcon : () => {
        const routeName = navigation.state.routeName;
        if(routeName==="HomeScreen"){
          return(
            <Image source = {require("./assets/icon.png")}
            style = {{width:20,height:20}}/>
          )
        }
        else if(routeName === "Exchange"){
          return(
            <Image source = {require("./assets/splash.png")}
            style = {{width:20, height:20}}/>
          )
        }
      }
    })
  }
  );
const AppDrawNavigator = createDrawerNavigator({
    Home : {
      screens : TabNavigator
    },
    Settings : {
    screens : SettingScreen
    }
  }, 
  {
    contentComponent:customSidebarMenu
  },
  {
    initialRouteName : 'Home'
  })
const switchNavigator = createSwitchNavigator({
  WelcomeScreen : {screens:WelcomeScreen},
  AppDrawNavigator : AppDrawNavigator,
})
const AppContainer = createAppContainer(switchNavigator);