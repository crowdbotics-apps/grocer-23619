import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Additem189394Navigator from '../features/Additem189394/navigator';
import Maps189390Navigator from '../features/Maps189390/navigator';
import UserProfile189386Navigator from '../features/UserProfile189386/navigator';
import Maps189341Navigator from '../features/Maps189341/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Additem189394: { screen: Additem189394Navigator },
Maps189390: { screen: Maps189390Navigator },
UserProfile189386: { screen: UserProfile189386Navigator },
Maps189341: { screen: Maps189341Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
