import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import React from 'react'
import { useAuth } from '../contexts/Auth';
import MainLoader from '../components/Loader/MainLoader';
import { AppStack, AuthStack } from './stacks';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useColorScheme } from 'react-native';
import { themeColor } from '../style/Theme';
import { useSelector } from 'react-redux';

export default function Router() {
    const { authData, loading } = useAuth();

    if (loading) return <MainLoader />;

    const theme = useSelector(state => state.general.theme);
    const MyTheme = {
        ...DefaultTheme,
        dark: theme === 'dark',
        colors: {
            ...(theme === 'dark' ? DarkTheme : DefaultTheme),
            ...themeColor(theme),
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
