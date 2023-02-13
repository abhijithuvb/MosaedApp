import {
  createDrawerNavigator,
  useDrawerProgress,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { WIDTH } from '../Constants/Constants';
import { drawertoplogo } from '../src/assets';
import BeachDetailsScreen from '../src/screens/BeachDetailsScreen';
import BeachListScreen from '../src/screens/BeachListScreen';
import BookedTicketScreen from '../src/screens/BookedTicketScreen';
import BuildScreen from '../src/screens/cabanas/BuildScreen';
import CabanaScreen from '../src/screens/cabanas/CabanaScreen';
import CustomCabanaScreen from '../src/screens/cabanas/CustomCabanaScreen';
import SingleCabanaScreen from '../src/screens/cabanas/SingleCabanaScreeen';
import ChooseLocationScreen from '../src/screens/ChooseLocationScreen';
import DesertListScreen from '../src/screens/DesertListScreen';

import DrawerScreen from '../src/screens/DrawerScreen';
import EditProfileScreen from '../src/screens/EditProfileScreen';
import HomeScreen from '../src/screens/HomeScreen';
import LoginScreen from '../src/screens/LoginScreen';
import MyActivityScreen from '../src/screens/MyActivityScreen';
import MyProfileScreen from '../src/screens/MyProfileScreen';
import OtpScreen from '../src/screens/OtpScreen';
import PaymentGatewayScreen from '../src/screens/PaymentGatewayScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import RentDayBookingScreen from '../src/screens/RentDayBookingScreen';
import ServiceScreen from '../src/screens/ServiceScreen';
import SignUpScreen from '../src/screens/SignUpScreen';
import SplashScreen from '../src/screens/SplashScreen';
import TerrainScreen from '../src/screens/TerrainScreen';
import TerrainSummaryScreen from '../src/screens/TerrainSummaryScreen';
import TowingLocationScreen from '../src/screens/TowingLocationScreen';
import TowingTicketScreen from '../src/screens/TowingTicketScreen';
import WashCabanSCreen from '../src/screens/WashCabanSCreen';
import WashingBookingScreen from '../src/screens/WashingBookingScreen';
import WashServicesScreen from '../src/screens/WashServicesScreen';
import WashSummaryScreen from '../src/screens/WashSummaryScreen';
import WashTicketScreen from '../src/screens/WashTicketScreen';
import ActivityIndicatorsDemo from '../../src/components/ActivityIndicators';
import TextSwitch from '../../src/components/TextSwitch';
import ScrollViewDemo from '../../src/components/ScrollViewDemo';

const RouteDrawer = createDrawerNavigator();

const Drawer = () => {
  const [progressValue, setProgressValue] = useState(0);
  const CustomDrawerContent = props => {
    const progress = useDrawerProgress();
    useEffect(() => {
      setProgressValue(progress);
    }, []);
    // console.log(progress);
    return <DrawerScreen />;
  };

  const scaleX = Animated.interpolateNode(progressValue, {
    inputRange: [0, 1],
    outputRange: [1, 1],
  });
  const scaleY = Animated.interpolateNode(progressValue, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const animatedStyle = {
    transform: [{ scaleX: scaleX }, { scaleY: scaleY }],
  };
  console.log(scaleX, scaleY);

  return (
    <RouteDrawer.Navigator
      useLegacyImplementation
      drawerContent={props => {
        return <CustomDrawerContent {...props} />;
      }}
      screenOptions={{
        drawerStyle: { width: WIDTH * 0.8 },
        headerShown: false,
        drawerType: 'back',
        overlayColor: 'transparent',
        sceneContainerStyle: { backgroundColor: '#181D23' },
      }}>
      <RouteDrawer.Screen name="drawer">
        {props => {
          return <AnimatedScreen animatedStyles={animatedStyle} {...props} />;
        }}
      </RouteDrawer.Screen>
    </RouteDrawer.Navigator>
  );
};

const animatedStack = createStackNavigator();
const AnimatedScreen = ({ animatedStyles }) => {
  return (
    <Animated.View style={[animatedStyles, { flex: 1 }]}>
      <View style={{ position: 'absolute', left: 0, top: -100 }}>
        <Image source={drawertoplogo} />
      </View>
      <animatedStack.Navigator screenOptions={{ headerShown: false }}>
        <animatedStack.Screen name="HomeScreen" component={HomeScreen} />
      </animatedStack.Navigator>
    </Animated.View>
  );
};

const TopTabs = () => {
  const Tab = createMaterialTopTabNavigator()
  return (
    <Tab.Navigator tabBar={MyActivityScreen} >
      <Tab.Screen name='activity' component={ActivityIndicatorsDemo} />
      <Tab.Screen name='two' component={TextSwitch} />
      <Tab.Screen name='three' component={ScrollViewDemo} />
    </Tab.Navigator>
  )
}

const Routes = () => {
  const RouteStack = createStackNavigator();
  return (
    <RouteStack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
      <RouteStack.Screen name="SplashScreen" component={SplashScreen} />
      <RouteStack.Screen name="LoginScreen" component={LoginScreen} />
      <RouteStack.Screen name="OtpScreen" component={OtpScreen} />
      <RouteStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <RouteStack.Screen name="HomeScreen" component={Drawer} />
      <RouteStack.Screen name="TerrainScreen" component={TerrainScreen} />
      <RouteStack.Screen name="RentDayBookingScreen" component={RentDayBookingScreen} />
      <RouteStack.Screen
        name="BeachListScreen"
        component={BeachListScreen}
      />
      <RouteStack.Screen
        name="DesertListScreen"
        component={DesertListScreen}
      />
      <RouteStack.Screen
        name="BeachDetailsScreen"
        component={BeachDetailsScreen}
      />
      <RouteStack.Screen
        name="TerrainSummaryScreen"
        component={TerrainSummaryScreen}
      />
      <RouteStack.Screen
        name="PaymentGatewayScreen"
        component={PaymentGatewayScreen}
      />
      <RouteStack.Screen
        name="BookedTicketScreen"
        component={BookedTicketScreen}
      />
      <RouteStack.Screen
        name="ServiceScreen"
        component={ServiceScreen}
      />
      <RouteStack.Screen
        name="ChooseLocationScreen"
        component={ChooseLocationScreen}
      />
      <RouteStack.Screen
        name="WashingBookingScreen"
        component={WashingBookingScreen}
      />
      <RouteStack.Screen
        name="WashCabanSCreen"
        component={WashCabanSCreen}
      />
      <RouteStack.Screen
        name="WashServicesScreen"
        component={WashServicesScreen}
      />
      <RouteStack.Screen
        name="WashSummaryScreen"
        component={WashSummaryScreen}
      />
      <RouteStack.Screen
        name="WashTicketScreen"
        component={WashTicketScreen}
      />
      <RouteStack.Screen name='TowingLocationScreen' component={TowingLocationScreen} />
      <RouteStack.Screen name='TowingTicketScreen' component={TowingTicketScreen} />
      <RouteStack.Screen name='BuildScreen' component={BuildScreen} />
      <RouteStack.Screen name='CabanaScreen' component={CabanaScreen} />
      <RouteStack.Screen name='SingleCabanaScreen' component={SingleCabanaScreen} />
      <RouteStack.Screen name='CustomCabanaScreen' component={CustomCabanaScreen} />
      <RouteStack.Screen name='ProfileScreen' component={ProfileScreen} />
      <RouteStack.Screen name='MyProfileScreen' component={MyProfileScreen} />
      <RouteStack.Screen name='EditProfileScreen' component={EditProfileScreen} />
      <RouteStack.Screen name='MyActivityScreen' component={MyActivityScreen} />
    </RouteStack.Navigator>
  );
};

export default Routes;
