import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default createMaterialBottomTabNavigator({
   Home: { 
     screen: HomeScreen,
     navigationOptions: {
     tabBarLabel: 'Home',
     tabBarIcon: ({tintColor}) => (
        <Icon name="ios-home" color={tintColor} size={24} />
     )   
   }
  },
   Link: {
    screen: LinksScreen,
    navigationOptions: {
      tabBarLabel: 'Links',
      tabBarIcon: ({tintColor}) => (
       <Icon name="ios-home" color={tintColor} size={24} />
      )
    }
  },
   Settings: { 
     screen: SettingsScreen,
     navigationOptions: {
      tabBarLabel: 'Links',
      tabBarIcon: ({tintColor}) => (
       <Icon name="ios-home" color={tintColor} size={24} />
      )
    }
   }
}, {
  initialRouteName: 'Home',
  order: ['Home', 'Link','Settings'],
  activeTintColor: 'white',
  shifting: true,
  swipeEnabled: true,
});
