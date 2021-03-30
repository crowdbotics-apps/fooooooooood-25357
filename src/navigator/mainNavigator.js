import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Maps219909Navigator from '../features/Maps219909/navigator';
import Additem219908Navigator from '../features/Additem219908/navigator';
import Maps219904Navigator from '../features/Maps219904/navigator';
import UserProfile219900Navigator from '../features/UserProfile219900/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Maps219909: { screen: Maps219909Navigator },
Additem219908: { screen: Additem219908Navigator },
Maps219904: { screen: Maps219904Navigator },
UserProfile219900: { screen: UserProfile219900Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
