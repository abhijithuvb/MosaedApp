import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../constants/dimensions'
import { colors } from '../../constants/colors'

const OtpInputComponent = () => {
    return (
        <View style={{ width: WIDTH * 0.111, height: HEIGHT * 0.058, borderBottomWidth: 2, borderBottomColor: colors.yellow, marginHorizontal: WIDTH * 0.01, marginVertical: HEIGHT * 0.01, }}>
            <TextInput style={{ width: WIDTH * 0.111, height: HEIGHT * 0.056, fontSize: 35, textAlign: 'center', color: colors.lightblack, padding: 0 }} maxLength={1} />
        </View>
    )
}

export default OtpInputComponent