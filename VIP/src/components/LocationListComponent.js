import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ticklogo } from '../assets'

const LocationListComponent = ({ location, index, onPressFunction, state }) => {
    return (
        <Pressable onPress={() => onPressFunction(location, index)} style={{ margin: HEIGHT * 0.01 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#636B74', borderBottomWidth: 1, paddingBottom: HEIGHT * 0.02 }}>
                <Text style={{ color: 'white', fontSize: HEIGHT * 0.02 }}>{location}</Text>
                <View style={{ height: HEIGHT * 0.025, width: WIDTH * 0.055, borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.03, backgroundColor: state.index === index ? '#0FC1A1' : '#181D23', justifyContent: 'center', alignItems: 'center' }}>
                    {index === state.index ? <Image source={ticklogo} resizeMode="contain" style={{ width: WIDTH * 0.0256411, tintColor: 'white' }} /> : ''}
                </View>
            </View>
        </Pressable>
    )
}

export default LocationListComponent