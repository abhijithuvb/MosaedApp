import {View, Text, Dimensions, Image, TextBox} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ModalReUse from './Reusable/ModalReUse';
import {logo, bottomlogo} from '../Images';

const HomePage = () => {
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;
  const [visible, setVisible] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <LinearGradient
        colors={['#387FDA', '#2ECBAA']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <View
          style={{
            height: HEIGHT * 0.38,
            width: WIDTH,
            borderBottomLefRadius: 10,
            borderBottomRightRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'red',
              height: 100,

              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text>Services</Text>
          </View>
          <View>
            <Image source={logo} />
          </View>
          <View style={{marginTop: HEIGHT * 0.03}}>
            <Image style={{}} source={bottomlogo} />
          </View>
        </View>
      </LinearGradient>
      <View style={{marginLeft: HEIGHT * 0.04, marginTop: HEIGHT * 0.04}}>
        <Text style={{fontSize: HEIGHT * 0.03}}>Welcome</Text>
      </View>
      <View style={{marginLeft: HEIGHT * 0.04, marginTop: HEIGHT * 0.01}}>
        <Text style={{fontSize: HEIGHT * 0.02}}>
          Welcome, please enter your phone number
        </Text>
      </View>
    </View>
  );
};

export default HomePage;
