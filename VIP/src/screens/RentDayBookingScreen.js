import { View, Text, SafeAreaView, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import CalendarStrip from 'react-native-calendar-strip';

import HeaderComponent from '../components/HeaderComponent';
import { HEIGHT, WIDTH } from '../../Constants/Constants';
import { backarrow, calendarleftlogo, calendarleftlogocontainer, calendarrightlogo, calendarrightlogocontainer, submitleftarrow, submitrightarrow } from '../assets';
import { Pressable } from 'react-native';
import { hours } from '../Arrays/Arrays';
import { useRoute } from '@react-navigation/native';
import ScreenButtonComponent from '../components/ScreenButtonComponent';

const RentDayBookingScreen = ({ navigation }) => {

  const routes = useRoute()


  const [selectedIndex, setSelectedIndex] = useState()
  const [selectedDate, setSelectedDate] = useState({ date: '', time: '' })

  console.log(selectedDate)
  const handleSubmit = () => {
    navigation.navigate(routes.params.terrainStatus.beach ? 'BeachListScreen' : 'DesertListScreen', { selectedDate })
  }
  return (
    <View style={{ backgroundColor: '#181D23', flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ marginTop: HEIGHT * 0.025 }}>
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
              height: HEIGHT * 0.78,
              backgroundColor: 'black',
              borderBottomLeftRadius: HEIGHT * 0.015,
              borderBottomRightRadius: HEIGHT * 0.015,
            }}>
            <View
              style={{
                height: HEIGHT * 0.18,
                borderBottomLeftRadius: HEIGHT * 0.015,
                borderBottomRightRadius: HEIGHT * 0.015,
                backgroundColor: '#181D23',
              }}>
              <View>
                <CalendarStrip style={{ height: HEIGHT * 0.175, paddingTop: 20, paddingBottom: 10 }}
                  calendarHeaderStyle={{ color: 'white', marginTop: HEIGHT * 0.02, }}
                  dateNameStyle={{ color: 'white', marginTop: HEIGHT * 0.01, marginBottom: HEIGHT * 0.01 }}
                  dateNumberStyle={{ color: 'white', marginTop: HEIGHT * 0.01 }}
                  dayContainerStyle={{ marginTop: HEIGHT * 0.03, marginTop: HEIGHT * 0.02 }}
                  highlightDateContainerStyle={{ backgroundColor: '#0FC1A1', borderRadius: HEIGHT * 0.01 }}
                  iconLeft={calendarleftlogocontainer}
                  iconLeftStyle={{ position: 'absolute', top: -HEIGHT * 0.073, left: HEIGHT * 0.02 }}
                  iconRight={calendarrightlogocontainer}
                  iconRightStyle={{ position: 'absolute', top: -HEIGHT * 0.073, right: HEIGHT * 0.02 }}
                  onDateSelected={(date) => setSelectedDate({ ...selectedDate, date: date })}
                />
              </View>

            </View>
            <View style={{ marginLeft: WIDTH * 0.08, marginTop: HEIGHT * 0.02, marginBottom: HEIGHT * 0.01 }}>
              <Text style={{ color: 'white', fontSize: HEIGHT * 0.023 }}>Select Hours</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <FlatList numColumns={4} data={hours} renderItem={({ item, index }) => <Pressable onPress={() => {
                setSelectedIndex(index)
                setSelectedDate({ ...selectedDate, time: item.time })
                console.log("index", index)
              }} style={{ height: HEIGHT * 0.04, width: WIDTH * 0.18, borderColor: '#0FC1A1', borderWidth: 1, backgroundColor: index === selectedIndex ? "#0FC1A1" : 'black', margin: WIDTH * 0.02, justifyContent: 'center', alignItems: 'center', borderRadius: HEIGHT * 0.005, }}>
                <Text style={{ color: 'white', fontSize: HEIGHT * 0.015 }}>{item.time}</Text>
              </Pressable>} />
            </View>
          </View>
          <ScreenButtonComponent leftlogo={submitleftarrow} rightlogo={submitrightarrow} text={'Next'} onPress={() => handleSubmit()} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default RentDayBookingScreen;
