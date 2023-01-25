import { View, Text, Dimensions, Image, Pressable, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';
import TextBox from './Reusable/TextBox';
import ButtonReUse from './Reusable/CustomButton';
import ModalReUse from './Reusable/ModalReUse';
import CustomButton from './Reusable/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NameScreen = ({ navigation }) => {
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;
  const [name, setName] = useState('')
  console.log("name", name)
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{}}>
        <LinearGradient
          colors={['#387FDA', '#2ECBAA']}
          start={{ x: 0.25, y: 0.69 }}
          end={{ x: 0.13, y: 0.87 }}
          style={{
            position: 'absolute',
            bottom: HEIGHT * 0.025,
            right: -HEIGHT * 0.775,
            width: HEIGHT * 2,
            height: HEIGHT * 2,
            borderRadius: HEIGHT,
          }}></LinearGradient>
        <View
          style={{
            height: HEIGHT * 0.38,
            width: WIDTH,
            borderBottomLefRadius: 10,
            borderBottomRightRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: HEIGHT * 0.006
          }}>
          <View>
            <Image source={require('../Images/Logo/Logo.png')} />
          </View>
          <View style={{ marginTop: HEIGHT * 0.03 }}>
            <Image source={require('../Images/bottomLogo/bottomLogo.png')} />
          </View>
        </View>
      </View>
      <View style={{ marginLeft: HEIGHT * 0.04, marginTop: -HEIGHT * 0.006 }}>
        <Text style={{ fontSize: HEIGHT * 0.03 }}>Great,</Text>
      </View>
      <View style={{ marginLeft: HEIGHT * 0.04, marginTop: HEIGHT * 0.01 }}>
        <Text style={{ fontSize: HEIGHT * 0.018, fontWeight: "300" }}>
          Welcome to Mosaed,Please enter your full{'\n'}name
        </Text>
      </View>
      <View style={{ marginLeft: HEIGHT * 0.04, marginTop: HEIGHT * 0.05 }}>
        <TextBox label="Full Name" keyboardtype="default" setState={setName} />
      </View>
      <View style={{ marginTop: HEIGHT * 0.01 }}>
        <CustomButton
          width={WIDTH * 0.83}
          left={HEIGHT * 0.04}
          value="I Agree"
          onPress={() => navigation.navigate('terms', { screen: 'terms' })}
        />
      </View>
      <View>
        <View style={{ backgroundColor: 'red' }}></View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: HEIGHT * -0.015,
          right: HEIGHT * -0.01,
        }}>
        <Image source={require('../Images/yellowlogo/yellowlogo.png')} />
      </View>
    </View>
  );
};

export default NameScreen;
