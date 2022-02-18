import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../views/Home/Home';
import Location from '../views/Location/Location';
import Profile from '../views/Profile/Profile';
import { Image, View } from 'react-native';
import { APP_ROUTES } from './routes';
import { themeColor } from '../style/Theme';

const Tab = createBottomTabNavigator();

const RenderTabBarIcon = ({ source, color }) => {
  return (
    <View style={{ width: 20, height: 20 }}>
      <Image source={source} style={{ width: "100%", resizeMode: "contain", flex: 1, tintColor: color }} />
    </View>
  );
};

const tabRoutes = [
  {
    name: APP_ROUTES.HOME,
    component: Home,
    options: {
      tabBarIcon: ({ color }) => (
        <RenderTabBarIcon source={require("../assets/images/home-nav-active.png")} color={color} />
      )
    }
  },
  {
    name: APP_ROUTES.LOCATION,
    component: Location,
    options: {
      tabBarIcon: ({ color }) => (
        <RenderTabBarIcon source={require("../assets/images/explore-nav-active.png")} color={color} />
      )
    }
  },
  {
    name: APP_ROUTES.PROFILE,
    component: Profile,
    options: {
      tabBarIcon: ({ color }) => (
        <RenderTabBarIcon source={require("../assets/images/lightning-nav-active.png")} color={color} />
      )
    }
  },
]

export const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { borderTopLeftRadius: 40, borderTopRightRadius: 40, paddingTop: 5 },
        tabBarActiveTintColor: themeColor.primaryColor,
        tabBarInactiveTintColor: "#b1afaf",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 16,
          color: "#555"
        }
      }}
      initialRouteName={APP_ROUTES.HOME}
    >
      {
        tabRoutes.map(({ name, component, options }) => (
          <Tab.Screen
            key={name}
            name={name}
            component={component}
            options={options}
          />
        ))
      }

    </Tab.Navigator>
  )
}