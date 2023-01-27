import { View, Text, Image, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import { backgroundtinylogo, terrainmulticolorlogo } from '../assets'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const TerrainComponent = ({ logo, title }) => {

    const animationValue = useSharedValue(0)
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: withTiming(animationValue.value * 10, { duration: 2000 }) }],
            borderRadius: withTiming(animationValue.value * 100, { duration: 2000 }),
            height: withTiming(animationValue.value * 200, { duration: 2000 }),
            width: withTiming(animationValue.value * 200, { duration: 2000 })

        }
    })

    return (
        <Pressable onPress={() => {
            animationValue.value = 5
            setTimeout(() => {
                animationValue.value = 0;
            }, 500)

        }} style={{ height: HEIGHT * 0.262, width: WIDTH / 2.27, borderRadius: HEIGHT * 0.01, justifyContent: 'center', marginLeft: HEIGHT * 0.02, overflow: 'hidden' }}>
            <Animated.View style={[animatedStyle, { position: 'absolute', top: 0, height: HEIGHT * 0.262, width: WIDTH / 2.27, backgroundColor: '#0FC1A1', }]}>

            </Animated.View>
            <View style={{ height: HEIGHT * 0.26, width: WIDTH / 2.3, backgroundColor: '#181D23', borderRadius: HEIGHT * 0.01, alignSelf: 'center' }}>
                <Image source={backgroundtinylogo} style={{ position: 'absolute', top: 0, right: 0 }} />
                <View style={{ height: HEIGHT * 0.03, width: WIDTH * 0.065, borderRadius: HEIGHT * 0.2, borderColor: '#0FC1A1', borderWidth: 0.5, marginTop: HEIGHT * 0.005, marginLeft: WIDTH * 0.013 }}>

                </View>
                <View style={{ alignItems: 'center', marginTop: HEIGHT * 0.03 }}>
                    <Image source={logo} />
                </View>
                <View style={{ alignItems: 'center', marginTop: HEIGHT * 0.05 }}>
                    <Text style={{ color: 'white', fontSize: HEIGHT * 0.025 }}>{title}</Text>
                </View>
                <View style={{ position: 'absolute', left: 0, bottom: 0 }}>
                    <Image source={terrainmulticolorlogo} />
                </View>

            </View>
        </Pressable>
    )
}

export default TerrainComponent