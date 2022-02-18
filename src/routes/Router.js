import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { useAuth } from '../contexts/Auth';
import MainLoader from '../components/Loader/MainLoader';
import { AppStack, AuthStack } from './stacks';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Router() {
    const { authData, loading } = useAuth();

    if (loading) return <MainLoader />;


    const MyTheme = {
        dark: false,
        colors: {
            primary: 'rgb(255, 45, 85)',
            background: 'rgb(242, 242, 242)',
            card: 'rgb(255, 255, 255)',
            text: 'rgb(28, 28, 30)',
            border: 'rgb(199, 199, 204)',
            notification: 'rgb(255, 69, 58)',
        },
    };

    return (
        <SafeAreaProvider>
            <NavigationContainer theme={MyTheme}>
                {authData?.token ? <AppStack /> : <AuthStack />}
            </NavigationContainer>
        </SafeAreaProvider>
    )
}
