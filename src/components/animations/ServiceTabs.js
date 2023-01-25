import { View, Text, Dimensions, Image, Pressable, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { Easing, interpolate, interpolateColor, interpolateColors, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import { transferlogowhite } from '../../../mosaedApp/src/Images';

const ServiceTabs = ({ text, icon, color, start, end, navigation }) => {
    const HEIGHT = Dimensions.get('window').height;
    const WIDTH = Dimensions.get('window').width;
    const borderProgress = useSharedValue(0)
    const colorProgress = useSharedValue(0)
    const progress = useSharedValue(0)


    const linearInterPolate = useDerivedValue(() => {
        return interpolate(progress.value, [0, 1], [0, 3])
    })
    const Style = useAnimatedStyle(() => {
        return {
            transform: [{ scale: withTiming(linearInterPolate.value * 10, { duration: 3000 }) }], borderRadius: withTiming(linearInterPolate.value * 100, { duration: 2000 }),
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

    return (
        <>
            <View style={[{ borderRadius: HEIGHT * 0.01, backgroundColor: 'red', width: '86.5%', marginLeft: 20, height: HEIGHT * 0.102, marginTop: HEIGHT * 0.025, overflow: 'hidden' }]}>
                <Animated.View

                    style={[Style, { position: 'absolute', height: 20, width: 20, justifyContent: 'center', alignItems: 'center', top: 60, left: -20, backgroundColor: 'blue' }]}
                ></Animated.View>
                {/* <AnimatedPressable
ß
                style={[ borderStyle,  {
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
                    setTimeout(() => {
                        // navigation()
                        setTimeout(() => {
                            borderProgress.value = 0
                            colorProgress.value = 0
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
                            colors={['#EF7E65', '#F6B570']}
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
                        <Image source={transferlogowhite} />
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: HEIGHT * 0.05, }}>
                        <Animated.Text
                            style={[, textColorChange, {

                                fontSize: HEIGHT * 0.017,
                            }]}>
                            Sponsership Transfer
                        </Animated.Text>
                    </View>
                </View>
            </AnimatedPressable> */}

            </View>
            <Pressable onPress={() => progress.value = 1}><Text>hi</Text></Pressable>
        </>

    );
};

export default ServiceTabs;