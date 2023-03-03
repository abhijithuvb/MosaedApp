import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'
import { HEIGHT } from '../../constants/dimensions'

const FullButtonComponent = ({ label, onPress }) => {
    return (
        <Pressable onPress={() => onPress()} style={{ width: '100%', height: HEIGHT * 0.056, backgroundColor: colors.yellow, borderRadius: HEIGHT * 0.004, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: colors.lightblack }}>{label}</Text>
        </Pressable>
    )
}

export default FullButtonComponent