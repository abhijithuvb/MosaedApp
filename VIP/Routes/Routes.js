import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../src/components/SplashScreen";

const Routes = () => {

    const RouteStack = createStackNavigator()
    return (

        <RouteStack.Navigator screenOptions={{ headerShown: false }}>
            <RouteStack.Screen name="splashscreen" component={SplashScreen} />
        </RouteStack.Navigator>

    );
}

export default Routes;