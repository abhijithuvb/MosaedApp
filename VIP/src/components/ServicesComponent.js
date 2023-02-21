import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import { calendarSmalllogo } from '../assets'
import { useNavigation } from '@react-navigation/native'

const ServicesComponent = ({ logo, text, time, bgcolor, color, status }) => {
    const navigation = useNavigation()
    return (
        <Pressable onPress={() => navigation.navigate("WashTicketScreen")} style={{ width: WIDTH }}>

            <View style={{ flexDirection: 'row', width: WIDTH * 0.9, alignSelf: 'center', marginTop: HEIGHT * 0.02 }}>
                <Image source={logo} />
                <View style={{ justifyContent: 'center', marginLeft: HEIGHT * 0.02 }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>BADRI PULLING</Text>
                    <Text style={{ color: '#FF5F00', fontSize: 12 }}>{text}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: HEIGHT * 0.11 }}>
                <Image source={calendarSmalllogo} />
                <View style={{ marginLeft: HEIGHT * 0.02 }}>
                    <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.014, textAlign: 'center' }}>23, December,2020</Text>
                    <Text style={{ color: '#636B74', fontSize: HEIGHT * 0.014 }}>{time}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: WIDTH * 0.9, alignSelf: 'center', marginTop: HEIGHT * 0.03 }}>
                <View style={{ backgroundColor: bgcolor, height: HEIGHT * 0.024, width: WIDTH * 0.153, justifyContent: 'center', alignItems: 'center', borderRadius: HEIGHT * 0.005, marginLeft: HEIGHT * 0.08 }}>
                    <Text style={{ color: color, fontSize: 12 }}>{status}</Text>

                </View>
                <Text style={{ color: 'white', fontSize: 20, marginRight: HEIGHT * 0.03 }}>250</Text>

            </View></Pressable>
    )
}

export default ServicesComponent