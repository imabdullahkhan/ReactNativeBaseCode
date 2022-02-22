import React from "react";

import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from "./TabsNavigator";
import { APP_ROUTES } from "./routes";
import Settings from "../views/Settings/Settings";

const Drawer = createDrawerNavigator();

const drawerRoutes = [
  {
    name: "Home",
    component: TabNavigator,
  },
  {
    name: "Settings",
    component: Settings,
  }
]

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Drawer Home">
      {
        drawerRoutes.map(({ name, component }) => (
          <Drawer.Screen key={name} name={name} component={component} />
        ))
      }
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;