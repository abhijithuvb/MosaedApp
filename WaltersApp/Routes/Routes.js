import { View, Text, Image, Platform } from 'react-native'
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
import OurLocationScreen from '../src/screens/user/OurLocationScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from '../src/components/user/DrawerContent'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ActivityIndicatorsDemo from '../../src/components/ActivityIndicators'
import BottomAnim from '../../src/components/Pages/BottomAnim'
import Buttons from '../../src/components/Buttons'
import { HEIGHT } from '../src/constants/dimensions'
import { tabdashboard, tabhome } from '../src/assets/images'
import { colors } from '../src/constants/colors'
import EditProfileScreen from '../src/screens/user/EditProfileScreen'
import ContactusScreen from '../src/screens/user/ContactusScreen'
import CarouselScreen from '../src/screens/user/CarouselScreen'
import CartScreen from '../src/screens/user/CartScreen'
import PickUpLocationScreen from '../src/screens/user/PickUpLocationScreen'
import PaymentScreen from '../src/screens/user/PaymentScreen'
import DashBoardScreen from '../src/screens/user/DashBoardScreen'



const BottomTab = () => {
    const RouteTab = createBottomTabNavigator()
    return (
        <RouteTab.Navigator screenOptions={{

            headerShown: false, tabBarStyle: { height: HEIGHT * 0.08 }, tabBarActiveTintColor: colors.darkbrown,
            tabBarLabelStyle: { marginBottom: Platform.OS == "android" ? HEIGHT * 0.01 : HEIGHT * 0.00 }
        }}>
            <RouteTab.Screen name="HomeScreen" component={HomeScreen} options={{

                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size, tintColor }) => (
                    <Image source={tabhome} size={size} style={{ color: tintColor }} />
                ),

            }} />
            <RouteTab.Screen name="DashBoardScreen" component={DashBoardScreen} options={{
                tabBarLabel: 'DashBoard',
                tabBarIcon: ({ color, size }) => (
                    <Image source={tabdashboard} size={size} style={{}} />
                ),
            }} />

        </RouteTab.Navigator>
    )

}

const Drawer = (props, context) => {
    const RouteDrawer = createDrawerNavigator()
    const { lang } = useSelector((state) => state.i18nState)
    return (
        <RouteDrawer.Navigator
            drawerContent={() => <DrawerContent {...props} context={context} />}
            screenOptions={{ headerShown: false, drawerPosition: lang == 'en' ? 'left' : 'right', }}>
            <RouteDrawer.Screen name='bottom' component={BottomTab} />
            <RouteDrawer.Screen name='Drawer' component={HomeScreen} />
            <RouteDrawer.Screen name='OurLocationScreen' component={OurLocationScreen} />
            <RouteDrawer.Screen name='EditProfileScreen' component={EditProfileScreen} />
            <RouteDrawer.Screen name='ContactusScreen' component={ContactusScreen} />
            <RouteDrawer.Screen name='CarouselScreen' component={CarouselScreen} />
            <RouteDrawer.Screen name='CartScreen' component={CartScreen} />
            <RouteDrawer.Screen name='PickUpLocationScreen' component={PickUpLocationScreen} />
            <RouteDrawer.Screen name='PaymentScreen' component={PaymentScreen} />
            <RouteDrawer.Screen name='DashBoardScreen' component={DashBoardScreen} />

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
            <RouteStack.Screen name='OurLocationScreen' component={OurLocationScreen} />
            <RouteStack.Screen name='HomeScreen' component={Drawer} />
            {/* <RouteStack.Screen name='EditProfileScreen' component={EditProfileScreen} /> */}
            {/* <RouteStack.Screen name='ContactusScreen' component={ContactusScreen} /> */}
            {/* <RouteStack.Screen name='CarouselScreen' component={CarouselScreen} /> */}
            {/* <RouteStack.Screen name='CartScreen' component={CartScreen} /> */}
            {/* <RouteStack.Screen name='PickUpLocationScreen' component={PickUpLocationScreen} /> */}





        </RouteStack.Navigator>
    )
}

export default Routes