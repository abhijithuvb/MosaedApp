import { createDrawerNavigator, useDrawerProgress } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";
import { WIDTH } from "../Constants/Constants";
import { drawertoplogo } from "../src/assets";

import DrawerScreen from "../src/screens/DrawerScreen";
import HomeScreen from "../src/screens/HomeScreen";
import LoginScreen from "../src/screens/LoginScreen";
import OtpScreen from "../src/screens/OtpScreen";
import SignUpScreen from "../src/screens/SignUpScreen";
import SplashScreen from "../src/screens/SplashScreen";
import TerrainScreen from "../src/screens/TerrainScreen";

const RouteDrawer = createDrawerNavigator()

const Drawer = () => {
    const [progressValue, setProgressValue] = useState(0)
    const CustomDrawerContent = (props) => {
        const progress = useDrawerProgress()
        useEffect(() => {
            setProgressValue(progress)
        }, [])
        console.log(progress);
        return <DrawerScreen />
    }




    const scaleX = Animated.interpolateNode(progressValue, { inputRange: [0, 1], outputRange: [1, 1] })
    const scaleY = Animated.interpolateNode(progressValue, { inputRange: [0, 1], outputRange: [1, 0.8] })
    const animatedStyle = {
        transform: [{ scaleX: scaleX }, { scaleY: scaleY }]
    }
    console.log(scaleX, scaleY);

    return (
        <RouteDrawer.Navigator useLegacyImplementation drawerContent={props => { return <CustomDrawerContent {...props} /> }} screenOptions={{ drawerStyle: { width: WIDTH * 0.8, }, headerShown: false, drawerType: "back", overlayColor: 'transparent', sceneContainerStyle: { backgroundColor: '#181D23', } }} >

            <RouteDrawer.Screen name="drawer" >
                {props => { return <AnimatedScreen animatedStyles={animatedStyle} {...props} /> }}


            </RouteDrawer.Screen>
        </RouteDrawer.Navigator>
    )
}

const animatedStack = createStackNavigator()
const AnimatedScreen = ({ animatedStyles }) => {
    return (
        <Animated.View style={[animatedStyles, { flex: 1, }]}>
            <View style={{ position: 'absolute', left: 0, top: -100 }}>
                <Image source={drawertoplogo} />
            </View>
            <animatedStack.Navigator screenOptions={{ headerShown: false }}>
                <animatedStack.Screen name="HomeScreen" component={HomeScreen} />
            </animatedStack.Navigator>
        </Animated.View>
    )
}




const Routes = () => {

    const RouteStack = createStackNavigator()
    return (

        <RouteStack.Navigator screenOptions={{ headerShown: false }}>
            <RouteStack.Screen name="SplashScreen" component={SplashScreen} />
            <RouteStack.Screen name="LoginScreen" component={LoginScreen} />
            <RouteStack.Screen name="OtpScreen" component={OtpScreen} />
            <RouteStack.Screen name="SignUpScreen" component={SignUpScreen} />
            <RouteStack.Screen name="HomeScreen" component={Drawer} />
            <RouteStack.Screen name="TerrainScreen" component={TerrainScreen} />
        </RouteStack.Navigator>

    );
}

export default Routes;