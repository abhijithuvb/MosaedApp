import { View, Text, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import WebView from 'react-native-webview';

import Header from './Header';
import { backlogo } from '../Images/index';


const TermsProfile = ({ navigation }) => {
  const HEIGHT = Dimensions.get('window').height;
  return (
    <View style={{}}>
      <LinearGradient
        colors={['#387FDA', '#2ECBAA']}
        start={{ x: 0.39, y: 0.25 }}
        end={{ x: 0.14, y: 0.87 }}
        style={{ height: HEIGHT * 0.15, width: '100%', position: 'absolute', top: 0, }}
      ></LinearGradient>
      <Header
        leftlogo={backlogo}
        title="Terms And Conditions"
        navigation={() => navigation.navigate('servicehome')}
      />
      <View style={{ height: HEIGHT * 0.84, width: '100%', }}>
        <WebView showsVerticalScrollIndicator={false} source={{ uri: 'https://demos.co.uk/terms-conditions/' }} />

      </View>
    </View>
  );
};

export default TermsProfile;
