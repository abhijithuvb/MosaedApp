import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../src/screens/SplashScreen'
import UserLoginScreen from '../src/screens/user/UserLoginScreen'

const Routes = () => {
    const RouteStack = createStackNavigator()
    return (
        <RouteStack.Navigator
            initialRouteName='SplashScreen'
            screenOptions={{
                headerShown: false,
                gestureEnabled: false
            }}>
            <RouteStack.Screen name='SplashScreen' component={SplashScreen} />
            <RouteStack.Screen name='UserLoginScreen' component={UserLoginScreen} />

        </RouteStack.Navigator>
    )
}

export default Routes