import { View, Text, Dimensions, Image, TextInput } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, interpolateNode, } from 'react-native-reanimated';
import React, { useEffect, useState } from 'react';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { createDrawerNavigator, useDrawerProgress, } from '@react-navigation/drawer';

import WelcomePage from '../components/screens/WelcomePage';
import NameScreen from '../components/NameScreen';
import Terms from '../components/Terms';
import ServicesPage from '../components/ServicesPage';
import Category from '../components/Category';
import DrawerScreen from '../components/DrawerScreen';
import Workers from '../components/Workers';
import Company from '../components/Company';
import Saved from '../components/Saved';
import ContactUsPage from '../components/ContactUsPage';
import SponserShip from '../components/SponserShip';
import SponserShipDetails from '../components/SponserShipDetails';
import Profile from '../components/Profile';
import TermsProfile from '../components/TermsProfile';
import SingleProfile from '../components/SingleProfile';
import SingleProfileSaved from '../components/SingleProfileSaved';
import OpeningPage from '../components/OpeningPage';
import DrawerBackScreen from '../components/DrawerBackScreen'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const RouteDrawer = createDrawerNavigator();

const Drawer = (props) => {
  const [progress, setProgress] = useState(0)

  const CustomDrawerContent = (props) => {
    const progressValue = useDrawerProgress();
    useEffect(() => {
      setProgress(progressValue);
    }, [progressValue])
    return <DrawerScreen {...props} />
  }

  const scaleY = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.7],
  });
  const scaleX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, WIDTH * 0.05],
  });
  // const rotate = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: ["0 deg", "-5 deg"],
  // });

  const animatedStyle = {
    borderRadius, transform: [{ scaleY }, { scaleX/* ,rotate */ }],
  };
  return (
    <RouteDrawer.Navigator
      useLegacyImplementation
      screenOptions={{ headerShown: false, drawerType: "back", sceneContainerStyle: { backgroundColor: "#fff" }, overlayColor: "transparent", drawerContentStyle: { backgroundColor: "red" } }}
      drawerContent={props => {
        return <CustomDrawerContent {...props} />;
      }}>
      <RouteDrawer.Screen name="Screens">
        {props => { return <Screens  {...props} animatedStyles={animatedStyle} /> }}
      </RouteDrawer.Screen>
    </RouteDrawer.Navigator>
  )
}

const ScreenStack = createStackNavigator();
const Screens = ({ animatedStyles }) => {
  const { borderRadius } = animatedStyles
  return (
    <Animated.View style={[{ flex: 1, }, animatedStyles]}>
      <DrawerBackScreen />
      <Animated.View style={{ flex: 1, borderRadius, overflow: 'hidden', }}>
        <ScreenStack.Navigator screenOptions={{ headerShown: false, }}>
          <ScreenStack.Screen name="servicehome" component={Category} />
        </ScreenStack.Navigator>
      </Animated.View>
    </Animated.View>
  )
}

const Routes = () => {
  const RouteStack = createStackNavigator();
  return (
    <RouteStack.Navigator initialRouteName="open" screenOptions={{ headerShown: false }}>
      <RouteStack.Screen name="open" component={OpeningPage} />
      <RouteStack.Screen name="welcome" component={WelcomePage} />
      <RouteStack.Screen name="namepage" component={NameScreen} />
      <RouteStack.Screen name="terms" component={Terms} />
      <RouteStack.Screen name="services" component={ServicesPage} />
      <RouteStack.Screen name="servicehome" component={Drawer} />
      <RouteStack.Screen name="workers" component={Workers} />
      <RouteStack.Screen name="company" component={Company} />
      <RouteStack.Screen name="savepage" component={Saved} />
      <RouteStack.Screen name="contactus" component={ContactUsPage} />
      <RouteStack.Screen name="sponsership" component={SponserShip} />
      <RouteStack.Screen name="profile" component={Profile} />
      <RouteStack.Screen name="termsprofile" component={TermsProfile} />
      <RouteStack.Screen name="singleprofile" component={SingleProfile} />
      <RouteStack.Screen name="singleprofilesaved" component={SingleProfileSaved} />
      <RouteStack.Screen name="sponserdetails" component={SponserShipDetails} />
    </RouteStack.Navigator>
  );
};

export default Routes;
