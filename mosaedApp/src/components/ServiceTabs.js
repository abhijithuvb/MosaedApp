import { View, Text, Dimensions, Image, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { Easing, interpolate, interpolateColor, interpolateColors, SlideInLeft, SlideInRight, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { housewhitelogo, nursewhitelogo, coffeewhitelogo, transferlogowhite, } from '../Images';



const ServiceTabs = (/* { text, icon, color, start, end, path } */props) => {
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;
  const borderProgress = useSharedValue(0)
  const colorProgress = useSharedValue(0)
  const progress = useSharedValue(0)
  const navigation = useNavigation()
  console.log("prop", props)


  const linearInterPolate = useDerivedValue(() => {
    return interpolate(progress.value, [0, 1], [0, 3])
  })
  const Style = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: withTiming(linearInterPolate.value * 10, { duration: 2000 }) }],
      borderRadius: withTiming(linearInterPolate.value * 100, { duration: 2000 }),
      height: withTiming(linearInterPolate.value * 200, { duration: 2000 }),
      width: withTiming(linearInterPolate.value * 200, { duration: 2000 })

    }
  })


  //// Border animation
  const borderStyle = useAnimatedStyle(() => {

    return {
      borderWidth: withTiming(borderProgress.value, { duration: 1000, easing: Easing.ease }),
    }
  })
  ///text color changing
  const colors = useDerivedValue(() => {
    return interpolateColor(colorProgress.value, [0, 1], ['#363636', '#00B578'])
  })
  ///// Text Animation
  const textColorChange = useAnimatedStyle(() => {
    return {
      color: withTiming(colors.value, { duration: 1000, easing: Easing.ease })
    }
  })
  const icons = {
    "Nursing": nursewhitelogo,
    "Guests Serving": coffeewhitelogo,
    "Home Services": housewhitelogo,
    "Sponsership Transfer": transferlogowhite

  }
  const path = {
    "Home Services": "company",
    "Nursing": "company",
    "Guests Serving": "company",
    "Sponsership Transfer": "sponsership"

  }

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
  return (
    <Animated.View entering={SlideInLeft.delay(props.id * 400)} style={{ borderRadius: HEIGHT * 0.01, width: '86.5%', marginLeft: 20, height: HEIGHT * 0.1021, marginTop: HEIGHT * 0.021, overflow: "hidden", }}>
      <Animated.View
        style={[Style, { position: 'absolute', height: 20, width: 20, justifyContent: 'center', alignItems: 'center', top: 15, left: WIDTH * 0.21, backgroundColor: '#00B578', }]}
      ></Animated.View>
      <AnimatedPressable
        style={[/* borderStyle, */ {
          flexDirection: 'row',
          backgroundColor: '#fff',
          height: HEIGHT * 0.1,
          width: WIDTH * 0.86,
          marginLeft: HEIGHT * 0.001,
          borderRadius: HEIGHT * 0.01,
          marginTop: HEIGHT * 0.001,
          borderColor: '#00B578',
          overflow: 'hidden',
        }]}
        onPress={() => {
          borderProgress.value = 1
          colorProgress.value = 1
          progress.value = 1
          setTimeout(() => {
            navigation.navigate(path[props.text])
            setTimeout(() => {
              borderProgress.value = 0
              colorProgress.value = 0
              progress.value = 0
            }, 1000)
          }, 1000)
        }}>
        <View style={[{ flexDirection: 'row', width: WIDTH * 0.86, borderRadius: HEIGHT * 0.01, }]}>
          <View
            style={{
              height: '100%',
              width: WIDTH * 0.23,
              borderTopLeftRadius: HEIGHT * 0.01,
              borderBottomLeftRadius: HEIGHT * 0.01,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <LinearGradient
              colors={[props.colors[0], props.colors[1]]}
              start={{ x: 0.1, y: 0.15 }}
              end={{ x: 0.25, y: 0.85 }}
              style={{
                height: HEIGHT * 0.2,
                width: HEIGHT * 0.2,
                position: 'absolute',
                bottom: -HEIGHT * 0.05,
                left: -HEIGHT * 0.09,
                borderRadius: HEIGHT,
              }}></LinearGradient>
            <Image source={icons[props.text]} />
          </View>
          <View style={{ justifyContent: 'center', marginLeft: HEIGHT * 0.03, }}>
            <Animated.Text
              style={[textColorChange, {
                fontSize: HEIGHT * 0.020,
              }]}>
              {/* {text} */props.text}
            </Animated.Text>
          </View>
        </View>
      </AnimatedPressable>
    </Animated.View>
  );
};

export default ServiceTabs;
