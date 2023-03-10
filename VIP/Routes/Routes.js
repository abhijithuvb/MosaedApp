import {
  createDrawerNavigator,
  useDrawerProgress,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { HEIGHT, WIDTH } from '../Constants/Constants';
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
import MemberShipScreen from '../src/screens/MemberShipScreen';
import GoldScreen from '../src/screens/GoldScreen';
import AboutUsScreen from '../src/screens/AboutUsScreen';
import SupportScreen from '../src/screens/SupportScreen';
import PolicyScreen from '../src/screens/PolicyScreen';
import CustomCabanaEndScreen from '../src/screens/cabanas/CustomCabanaEndScreen';
import DrawerBackScreen from '../src/components/DrawerBackScreen'

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
    outputRange: [1, 0.8],
  });
  const scaleY = Animated.interpolateNode(progressValue, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progressValue, {
    inputRange: [0, 1],
    outputRange: [0, WIDTH * 0.05],
  });
  const animatedStyle = {
    borderRadius, transform: [{ scaleX: scaleX }, { scaleY: scaleY }],

  };
  console.log(scaleX, scaleY);

  return (
    <RouteDrawer.Navigator
      useLegacyImplementation
      drawerContent={props => {
        return <CustomDrawerContent {...props} />;
      }}

      screenOptions={{
        // drawerStyle: { width: WIDTH * 0.8 },
        headerShown: false,
        drawerType: 'back',
        overlayColor: "transparent",
        sceneContainerStyle: { backgroundColor: '#181D23' },
        drawerContentStyle: { backgroundColor: "red" }
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
    <Animated.View style={[animatedStyles, { flex: 1, shadowColor: 'black', shadowOpacity: 0.9, }]}>
      <View style={{ position: 'absolute', right: WIDTH * 0.15, top: HEIGHT * 0.16, borderWidth: 1, borderRadius: HEIGHT * 0.009 }}>
        <DrawerBackScreen />
      </View>
      <Animated.View style={[{ flex: 1, shadowColor: 'black', shadowOpacity: 0.9, borderLeftWidth: 1, borderColor: 'black', overflow: 'hidden' }]}>
        <View style={{ position: 'absolute', left: 0, top: -100 }}>
          <Image source={drawertoplogo} />
        </View>
        <animatedStack.Navigator screenOptions={{ headerShown: false }}>
          <animatedStack.Screen name="HomeScreen" component={HomeScreen} />
        </animatedStack.Navigator>
      </Animated.View>
    </Animated.View>
  );
};



const Routes = () => {
  const RouteStack = createStackNavigator();
  return (
    <RouteStack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false, gestureEnabled: false }}>
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
      <RouteStack.Screen name='MemberShipScreen' component={MemberShipScreen} />
      <RouteStack.Screen name='GoldScreen' component={GoldScreen} />
      <RouteStack.Screen name='AboutUsScreen' component={AboutUsScreen} />
      <RouteStack.Screen name='SupportScreen' component={SupportScreen} />
      <RouteStack.Screen name='PolicyScreen' component={PolicyScreen} />
      <RouteStack.Screen name='CustomCabanaEndScreen' component={CustomCabanaEndScreen} />
    </RouteStack.Navigator>
  );
};

export default Routes;
