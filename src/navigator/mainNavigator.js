import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps189346Navigator from '../features/Maps189346/navigator';
import Additem189345Navigator from '../features/Additem189345/navigator';
import Maps189341Navigator from '../features/Maps189341/navigator';
import UserProfile189337Navigator from '../features/UserProfile189337/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps189346: { screen: Maps189346Navigator },
Additem189345: { screen: Additem189345Navigator },
Maps189341: { screen: Maps189341Navigator },
UserProfile189337: { screen: UserProfile189337Navigator },

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
