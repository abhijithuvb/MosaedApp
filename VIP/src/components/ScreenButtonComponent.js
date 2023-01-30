import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import { submitleftarrow, submitrightarrow } from '../assets'

const ScreenButtonComponent = ({ onPress, text }) => {
    return (
        <Pressable
            onPress={() => onPress()}
            style={{
                width: '100%',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={submitleftarrow} />
                <Text
                    style={{
                        textAlign: 'auto',
                        marginLeft: WIDTH * 0.05,
                        marginRight: WIDTH * 0.05,
                        fontSize: HEIGHT * 0.025,
                        marginTop: -HEIGHT * 0.008,
                        fontWeight: '300',
                        color: '#181D23',
                    }}>
                    {text}
                </Text>
                <Image source={submitrightarrow} />
            </View>
        </Pressable>
    )
}

export default ScreenButtonComponent