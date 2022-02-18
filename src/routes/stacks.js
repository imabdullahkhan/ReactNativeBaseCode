import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from '../views/SignIn/SignIn'
import { AppTabs } from './tabs';
import { APP_ROUTES } from './routes'

const Stack = createStackNavigator();


const appRoutes = [
  {
    name: APP_ROUTES.BOTTOM_TABS,
    component: AppTabs
  }
]

export const AppStack = () => {
  return (
    <Stack.Navigator>
      {
        appRoutes.map(({ name, component }) => (
          <Stack.Screen key={name} options={{ headerShown: false }} name={name} component={component} />
        ))
      }
    </Stack.Navigator>
  );
};

const authRoutes = [
  {
    name: APP_ROUTES.LOGIN,
    component: SignIn
  }
]

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      {
        authRoutes.map(({ name, component }) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))
      }
    </Stack.Navigator>
  );
};
