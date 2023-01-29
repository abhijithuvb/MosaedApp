import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import CalendarStrip from 'react-native-calendar-strip';

import HeaderComponent from '../components/HeaderComponent';
import {HEIGHT, WIDTH} from '../../Constants/Constants';
import {backarrow, submitleftarrow, submitrightarrow} from '../assets';
import {Pressable} from 'react-native';

const RentDayBookingScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#181D23', flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{marginTop: HEIGHT * 0.025}}>
          <HeaderComponent
            leftOnPress={() => navigation.goBack()}
            title="RENT"
            leftlogo={backarrow}
            // rightlogo={searchlogo}
          />
        </View>
        <View
          style={{
            flex: 1,
            // height: 100,
            // width: '100%',
            backgroundColor: '#0FC1A1',
          }}>
          <View
            style={{
              height: HEIGHT * 0.85,
              backgroundColor: 'black',
              borderBottomLeftRadius: HEIGHT * 0.015,
              borderBottomRightRadius: HEIGHT * 0.015,
            }}>
            <View
              style={{
                height: HEIGHT * 0.2,
                borderBottomLeftRadius: HEIGHT * 0.015,
                borderBottomRightRadius: HEIGHT * 0.015,
                backgroundColor: '#181D23',
              }}>
              <CalendarStrip />
            </View>
            <View style={{height: HEIGHT * 0.08}}>
              <Text>Flatlist</Text>
            </View>
          </View>
          <Pressable
            onPress={() => alert('oi')}
            style={{
              width: '100%',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image source={submitleftarrow} />
              <Text
                style={{
                  textAlign: 'auto',
                  marginLeft: WIDTH * 0.05,
                  marginRight: WIDTH * 0.05,
                  fontSize: HEIGHT * 0.025,
                  marginTop: -HEIGHT * 0.008,
                  fontWeight: '300',
                  color: '#181D23',
                }}>
                SUBMIT
              </Text>
              <Image source={submitrightarrow} />
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default RentDayBookingScreen;
