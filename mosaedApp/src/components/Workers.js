import { View, Text, TextInput, Dimensions, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Header from './Header';
import { backlogo, pluslogo, } from '../Images/index.js';
import WorkerSmallScreen from './WorkerSmallScreen';
import CustomButton from './Reusable/CustomButton';

const Workers = ({ input, navigation }) => {
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;
  return (
    <View>
      <View style={{ flex: 1, marginTop: 10 }}>
        <View
          style={{
            height: HEIGHT * 0.16,
          }}>
          <LinearGradient
            colors={['#387FDA', '#2ECBAA']}
            start={{ x: 0.2, y: 0.75 }}
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
            title="Workers"
            leftlogo={backlogo}
            rightlogo={pluslogo}
            navigation={() => navigation.goBack()}
            subtitle="Lexiang Company"
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: HEIGHT * 0.15,
            left: HEIGHT * 0.025,
          }}>
          <WorkerSmallScreen
            navigation={(id, name, number, country, academy, description) => {
              navigation.navigate('singleprofile', {
                id,
                name,
                number,
                country,
                academy, description
              });
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: HEIGHT * 0.87,
            backgroundColor: '#fff',
            height: HEIGHT * 0.12,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,

          }}>
          <CustomButton
            value="Add New Worker"
            onPress={() => navigation.navigate('sponsership')}
          />
        </View>
      </View>
    </View>
  );
};

export default Workers;
