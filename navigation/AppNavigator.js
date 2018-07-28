import React from 'react';
import { createSwitchNavigator, DrawerNavigator, StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SideNavigation from './SideNavigation';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: { screen: MainTabNavigator},
  auth: { screen: SideNavigation}
});
