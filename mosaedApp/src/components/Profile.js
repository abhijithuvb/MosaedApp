import { View, Dimensions, Image, ImageBackground, } from 'react-native';
import React from 'react';
import { backlogo, profilephoto, blackcovered, camera } from '../Images/index.js';
import LinearGradient from 'react-native-linear-gradient';

import Header from './Header';
import CustomButton from './Reusable/CustomButton';
import TextBox from './Reusable/TextBox';
const Profile = ({ navigation }) => {
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;
  return (
    <View>
      <View style={{ height: HEIGHT * 0.2 }}>
        <LinearGradient
          colors={['#387FDA', '#2ECBAA']}
          start={{ x: 0.2, y: 0.73 }}
          end={{ x: 0.12, y: 0.87 }}
          style={{
            position: 'absolute',
            bottom: -HEIGHT * 0.075,
            right: -HEIGHT * 0.76,
            width: HEIGHT * 2,
            height: HEIGHT * 2,
            borderRadius: HEIGHT,
          }}></LinearGradient>
        <View style={{ marginTop: HEIGHT * 0.02 }}>
          <Header
            title="My Profile"
            leftlogo={backlogo}
            rightlogo=""
            navigation={() =>
              navigation.navigate('servicehome', { screen: 'servicehome' })
            }
          />
        </View>

      </View>
      <View
        style={{
          position: 'absolute',
          top: HEIGHT * 0.20,
          left: WIDTH * 0.35,
        }}>
        <ImageBackground source={profilephoto}>
          <Image source={blackcovered} />
          <Image
            style={{
              position: 'absolute',
              top: HEIGHT * 0.054,
              left: WIDTH * 0.11,
            }}
            source={camera}
          />
        </ImageBackground>
      </View>

      <View
        style={{
          height: HEIGHT * 0.46,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: HEIGHT * 0.06
        }}>
        <View style={{ marginTop: HEIGHT * 0.11 }}>
          <TextBox label="Full Name" />
          <TextBox label="Phone Number" />
        </View>

        <View style={{ marginTop: HEIGHT * 0.03 }}>
          <CustomButton
            value="Save Changes"
            onPress={() => navigation.navigate('welcome')}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;
