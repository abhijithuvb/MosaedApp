import { View, Text, FlatList, Dimensions, Pressable, } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Carousel from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

import Services from './Reusable/Services';
import { houselogo, nurselogo, coffeelogo, transferlogo } from '../Images';
import CustomButton from './Reusable/CustomButton';


const DATA = [
  {
    id: 1,
    title: 'Home Services',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    logo: houselogo,
    color: '#F93BC5',
    start: '#F93BC5',
    end: '#FA2E89',
  },
  {
    id: 2,
    title: 'Nursing',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    logo: nurselogo,
    color: '#F93BC5',
    start: '#387FDA',
    end: '#2ECBAA',
  },
  {
    id: 3,
    title: 'Guests Serving',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    logo: coffeelogo,
    color: '#653DBC',
    start: '#653DBC',
    end: '#B865D3',
  },
  {
    id: 4,
    title: 'Sponsership Transfer',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    logo: transferlogo,
    color: '#EF7E65',
    start: '#EF7E65',
    end: '#F6B570',
  },
];

const ServicesPage = ({ navigation }) => {
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;
  const [skip, setSkip] = useState(false);

  const bar = Array.from({ length: 1 }, (v, i) => i)

  const animation = useSharedValue(0);

  const animate = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(animation.value * WIDTH * 0.099, {}) }]
    }
  })
  const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)
  return (
    <View >
      <View style={{ marginTop: HEIGHT * 0.17 }}>
        <Carousel style={{ height: HEIGHT * 0.6 }}
          loop={false}
          width={WIDTH}
          height={HEIGHT * 0.7}
          defaultIndex={0}
          data={DATA}
          mode="parallax"
          onSnapToItem={(index) => {
            animation.value = index
            if (index === 3) {
              setSkip(true)
            } else {
              setSkip(false)
            }
            console.log('current index:', index)
          }}
          renderItem={({ item }) => (
            <Services
              title={item.title}
              description={item.description}
              logo={item.logo}
              color={item.color}
              start={item.start}
              end={item.end}
            />
          )}
        />
      </View>
      <View style={{ borderRadius: 10, borderColor: '#fff', backgroundColor: '#fff', height: HEIGHT * 0.009, width: WIDTH / 2.5, alignSelf: 'center' }}>
        <FlatList data={bar} renderItem={({ item }) => {
          return <AnimatedLinearGradient colors={['#387FDA', '#2ECBAA']}
            start={{ x: 0.6, y: 0.67 }}
            end={{ x: 0.13, y: 0.87 }}
            style={[animate, { width: WIDTH * 0.1, height: HEIGHT * 0.008, borderRadius: 10 }]}>
          </AnimatedLinearGradient>
        }} />
      </View>


      <View
        style={{
          marginLeft: WIDTH * 0.092,
          marginTop: HEIGHT * 0.08,
          width: '83%',
        }}>
        {!skip ? (
          <View style={{ marginTop: HEIGHT * 0.02 }}>
            <Pressable onPress={() => setSkip(!skip)}>
              <Text style={{ textAlign: 'center', color: '#C8C8E9' }}>Skip</Text>
            </Pressable>
          </View>
        ) : (
          <CustomButton
            value="Start"
            onPress={async () => {
              await AsyncStorage.setItem("introSliderStatus", "true")
              navigation.navigate('welcome', { screen: 'welcome' });
            }}
          />
        )}
      </View>
    </View>
  );
};

export default ServicesPage;
