import { View, Text, Image, Pressable, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import Popover from 'react-native-popover-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { drawer, drawerlogoutlogo, save } from '../Images';

const Header = ({
  navigation,
  leftlogo,
  rightlogo,
  title,
  subtitle,
  rightOnPress, popover, updateVisibility, popoverVisibility
}) => {
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;

  const navigate = useNavigation()


  return (
    <View style={{ marginTop: HEIGHT * 0.04 }}>
      <View
        style={{
          height: HEIGHT * 0.083,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Pressable
          style={{ marginLeft: HEIGHT * 0.02, marginTop: HEIGHT * 0.032 }}
          onPress={() => navigation()}>
          <Image source={leftlogo} />
        </Pressable>
        <View style={{ marginTop: HEIGHT * 0.025 }}>
          <Text
            style={{
              fontSize: HEIGHT * 0.027,
              color: '#fff',
              textAlign: 'center',
            }}>
            {title}
          </Text>
          {subtitle ? (
            <Text
              style={{
                textAlign: 'center',
                marginTop: HEIGHT * 0.004,
                fontSize: HEIGHT * 0.019,
                fontWeight: '300',
                color: '#FFFFFF',
              }}>
              {subtitle}
            </Text>
          ) : null}
        </View>

        {popover ? <Popover
          isVisible={popoverVisibility}
          onRequestClose={() => updateVisibility(false)}
          from={(
            <Pressable
              style={{ marginTop: HEIGHT * 0.032, paddingRight: HEIGHT * 0.02 }}
              onPress={() => rightOnPress()}>
              <Image source={rightlogo} />
            </Pressable>
          )}>
          <View style={{}}>
            <Pressable
              style={{
                marginBottom: HEIGHT * 0.02,
                marginLeft: HEIGHT * 0.02,
                marginTop: HEIGHT * 0.02,
                marginRight: HEIGHT * 0.02,
                flexDirection: 'row',
              }}
              onPress={async () => {
                await AsyncStorage.removeItem("loggedIn")
                // await AsyncStorage.removeItem("introSliderStatus")
                navigate.navigate('welcome')
              }}>
              <Image style={{ tintColor: 'black' }} source={drawerlogoutlogo} />
              <Text
                style={{ paddingLeft: HEIGHT * 0.02, paddingTop: HEIGHT * 0.005 }}>
                Logout
              </Text>
            </Pressable>
          </View>
        </Popover> : <Pressable
          style={{ marginTop: HEIGHT * 0.032, paddingRight: HEIGHT * 0.02 }}
          onPress={() => rightOnPress()}>
          <Image source={rightlogo} />
        </Pressable>}
      </View>
    </View>
  );
};

export default Header;
