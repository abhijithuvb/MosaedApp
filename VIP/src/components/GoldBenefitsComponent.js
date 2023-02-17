import { View, Text, Image } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants'

const GoldBenefitsComponent = ({ logo, title, subtitle }) => {
    return (
        <View style={{ alignItems: 'center', marginTop: HEIGHT * 0.02 }}>
            <View style={{ width: WIDTH * 0.862, height: HEIGHT * 0.08886, backgroundColor: '#181D23', borderRadius: HEIGHT * 0.0075, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginLeft: HEIGHT * 0.02 }}>
                    <View style={{ height: HEIGHT * 0.0498, width: WIDTH * 0.108, backgroundColor: '#FFB300', justifyContent: 'center', alignItems: 'center', borderRadius: HEIGHT * 0.0131 }}>

                        <Image source={logo} />
                    </View>
                    <View style={{ marginLeft: HEIGHT * 0.02 }}>
                        <Text style={{ color: 'white', fontSize: 18 }}>{title}</Text>
                        <Text style={{ color: 'white', fontSize: 12 }}>{subtitle}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default GoldBenefitsComponent