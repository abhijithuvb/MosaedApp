import { View, Text, Image } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import { downarrow } from '../assets'

const BuildComponent = ({ color, text, date }) => {
    return (
        <View style={{ width: WIDTH, marginTop: HEIGHT * 0.005 }}>
            <View style={{ paddingTop: HEIGHT * 0.02, paddingBottom: HEIGHT * 0.02, backgroundColor: '#181D23', marginTop: HEIGHT * 0.01, width: WIDTH * 0.9, alignSelf: 'center', borderRadius: HEIGHT * 0.008 }}>
                <View style={{ flexDirection: 'row', width: WIDTH * 0.9, alignSelf: 'center', justifyContent: 'space-between' }}>


                    <View style={{ justifyContent: 'center', marginLeft: HEIGHT * 0.02 }}>
                        <Text style={{ color: 'white', fontSize: 18 }}>CABANA MODALE</Text>
                        <Text style={{ color: color, fontSize: 12 }}>{text}</Text>
                    </View>
                    <View style={{ height: HEIGHT * 0.029, width: HEIGHT * 0.029, backgroundColor: 'black', borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.003, marginRight: HEIGHT * 0.03, justifyContent: 'center', alignItems: 'center' }}><Image source={downarrow} /></View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: WIDTH * 0.9, alignSelf: 'center', marginTop: HEIGHT * 0.03 }}>

                    <Text style={{ color: '#636B74', fontSize: 12, marginLeft: HEIGHT * 0.02 }}>{date}</Text>

                    <Text style={{ color: '#0FC1A1', fontSize: 20, marginRight: HEIGHT * 0.02 }}>250 <Text style={{ fontSize: 8 }}>QAR</Text></Text>

                </View></View></View>
    )
}

export default BuildComponent