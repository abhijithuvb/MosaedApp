import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { cabana1 } from '../../assets'
import { HEIGHT, WIDTH } from '../../../Constants/Constants'
import { useNavigation } from '@react-navigation/native'

const CabanaComponent = ({ title, company, size, rate, logo }) => {
    const navigation = useNavigation()
    return (
        <Pressable onPress={() => navigation.navigate('SingleCabanaScreen', { title, company, size, rate, logo })} style={{ backgroundColor: '#181D23', height: HEIGHT * 0.3, width: WIDTH * 0.86, borderRadius: HEIGHT * 0.01, marginTop: HEIGHT * 0.025 }}>
            <View style={{}}>
                <Image source={logo} />
            </View>
            <View style={{ margin: HEIGHT * 0.015 }}>
                <Text style={{ color: 'white', fontSize: HEIGHT * 0.023 }}>{title}</Text>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <Text style={{ color: '#FF5F00', fontSize: HEIGHT * 0.015 }}>{company}</Text>
                    <Text style={{ color: 'white', fontSize: HEIGHT * 0.02 }}>{size}</Text>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: HEIGHT * 0.005, paddingTop: HEIGHT * 0.005, borderTopWidth: 0.2, borderTopColor: '#636B74' }}>
                    <Text style={{ color: '#FF5F00', fontSize: HEIGHT * 0.015 }}>Starting Price</Text>
                    <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.02 }}>{rate}<Text style={{ fontSize: HEIGHT * 0.012 }}>QAR</Text></Text>

                </View>
            </View>

        </Pressable>
    )
}

export default CabanaComponent