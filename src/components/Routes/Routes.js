import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* import {MaterialCommunityIcons} from '@expo/vector-icons'; */
import Icon from 'react-native-vector-icons/AntDesign';
import { ActivityIndicator, View } from 'react-native';
import ActivityIndicatorsDemo from '../ActivityIndicators';
import Buttons from '../Buttons';
import CustomModal from '../CustomModal';
import DisplayImage from '../DisplayImage';
import FlatListDemo from '../FlatListDemo';
import Stacks from '../Pages/Home';
/* import Home from '../Pages/Home'; */
import Home2 from '../Pages/Home2';
import Profile from '../Pages/Profile';
import Settings from '../Pages/Settings';
import RefreshControlDemo from '../RefreshControlDemo';
import ScrollViewDemo from '../ScrollViewDemo';
import SectionListDemo from '../SectionListDemo';
import TextSwitch from '../TextSwitch';
import HomePage from '../Pages/HomePage';
import Home from '../Pages/Home';
import StackPage from '../Pages/StackPage';
import StackAnim from '../Pages/StackAnim';
import DrawerAnim from '../Pages/DrawerAnim';
import BottomAnim from '../Pages/BottomAnim';
import DrawerPage from '../DrawerPage';
import InputTask from '../InputTask';
import DisplayPropTask from '../DisplayPropTask';
import TabRender from '../TabRender';
import Calculator from '../Calculator';
import Animations from '../Animation';
import Reduxtest from '../Reduxtest';
import Pattern from '../Pattern';

// const RouteStack = createStackNavigator();
const RouteStack = createStackNavigator();
const Stack = createStackNavigator();

const Stackr = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="stackpage" component={StackAnim} />
      <Stack.Screen name="activity" component={ActivityIndicatorsDemo} />
      <Stack.Screen name="buttons" component={Buttons} />
      <Stack.Screen name="custommodal" component={CustomModal} />
      <Stack.Screen name="image" component={DisplayImage} />
      <Stack.Screen name="flatlist" component={FlatListDemo} />
      <Stack.Screen name="refresh" component={RefreshControlDemo} />
      <Stack.Screen name="scrollview" component={ScrollViewDemo} />
      <Stack.Screen name="sectionlist" component={SectionListDemo} />
      <Stack.Screen name="form" component={TextSwitch} />
      <Stack.Screen name="calculator" component={Calculator} />
      <Stack.Screen name="animation" component={Animations} />
      <Stack.Screen name="redux" component={Reduxtest} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const StackDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerPage {...props} />}>
      <Drawer.Screen name="drawerpage" component={DrawerAnim} />
      <Drawer.Screen name="draw" component={DrawerPage} />
      <Drawer.Screen name="activity" component={ActivityIndicatorsDemo} />
      <Drawer.Screen name="buttons" component={Buttons} />
      <Drawer.Screen name="custommodal" component={CustomModal} />
      <Drawer.Screen name="image" component={DisplayImage} />
      <Drawer.Screen name="flatlist" component={FlatListDemo} />
      <Drawer.Screen name="refresh" component={RefreshControlDemo} />
      <Drawer.Screen name="scrollview" component={ScrollViewDemo} />
      <Drawer.Screen name="sectionlist" component={SectionListDemo} />
      <Drawer.Screen name="form" component={TextSwitch} />
      <Drawer.Screen name="inputtask" component={InputTask} />
      <Drawer.Screen name="displaytask" component={DisplayPropTask} />
      <Drawer.Screen name="tabRender" component={TabRender} />
    </Drawer.Navigator>
  );
};
const Tab = createBottomTabNavigator();
const Bottom = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',

          tabBarIcon: ({ color, size }) => (
            <Icon name="profile" size={size} color="#900" />
          ),
          tabBarBadge: 3,
        }}
        name="bottompage"
        component={BottomAnim}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'activity',

          tabBarIcon: ({ color, size }) => (
            <Icon name="contacts" size={size} color="#900" />
          ),
          tabBarBadge: 3,
        }}
        name="activity"
        component={ActivityIndicatorsDemo}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'buttons',

          tabBarIcon: ({ color, size }) => (
            <Icon name="exclamationcircle" size={size} color="#900" />
          ),
          tabBarBadge: 3,
        }}
        name="buttons"
        component={Buttons}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'buttons',

          tabBarIcon: ({ color, size }) => (
            <Icon name="exclamationcircle" size={size} color="#900" />
          ),
          tabBarBadge: 3,
        }}
        name="custommodal"
        component={CustomModal}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'buttons',

          tabBarIcon: ({ color, size }) => (
            <Icon name="exclamationcircle" size={size} color="#900" />
          ),
          tabBarBadge: 3,
        }}
        name="image"
        component={DisplayImage}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'buttons',

          tabBarIcon: ({ color, size }) => (
            <Icon name="exclamationcircle" size={size} color="#900" />
          ),
          tabBarBadge: 3,
        }}
        name="flatlist"
        component={FlatListDemo}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'buttons',

          tabBarIcon: ({ color, size }) => (
            <Icon name="exclamationcircle" size={size} color="#900" />
          ),
          tabBarBadge: 3,
        }}
        name="refresh"
        component={RefreshControlDemo}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'buttons',

          tabBarIcon: ({ color, size }) => (
            <Icon name="exclamationcircle" size={size} color="#900" />
          ),
          tabBarBadge: 3,
        }}
        name="scrollview"
        component={ScrollViewDemo}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'buttons',

          tabBarIcon: ({ color, size }) => (
            <Icon name="exclamationcircle" size={size} color="#900" />
          ),
          tabBarBadge: 3,
        }}
        name="sectionlist"
        component={SectionListDemo}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'buttons',

          tabBarIcon: ({ color, size }) => (
            <Icon name="exclamationcircle" size={size} color="#900" />
          ),
          tabBarBadge: 3,
        }}
        name="form"
        component={TextSwitch}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <RouteStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='HomePage'
    >
      <RouteStack.Screen name="HomePage" component={HomePage} />
      <RouteStack.Screen name="StackPage" component={Stackr} />
      <RouteStack.Screen name="StackDrawer" component={StackDrawer} />
      <RouteStack.Screen name="bottom" component={Bottom} />
      <RouteStack.Screen name="calculator" component={Calculator} />
      <RouteStack.Screen name="Pattern" component={Pattern} />

    </RouteStack.Navigator>
  );
};

export default Routes;
