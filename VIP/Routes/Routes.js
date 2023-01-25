import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../src/screens/HomeScreen";
import LoginScreen from "../src/screens/LoginScreen";
import OtpScreen from "../src/screens/OtpScreen";
import SignUpScreen from "../src/screens/SignUpScreen";
import SplashScreen from "../src/screens/SplashScreen";

const RouteDrawer = createDrawerNavigator()

// const Drawer = () => {
//     return (
//         <RouteDrawer.Navigator>
//             <RouteDrawer.Screen name="screen">

//             </RouteDrawer.Screen>
//         </RouteDrawer.Navigator>
//     )
// }




const Routes = () => {

    const RouteStack = createStackNavigator()
    return (

        <RouteStack.Navigator screenOptions={{ headerShown: false }}>
            <RouteStack.Screen name="SplashScreen" component={SplashScreen} />
            <RouteStack.Screen name="LoginScreen" component={LoginScreen} />
            <RouteStack.Screen name="OtpScreen" component={OtpScreen} />
            <RouteStack.Screen name="SignUpScreen" component={SignUpScreen} />
            {/* <RouteStack.Screen name="HomeScreen" component={Drawer} /> */}
        </RouteStack.Navigator>

    );
}

export default Routes;