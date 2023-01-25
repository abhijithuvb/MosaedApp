import { View, Text, Image, Dimensions, Pressable, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  drawer,
  save,
  logo,
  housewhitelogo,
  nursewhitelogo,
  coffeewhitelogo,
  transferlogowhite,
  drawerlogoutlogo,
} from '../Images';
import ServiceTabs from './ServiceTabs';
import Header from './Header';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import has from "lodash/has"
import { api } from '../api/Api';
// import Popover from 'react-native-popover-view/dist/Popover';
import Popover from 'react-native-popover-view'
import { useDispatch, useSelector } from 'react-redux';
import { getHomeData } from '../redux/actions/apiAction';

// const DATA = [
//   {
//     id: 1,
//     text: 'Home Services',
//     icon: housewhitelogo,
//     color: '#F93BC5',
//     path: 'workers',
//     start: '#F93BC5',
//     end: '#FA2E89',
//   },
//   {
//     id: 2,
//     text: 'Nursing',
//     icon: nursewhitelogo,
//     color: '#2ECBAA',
//     path: 'company',
//     start: '#387FDA',
//     end: '#2ECBAA',
//   },
//   {
//     id: 3,
//     text: 'Guests Serving',
//     icon: coffeewhitelogo,
//     color: '#653DBC',
//     path: 'workers',
//     start: '#653DBC',
//     end: '#B865D3',
//   },
//   {
//     id: 4,
//     text: 'Sponsership Transfer',
//     icon: transferlogowhite,
//     color: '#EF7E65',
//     path: 'workers',
//     start: '#EF7E65',
//     end: '#F6B570',
//   },
// ];

const Category = ({ navigation, style }) => {


  const data = useSelector((store) => store.apiReducer.homeData)

  console.log("data->>>>", data);
  const [showPopover, setShowPopover] = useState(false);

  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;
  return (
    <>

      <View style={{ flex: 1, marginTop: HEIGHT * 0.06, backgroundColor: '#FDFCFF', }}>

        <LinearGradient
          colors={['#387FDA', '#2ECBAA']}
          start={{ x: 0.24, y: 0.67 }}
          end={{ x: 0.12, y: 0.89 }}
          style={{
            position: 'absolute',
            bottom: HEIGHT * 0.57,
            right: -HEIGHT * 0.76,
            width: HEIGHT * 2,
            height: HEIGHT * 2,
            borderRadius: HEIGHT,
          }}></LinearGradient>
        <View style={{ marginTop: -HEIGHT * 0.05 }}>
          <Header
            leftlogo={drawer}
            rightlogo={save}
            navigation={() => navigation.toggleDrawer()}
            rightOnPress={() => setShowPopover(true)}
            title="Services"
            popover={true}
            popoverVisibility={showPopover}
            updateVisibility={setShowPopover}
          />
        </View>

        <View style={{ alignItems: 'center', marginTop: HEIGHT * 0.01 }}>
          <Image source={logo} />
        </View>
        <View style={{ alignItems: 'center', padding: HEIGHT * 0.045, marginTop: HEIGHT * 0.02 }}>
          <Text
            style={{
              fontSize: HEIGHT * 0.02,
              color: '#fff',
              textAlign: 'center',
            }}>
            What Service You Are{'\n'} looking for?
          </Text>
        </View>

        <View style={{ marginTop: HEIGHT * 0.055 }}>

          <FlatList
            scrollEnabled={false}
            style={{ shadowOpacity: 0.08, elevation: 5, shadowColor: '#000' }}
            data={data}
            renderItem={({ item }) => (
              <ServiceTabs {...item} />
            )}
          />
        </View>
      </View>
    </>
  );
};

export default Category;
