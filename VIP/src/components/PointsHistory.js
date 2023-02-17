import { View, Text, Image } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import { pointslogo1 } from '../assets'

const PointsHistory = ({ logo, title, date }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: HEIGHT * 0.01, alignItems: 'center', borderBottomColor: '#636B74', borderBottomWidth: 0.2, paddingBottom: HEIGHT * 0.015 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ height: HEIGHT * 0.0498, width: WIDTH * 0.108, backgroundColor: '#181D23', justifyContent: 'center', alignItems: 'center', borderRadius: HEIGHT * 0.0131 }}>
                    <Image source={logo} />
                </View>

                <View style={{ marginLeft: HEIGHT * 0.02 }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>
                        {title}
                    </Text>
                    <Text style={{ color: '#636B74', fontSize: 12 }}>
                        {date}
                    </Text>
                </View>
            </View>
            <Text style={{ color: '#0FC1A1', fontSize: 18 }}>+120</Text>
        </View>
    )
}

export default PointsHistory