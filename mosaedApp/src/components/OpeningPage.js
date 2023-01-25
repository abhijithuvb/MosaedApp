import { View, Text, Dimensions, Image, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { useAnimatedProps, useSharedValue, interpolate, useAnimatedStyle, withTiming, useDerivedValue, Easing } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';

import { getHomeData } from '../redux/actions/apiAction';



const OpeningPage = ({ navigation }) => {
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;

  const progress = useSharedValue(0);
  const logoProgress = useSharedValue(0);
  const leftLogoProgress = useSharedValue(0);
  const rightLogoProgress = useSharedValue(0)

  const linearInterPolate = useDerivedValue(() => {
    return interpolate(progress.value, [0, 1], [0, 3])
  })

  const logoInterpolate = useDerivedValue(() => {
    return interpolate(logoProgress.value, [0, 1], [0, 7])
  })

  // const rightLogoInterpolate = useDerivedValue(() => {
  //   return interpolate(rightLogoProgress.value, [0, 1], [0, 5])
  // })

  const leftLogoInterpolate = useDerivedValue(() => {
    return interpolate(leftLogoProgress.value, [0, 1], [0, 5])
  }
  )

  const rightLogoStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(rightLogoProgress.value * (-WIDTH * 0.5), { duration: 2000, easing: Easing.bounce, }) }]
    }
  })

  const leftLogoStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(leftLogoInterpolate.value * (WIDTH * 0.1), { duration: 2000, easing: Easing.bounce }) }]
    }
  })

  const logoStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withTiming(logoInterpolate.value * (WIDTH * 0.18), { duration: 2000, easing: Easing.bounce }) }],


    }
  })

  const Style = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(linearInterPolate.value * HEIGHT * 0.0167, { duration: 3000 }) }],
      borderRadius: withTiming(linearInterPolate.value * (WIDTH * 0.9), { duration: 2000 }),
      height: withTiming(linearInterPolate.value * (WIDTH * 0.5), { duration: 2000 }),
      width: withTiming(linearInterPolate.value * (WIDTH * 0.5), { duration: 2000 })

    }
  })

  const getUser = async () => {
    const user = await AsyncStorage.getItem('introSliderStatus');
    const loggedIn = await AsyncStorage.getItem('loggedIn');
    // navigation.navigate(user ? loggedIn ? "servicehome" : 'welcome' : 'services')
    setTimeout(() => {
      if (user) {
        if (loggedIn) {
          navigation.navigate("servicehome")
        } else {
          navigation.navigate("welcome")
        }
      } else if (!user) {
        navigation.navigate("services")
      }
    }, 3000)

  }

  const dispatch = useDispatch()

  const homeDetails = async () => {
    dispatch(getHomeData())
  }

  useEffect(() => {
    const asyncFunction = async () => {
      const token = await AsyncStorage.getItem("userdata")
      token && homeDetails()
    }
    asyncFunction()
    getUser()
    progress.value = 1
    logoProgress.value = 1
    leftLogoProgress.value = 1
    rightLogoProgress.value = 1
  }, [])

  const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)
  return (
    <View style={{ flex: 1, }}>
      <View style={{ position: 'absolute', bottom: HEIGHT * 0.005, height: HEIGHT, width: WIDTH, justifyContent: 'center', alignItems: 'center' }}>
        <AnimatedLinearGradient animatedProps={Style}
          colors={['#387FDA', '#2ECBAA']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={[Style, { position: 'absolute', height: HEIGHT, width: WIDTH, justifyContent: 'center', alignItems: 'center' }]}
        ></AnimatedLinearGradient>
      </View>
      <View style={[{ height: HEIGHT }]}>
        <Animated.View style={[leftLogoStyle, { position: 'absolute', left: -WIDTH * 0.5 }]}>
          <Image source={require('../Images/letfIcon/leftIcon.png')} />
        </Animated.View>
        <Animated.View style={[logoStyle, { position: 'absolute', top: -170, alignItems: 'center', justifyContent: 'center' }]}>
          <View style={{ alignItems: 'center', justifyContent: 'center', width: WIDTH }}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Image source={require('../Images/Logo/Logo.png')} />
            </View>
            <View
              style={{
                marginTop: HEIGHT * 0.02,
              }}>
              <Image source={require('../Images/bottomLogo/bottomLogo.png')} />
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={[rightLogoStyle, {
            position: 'absolute',
            bottom: HEIGHT * 0.00,
            right: -WIDTH * 0.5,
          }]}>
          <Image source={require('../Images/RightIon/RightIcon.png')} />
        </Animated.View>

      </View>
    </View>
  )
};

export default OpeningPage;



