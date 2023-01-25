import { View, Text, Dimensions, Pressable, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const CustomButton = ({ width, value, onPress = () => { }, }) => {
  const HEIGHT = Dimensions.get('window').height;
  const WIDTH = Dimensions.get('window').width;
  const [loader, setLoader] = useState(false)

  const animation = useSharedValue(width ? 5 : 6.5);

  const animatedProps = useAnimatedProps(() => {
    return {
      borderRadius: animation.value * 40,
      width: withTiming(animation.value * 50, { duration: 1000, easing: Easing.ease }),
    }
  })
  const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)
  return (
    <View style={{
      alignItems: 'center', shadowColor: '#33A4C3', shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    }}>
      <AnimatedLinearGradient animatedProps={animatedProps}
        style={{
          borderRadius: HEIGHT * 0.04,
          alignItems: 'center',
          width: width ? width : WIDTH * 0.83,

        }}
        colors={['#387FDA', '#2ECBAA']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}>
        <Pressable
          style={{
            width: width ? width : WIDTH * 0.83,

            justifyContent: 'center',
            height: HEIGHT * 0.06,
            borderRadius: HEIGHT * 0.04,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => {
            animation.value = 1
            setLoader(true)
            setTimeout(() => {
              setLoader(false)
              animation.value = !width ? 6.5 : 5
            }, 2500)
            setTimeout(() => {
              onPress()
            }, 2000)

          }}
        >
          {!loader ? <Text style={{ textAlign: 'center', color: '#fff', fontSize: HEIGHT * 0.018 }}>{value}</Text> : <ActivityIndicator size="small" color="#0000ff" />}
        </Pressable>
      </AnimatedLinearGradient>

    </View >
  );
};

export default CustomButton;
