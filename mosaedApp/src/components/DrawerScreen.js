import { View, Text, Image, Dimensions, FlatList, Pressable, } from 'react-native';
import React from 'react';

import {
  drawerbottomlogo, drawercontactlogo, drawerdplogo, drawerhomelogo, drawerlanguagelogo,
  drawerprofilelogo, drawersavedlogo, drawertermslogo, drawerworkerlogo,
} from '../Images';

const DATA = [
  // {
  //   id: 1,
  //   logo: drawerhomelogo,
  //   text: 'Home',
  //   path: 'servicehome',
  // },
  {
    id: 2,
    logo: drawerworkerlogo,
    text: 'My Workers',
    path: 'workers',
  },
  {
    id: 3,
    logo: drawerprofilelogo,
    text: 'Profile',
    path: 'profile',
  },
  {
    id: 4,
    logo: drawersavedlogo,
    text: 'Saved Workers',
    path: 'savepage',
  },
  {
    id: 5,
    logo: drawercontactlogo,
    text: 'Contact Us',
    path: 'contactus',
  },
  {
    id: 6,
    logo: drawerlanguagelogo,
    text: 'Language',
    path: 'workers',
  },
  {
    id: 7,
    logo: drawertermslogo,
    text: 'Terms & Conditions',
    path: 'termsprofile',
  },
  // {
  //   id: 8,
  //   logo: drawerlogoutlogo,
  //   text: 'Logout',
  //   path: 'workers',
  // },
];

const DrawerScreen = props => {
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;
  const { navigation } = props;
  return (
    <>
      <View style={{}}>
        <View style={{ marginLeft: HEIGHT * 0.04, marginTop: HEIGHT * 0.08, }}>
          <Image source={drawerdplogo} />
          <Text
            style={{
              marginTop: HEIGHT * 0.01,
              fontWeight: '600',
              fontSize: HEIGHT * 0.023,
            }}>
            Hisham Tourbaq
          </Text>
          <Text
            style={{
              marginTop: HEIGHT * 0.004,
              fontWeight: '300',
              fontSize: HEIGHT * 0.019,
              color: '#AFABC4',
            }}>
            +97444621428
          </Text>
        </View>
        <View style={{ marginTop: HEIGHT * 0.02 }}>
          <Pressable
            style={{
              marginBottom: -HEIGHT * 0.023,
              marginLeft: HEIGHT * 0.04,
              marginTop: HEIGHT * 0.02,
              flexDirection: 'row',
            }}
            onPress={() => {
              navigation.toggleDrawer()
            }}>
            <Image style={{ tintColor: 'black' }} source={drawerhomelogo} />
            <Text
              style={{ paddingLeft: HEIGHT * 0.02, paddingTop: HEIGHT * 0.005 }}>
              Home
            </Text>
          </Pressable>
        </View>
        <FlatList
          style={{ marginTop: HEIGHT * 0.04 }}
          data={DATA}
          renderItem={({ item }) => (
            <Pressable
              style={{
                marginTop: HEIGHT * 0.03,
                marginBottom: HEIGHT * 0.02,
                marginLeft: HEIGHT * 0.04,
                marginTop: HEIGHT * 0.02,
                flexDirection: 'row',
              }}
              onPress={() => navigation.navigate(item.path)}>
              <Image style={{ tintColor: 'black' }} source={item.logo} />
              <Text
                style={{ color: "#363636", paddingLeft: HEIGHT * 0.02, paddingTop: HEIGHT * 0.005, fontSize: HEIGHT * 0.019 }}>
                {item.text}
              </Text>
            </Pressable>
          )}
        />
      </View>
      <View style={{ position: 'absolute', left: -HEIGHT * 0.012, bottom: -HEIGHT * 0.02, }}>
        <Image source={drawerbottomlogo} />
      </View>
    </>
  );
};

export default DrawerScreen;
