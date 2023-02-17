import { View, Text, Image } from 'react-native'
import React from 'react'
import Svg, { Circle, G } from 'react-native-svg';
import { goldmediumlogo, goldsmalllogo } from '../assets';
import { HEIGHT } from '../../Constants/Constants';

const VipGoldProgressComponent = () => {

    const radius = 85;
    const circumference = 2 * Math.PI * radius
    const fullPercentage = 100
    const completedPercentage = 55
    const percentage = (55 / 100) * 100
    const strokeDashOffset = circumference - (circumference * percentage) / 100
    console.log('====================================');
    console.log(strokeDashOffset);
    console.log('====================================');
    return (
        <View style={{ alignItems: 'center' }}>
            <Svg height="160" width="160" viewBox="0 0 180 180">
                <G rotation={-90} originX="90" originY="90" >
                    <Circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="#000000"
                        fill="transparent"
                        strokeWidth="7" />
                    <Circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="#0FC1A1"
                        fill="transparent"
                        strokeWidth="7"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashOffset}
                        strokeLinecap="round" />
                </G>
            </Svg>
            <View style={{ position: 'absolute', alignSelf: 'center' }}>
                <Image source={goldmediumlogo} style={{ marginTop: HEIGHT * 0.02 }} />
                <View style={{ marginTop: -HEIGHT * 0.01 }}>
                    <Text style={{ color: '#0FC1A1', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>1038</Text>
                    <Text style={{ color: '#DBDBDB', fontSize: 12, textAlign: 'center' }}>Completed</Text>
                </View>
            </View>

        </View>
    )
}

export default VipGoldProgressComponent