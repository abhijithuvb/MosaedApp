import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../constants/dimensions'
import { colors } from '../../constants/colors'

const ButtonComponent = (props) => {
    const { label, onPress = () => { }, small } = props
    console.log("HEIGHT<==>", WIDTH * 0.296)
    return (
        <Pressable onPress={() => onPress()} style={{ width: small ? WIDTH * 0.296 : WIDTH * 0.6417, height: HEIGHT * 0.056, backgroundColor: colors.yellow, borderRadius: HEIGHT * 0.004, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: colors.lightblack }}>{label}</Text>
        </Pressable>
    )
}

export default ButtonComponent