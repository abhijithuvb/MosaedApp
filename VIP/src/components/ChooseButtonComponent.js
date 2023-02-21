import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants'



const ChooseButtonComponent = ({ label, onPressFunction, Width, color }) => {
    return (
        <Pressable style={{ width: Width ? WIDTH * 0.55 : WIDTH * 0.85, borderRadius: HEIGHT * 0.01 }} onPress={() => onPressFunction()}>
            <View style={{ borderWidth: 1, borderColor: '#0FC1A1', backgroundColor: color, height: HEIGHT * 0.07, width: Width ? WIDTH * 0.55 : WIDTH * 0.85, borderRadius: HEIGHT * 0.01, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: HEIGHT * 0.022, fontWeight: '300', color: 'white' }}>{label}</Text>
            </View>
        </Pressable>

    )
}

export default ChooseButtonComponent