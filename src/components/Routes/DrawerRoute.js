import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePage from '../Pages/HomePage';
import ActivityIndicatorsDemo from '../ActivityIndicators';
const Drawer = createDrawerNavigator();

function StackPage() {
  const Stack = createStackNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={HomePage} />
      <Drawer.Screen name="activity" component={ActivityIndicatorsDemo} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}

export default StackPage;
