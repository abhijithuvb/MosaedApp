import { View, Image, Dimensions, Pressable, Text } from 'react-native'
import React, { useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Animated, { useAnimatedProps, useSharedValue, interpolate, useAnimatedStyle, withTiming, useDerivedValue, Easing } from 'react-native-reanimated';


const MosaedSplash = () => {
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height

    const leftLogoProgress = useSharedValue(0);
    const rightLogoProgress = useSharedValue(0)
    const progress = useSharedValue(0);
    const logoProgress = useSharedValue(0);

    const linearInterPolate = useDerivedValue(() => {
        return interpolate(progress.value, [0, 1], [0, 3])
    })

    const logoInterpolate = useDerivedValue(() => {
        return interpolate(logoProgress.value, [0, 1], [0, 7])
    })
    const rightLogoInterpolate = useDerivedValue(() => {
        return interpolate(rightLogoProgress.value, [0, 1], [0, 5])
    })

    const leftLogoInterpolate = useDerivedValue(() => {
        return interpolate(leftLogoProgress.value, [0, 1], [0, 5])
    }
    )

    const rightLogoStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withTiming(rightLogoInterpolate.value * -WIDTH * 0.1, { duration: 2000, easing: Easing.bounce }) }]
        }
    })

    const leftLogoStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withTiming(leftLogoInterpolate.value * WIDTH * 0.1, { duration: 2000, easing: Easing.bounce }) }]
        }
    })
    const logoStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: withTiming(logoInterpolate.value * 60, { duration: 2000, easing: Easing.bounce }) }],


        }
    })

    const Style = useAnimatedStyle(() => {
        return {
            transform: [{ scale: withTiming(linearInterPolate.value * 10, { duration: 3000 }) }], borderRadius: withTiming(linearInterPolate.value * 100, { duration: 2000 }),
            height: withTiming(linearInterPolate.value * 200, { duration: 2000 }),
            width: withTiming(linearInterPolate.value * 200, { duration: 2000 })

        }
    })

    useEffect(() => {
        progress.value = 1
        logoProgress.value = 1
        leftLogoProgress.value = 1
        rightLogoProgress.value = 1
    }, [])

    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)
    return (
        <View style={{ flex: 1, /* width: WIDTH, */ }}>
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
                    <Image source={require('../../../mosaedApp/src/Images/letfIcon/leftIcon.png')} />
                </Animated.View>
                <Animated.View style={[logoStyle, { position: 'absolute', top: -170, alignItems: 'center', justifyContent: 'center' }]}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: WIDTH }}>
                        <View
                            style={{
                                alignItems: 'center',
                                // marginTop: HEIGHT * 0.14,
                                // Height: HEIGHT * 0.04,
                            }}>
                            <Image source={require('../../../mosaedApp/src/Images/Logo/Logo.png')} />
                        </View>
                        <View
                            style={{
                                // alignItems: 'center',
                                marginTop: HEIGHT * 0.02,
                            }}>
                            <Image source={require('../../../mosaedApp/src/Images/bottomLogo/bottomLogo.png')} />
                        </View>
                    </View>

                </Animated.View>
                <Animated.View
                    style={[rightLogoStyle, {
                        position: 'absolute',
                        bottom: HEIGHT * 0.145,
                        right: -WIDTH * 0.5,
                    }]}>
                    <Image source={require('../../../mosaedApp/src/Images/RightIon/RightIcon.png')} />
                </Animated.View>

            </View>

        </View>
    )
}

export default MosaedSplash