import { View, Text, Pressable } from 'react-native'
import Svg, { Circle, G } from 'react-native-svg';
import React, { useEffect } from 'react'
import Animated, { useAnimatedProps, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';

const ProgressCircleComponent = ({ index, textPercentage }) => {
    console.log('====================================');
    console.log(index);
    console.log('====================================');
    const radius = 80;
    const circumference = 2 * Math.PI * radius
    // const percentage = (index / 100) * 100
    // const strokeDashOffset = circumference - (circumference * percentage) / 100
    const AnimatedCircle = Animated.createAnimatedComponent(Circle)
    const progress = useSharedValue(13)
    const style = useAnimatedProps(() => {
        return {
            strokeDashoffset: withTiming(progress.value * 40, { duration: 300 })
        }
    })
    useEffect(() => {
        progress.value = progress.value - 1
    }, [index])

    return (
        <View>
            <Svg height="60" width="60" viewBox="0 0 180 180">
                <G rotation={-90} originX="90" originY="90" >
                    <Circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="#181D23"
                        fill="transparent"
                        strokeWidth="12" />
                    <AnimatedCircle
                        animatedProps={style}
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="#FFB300"
                        fill="transparent"
                        strokeWidth="12"
                        strokeDasharray={circumference}
                        // strokeDashoffset={strokeDashOffset}
                        strokeLinecap="round"
                    />

                </G>
            </Svg>
            <View style={{ position: 'absolute', top: 20, left: 19 }}>
                <Text style={{ color: 'white', fontSize: 12 }}>{textPercentage}%</Text>
            </View>
        </View>

    )
}

export default ProgressCircleComponent