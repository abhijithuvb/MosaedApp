import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../constants/dimensions'
import { colors } from '../../constants/colors'

const ButtonComponent = (props) => {
    const { label } = props
    return (
        <Pressable style={{ width: WIDTH * 0.6417, height: HEIGHT * 0.056, backgroundColor: colors.yellow, borderRadius: HEIGHT * 0.004, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{label}</Text>
        </Pressable>
    )
}

export default ButtonComponent