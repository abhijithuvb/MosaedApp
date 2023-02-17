import { View, Text } from 'react-native'
import React from 'react'
import Svg, { Circle, G } from 'react-native-svg'

const NormalCircleProgressComponent = () => {
    const radius = 80;
    const circumference = 2 * Math.PI * radius
    const percentage = (100 / 100) * 100
    const strokeDashOffset = circumference - (circumference * percentage) / 100
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
                    <Circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="#FFB300"
                        fill="transparent"
                        strokeWidth="12"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashOffset}

                        strokeLinecap="round"
                    />

                </G>
            </Svg>

            <View style={{ position: 'absolute', top: 20, left: 15 }}>

                <Text style={{ color: 'white', fontSize: 12 }}>100%</Text>
            </View>

        </View>
    )
}

export default NormalCircleProgressComponent