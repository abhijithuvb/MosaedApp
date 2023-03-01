import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'
import { TransitionPresets } from '@react-navigation/stack'

import SplashScreen from '../src/screens/SplashScreen'
import UserLoginScreen from '../src/screens/user/UserLoginScreen'
import KnowMoreScreen from '../src/screens/user/KnowMoreScreen'
import OtpScreen from '../src/screens/user/OtpScreen'
import TermsScreen from '../src/screens/user/TermsScreen'
import HomeScreen from '../src/screens/user/HomeScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from '../src/components/user/DrawerContent'


const Drawer = () => {
    const RouteDrawer = createDrawerNavigator()
    const { lang } = useSelector((state) => state.i18nState)
    return (
        <RouteDrawer.Navigator
            drawerContent={DrawerContent}
            screenOptions={{ headerShown: false, drawerPosition: lang == 'en' ? 'left' : 'right' }}>
            <RouteDrawer.Screen name='Drawer' component={HomeScreen} />
        </RouteDrawer.Navigator>
    )
}


const Routes = () => {
    const RouteStack = createStackNavigator()
    const { lang } = useSelector((state) => state.i18nState)

    return (
        <RouteStack.Navigator
            initialRouteName='SplashScreen'
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
                gestureDirection: lang == 'en' ? 'horizontal' : 'horizontal-inverted', ...TransitionPresets.SlideFromRightIOS
            }}>
            <RouteStack.Screen name='SplashScreen' component={SplashScreen} />
            <RouteStack.Screen name='UserLoginScreen' component={UserLoginScreen} />
            <RouteStack.Screen name='KnowMoreScreen' component={KnowMoreScreen} />
            <RouteStack.Screen name='OtpScreen' component={OtpScreen} />
            <RouteStack.Screen name='TermsScreen' component={TermsScreen} />
            <RouteStack.Screen name='HomeScreen' component={Drawer} />

        </RouteStack.Navigator>
    )
}

export default Routes