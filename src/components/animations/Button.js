import { View, Text, Pressable, ActivityIndicator, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import Animated, { Easing, Extrapolate, interpolate, interpolateNode, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated'
import join from '../images/join.png'





const DATA = Array.from({ length: 1000 }, (v, i) => i)

const Button = () => {

    const [visible, setVisible] = useState(false)

    const [anims, setAnims] = useState(false)
    const animation = useSharedValue(12);
    const progress = useSharedValue(1)
    const single = useSharedValue(1)
    //aimation of button width
    const stylesspring = useAnimatedStyle(() => {
        return {
            borderRadius: animation.value * 80,
            width: withTiming(animation.value * 30, { duration: 3000, easing: Easing.ease }),
        }
    })

    //animation of moving inside button and image

    const rotation = useDerivedValue(() => {
        return interpolate(progress.value, [1, 2], [0, 100])
    })
    const singleRotation = useDerivedValue(() => {
        return interpolate(single.value, [1, 2], [0, 150])
    })
    const styleAnim = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withRepeat(withTiming(rotation.value, { duration: 2000 }), -1, false) }]
        }
    })
    const singleAnim = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withRepeat(withTiming(singleRotation.value, { duration: 2000 }), -1, false) }]
        }
    })
    /////////////
    const anim = () => {

        animation.value = 1
        setTimeout(() => {
            setVisible(true)
        }, 1000)
    }
    const anim2 = () => {
        progress.value = 2
        setAnims(true)
    }
    return (
        <View style={{ alignItems: 'center', marginTop: 100 }}>
            <Animated.View style={[stylesspring, { backgroundColor: 'red', height: 30, justifyContent: 'center', borderRadius: 10, alignItems: 'center', }]}>
                <Pressable onPress={() => anim()} style={{ alignContent: 'center', justifyContent: 'center' }} >{!visible ? <Text style={{ textAlign: 'center' }}>Submit</Text> : <ActivityIndicator size="small" color="#0000ff" />}</Pressable>
            </Animated.View>


            <View style={{ marginTop: 40 }}>
                <Animated.View>
                    <Pressable onPress={() => anim2()} style={[{ backgroundColor: 'red', height: 30, justifyContent: 'center', borderRadius: 10, alignItems: 'center', width: 200, overflow: 'hidden' }]}>{anims && <FlatList style={{ marginLeft: - 100 }} horizontal data={DATA}
                        renderItem={({ item, index }) => <Animated.View style={[{ marginTop: -30, }, styleAnim]}>
                            <View style={{ width: 10, height: 70, backgroundColor: index % 2 == 0 ? "blue" : "#81b9f0", transform: [{ rotate: '25deg' }] }}></View>
                        </Animated.View>} />}<Text style={{ position: 'absolute', color: 'white' }}>{!anims ? "Submit" : 'Loading..'}</Text>

                    </Pressable>
                </Animated.View>
            </View>

            <View style={{ marginTop: 40 }}>
                <Pressable onPress={() => progress.value = 2} style={{ height: 50, width: 100, overflow: 'hidden' }}>
                    <FlatList style={{ marginLeft: - 200 }} horizontal data={DATA}
                        renderItem={({ item, index }) => <Animated.View style={[{ marginTop: -30 }, styleAnim]}>
                            <View style={{ width: 10, height: 200, backgroundColor: index % 2 == 0 ? "#FF6C5D" : "#FF6C5D95", transform: [{ rotate: '25deg' }] }}></View>
                        </Animated.View>} /><Image source={join} resizeMode="contain" style={{ width: 100, height: 50, position: 'absolute' }} />
                </Pressable>

            </View>

            <View style={{ marginTop: 40 }}>
                <Pressable style={{ height: 50, width: 100, overflow: 'hidden' }} onPress={() => single.value = 2}>
                    <FlatList style={{ marginLeft: -20 }} horizontal data={[1]} renderItem={({ item, index }) => <Animated.View style={[singleAnim, { marginTop: -30 }]}>
                        <View style={{ width: 10, height: 100, backgroundColor: "#FF6C5D", transform: [{ rotate: '25deg' }] }}></View>
                    </Animated.View>} /><Image source={join} resizeMode="contain" style={{ width: 100, height: 50, position: 'absolute' }} />
                </Pressable>
            </View>

        </View >

    )
}

export default Button