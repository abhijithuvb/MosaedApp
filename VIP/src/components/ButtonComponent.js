import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../../mosaedApp/src/components/constants/constants'

const ButtonComponent = ({ label, onPressFunction }) => {
    return (
        <Pressable style={{ width: WIDTH * 0.85, borderRadius: HEIGHT * 0.01 }} onPress={() => onPressFunction()}>
            <View style={{ backgroundColor: '#0FC1A1', height: HEIGHT * 0.07, width: WIDTH * 0.85, borderRadius: HEIGHT * 0.01, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: HEIGHT * 0.022, fontWeight: '300' }}>{label}</Text>
            </View>
        </Pressable>

    )
}

export default ButtonComponent