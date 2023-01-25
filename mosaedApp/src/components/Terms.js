import { View, Text, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RenderHTML from 'react-native-render-html';

import CustomButton from './Reusable/CustomButton';
import { WIDTH } from './constants/constants';


const Terms = ({ navigation }) => {
  const HEIGHT = Dimensions.get('window').height;

  const source = {
    html: `
  <div>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
  <p>when an unknown printer <span style={{fontSize:"10"}}>took a galley </span>of type and scrambled it to make a type specimen book</p>
  <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
  <p>Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</p>
  <p>a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
  <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</p>
  <p> looked up one of the more obscure Latin words, consectetur,</p>
  <p>from a Lorem Ipsum passage, and going through the cites of the word in classical literature</p>
  <p>discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33</p>
  <p>of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,</p>
  <p>written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance</p>
  <p>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",</p>
  <p> comes from a line in section 1.10.32.</p>
  </div>
  `}

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <LinearGradient
        colors={['#387FDA', '#2ECBAA']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}>
        <View
          style={{
            height: HEIGHT * 0.14,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color: '#fff', fontSize: HEIGHT * 0.03, marginTop: HEIGHT * 0.06 }}>
            Terms And Conditions
          </Text>
        </View>
      </LinearGradient>
      <View style={{ padding: 10 }}>
        <ScrollView style={{ height: HEIGHT * 0.73 }} showsVerticalScrollIndicator={false}>
          <RenderHTML source={source} contentWidth={WIDTH} />
        </ScrollView>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          borderLeftWidth: 1,
          borderTopWidth: 1,
          borderRightWidth: 1,
          borderTopColor: 'white',
          borderLeftColor: 'white',
          borderRightColor: 'white',
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          borderBottomColor: 'yellow',
          height: HEIGHT * 0.11, width: '100%',
          position: 'absolute', bottom: HEIGHT * 0.02,
          shadowColor: 'blue',
          shadowOpacity: 0.08, shadowOffset: { width: -2, height: -8 },
          justifyContent: 'center',
          shadowRadius: 6,
        }}>
        <CustomButton
          value="I Agree"
          onPress={async () => {
            await AsyncStorage.setItem("loggedIn", "true")
            navigation.navigate('servicehome', { screen: 'servicehome' })
          }}
        />
      </View>
    </View>
  );
};

export default Terms;
