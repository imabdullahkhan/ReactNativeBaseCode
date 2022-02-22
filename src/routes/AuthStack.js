import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from '../views/SignIn/SignIn'
import { APP_ROUTES } from './routes'

const Stack = createStackNavigator();


const authRoutes = [
  {
    name: APP_ROUTES.LOGIN,
    component: SignIn
  }
]

const AuthStack = () => {
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

export default AuthStack;