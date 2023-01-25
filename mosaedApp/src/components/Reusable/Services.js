import { View, Text, Dimensions, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Services = ({ color, logo, title, description, start, end }) => {
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;
  return (
    <View
      style={{
        height: HEIGHT * 0.59,

        width: WIDTH * 0.9,

        borderRadius: 30,

        alignSelf: 'center',

        backgroundColor: 'white',
      }}>
      <View
        style={{

          height: HEIGHT * 0.32,
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',


        }}>
        <LinearGradient
          colors={[start, end]}
          start={{ x: 0.17, y: 0.59 }}
          end={{ x: 0.12, y: 0.89 }}
          style={{
            position: 'absolute',
            bottom: HEIGHT * 0.024,
            // right: -HEIGHT * 0.02,
            width: HEIGHT * 0.95,
            height: HEIGHT * 0.93,
            borderRadius: HEIGHT,
          }}></LinearGradient>
        <View
          style={{
            width: WIDTH * 0.35,
            backgroundColor: 'white',
            height: HEIGHT * 0.17,
            borderRadius: 65,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={logo} />
        </View>
      </View>
      <View style={{ marginTop: HEIGHT * 0.04 }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: HEIGHT * 0.04,
            marginLeft: 25,
            marginRight: 20,
          }}>
          {title}
        </Text>
      </View>
      <View style={{ marginTop: HEIGHT * 0.03 }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: HEIGHT * 0.02,
            padding: HEIGHT * 0.02,
          }}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default Services;
