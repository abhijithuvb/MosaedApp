import { View, Text, Image, Dimensions, TextInput } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Header from './Header';
import { backlogo, pluslogo, searchlogo } from '../Images';
import DrawerBacksmallScreen from './DrawerBacksmallScreen';


const Company = ({ navigation }) => {

  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;
  return (
    <View style={[{ position: 'absolute', right: WIDTH * 0.25, top: HEIGHT * 0.05, overflow: 'hidden', height: HEIGHT * 0.81, borderRadius: WIDTH * 0.05, backgroundColor: '#ededed', opacity: 0.4 }]}>
      <View style={{}}>
        <LinearGradient
          colors={['#387FDA', '#2ECBAA']}
          start={{ x: 0.2, y: 0.67 }}
          end={{ x: 0.13, y: 0.87 }}
          style={{
            position: 'absolute',
            bottom: -HEIGHT * 0.07,
            right: -HEIGHT * 0.76,
            width: HEIGHT * 2,
            height: HEIGHT * 2,
            borderRadius: HEIGHT,
          }}></LinearGradient>
        <Header
          title="Companies"
          leftlogo={backlogo}
          rightlogo={pluslogo}
          navigation={() => {
            navigation.navigate('servicehome');
          }}
        />

        <View style={{ alignItems: 'center' }}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 2,
              width: HEIGHT * 0.37,
              height: HEIGHT * 0.068,
              borderRadius: HEIGHT * 0.008,
              opacity: 0.5,
              marginLeft: HEIGHT * 0.02,
              marginTop: HEIGHT * 0.02,
              // marginBottom: HEIGHT * 0.09,
              backgroundColor: '#000000',
            }}>
            <Image
              source={searchlogo}
              style={{
                marginTop: HEIGHT * 0.015,
                marginLeft: HEIGHT * 0.012,
              }}
            />
            <TextInput
              style={{
                width: HEIGHT * 0.29,
                height: HEIGHT * 0.055,
                borderRadius: HEIGHT * 0.008,
                color: 'black',
                paddingLeft: HEIGHT * 0.008,
                color: 'white',
              }}
              placeholder="Search"
              placeholderTextColor="white"
            />
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          top: HEIGHT * 0.165,
          left: HEIGHT * 0.025,
        }}>
        <DrawerBacksmallScreen onPress={() => navigation.navigate('workers')} />

      </View>
    </View>
  );
};

export default Company;
