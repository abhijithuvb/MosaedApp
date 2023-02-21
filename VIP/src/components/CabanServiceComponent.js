import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { HEIGHT, WIDTH } from '../../Constants/Constants'
import { multicolormediumlogo, multicolorrightlogo, servicelogo1, starrating, ticklogo } from '../assets'


const CabanServiceComponent = ({ logo, title, description, rate, index, setState, state }) => {
    return (
        <Pressable onPress={() => setState(index)} style={{ height: HEIGHT * 0.2, width: WIDTH * 0.9, backgroundColor: '#181D23', marginTop: HEIGHT * 0.02, borderRadius: HEIGHT * 0.01 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: HEIGHT * 0.02 }}>
                <View style={{}}>
                    <Image source={logo} />
                </View>
                <View style={{}}>
                    <Text style={{ color: 'white', fontSize: HEIGHT * 0.025 }}>{title}</Text>
                    <Image source={starrating} style={{ marginTop: HEIGHT * 0.006 }} />
                    <Text style={{ width: WIDTH * 0.5, color: '#DBDBDB', marginTop: HEIGHT * 0.01 }}>{description}</Text>
                    <View style={{ borderTopWidth: 1, borderTopColor: '#636B74', marginTop: HEIGHT * 0.015 }}><Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.03, marginTop: HEIGHT * 0.01 }}>{rate}<Text style={{ fontSize: HEIGHT * 0.015, }}>{' '}QAR</Text></Text></View>
                </View>
                <View style={{ height: HEIGHT * 0.025, width: WIDTH * 0.055, borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.03, marginTop: HEIGHT * 0.006, backgroundColor: state === index ? '#0FC1A1' : '#181D23', justifyContent: 'center', alignItems: 'center' }}>{state === index ? <Image source={ticklogo} resizeMode="contain" style={{ width: WIDTH * 0.0256411, tintColor: 'white' }} /> : ''}
                </View>

            </View>
            <Image style={{ position: 'absolute', right: 0, bottom: 0 }} source={multicolorrightlogo} />

        </Pressable>
    )
}

export default CabanServiceComponent