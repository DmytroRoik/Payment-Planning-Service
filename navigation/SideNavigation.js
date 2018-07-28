import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default createDrawerNavigator({
    Home: { screen: HomeScreen },
    Link: { screen: LinksScreen },
    Settings: { screen: SettingsScreen }
  });