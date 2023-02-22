import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants'

const QrButtonComponent = ({ text, logo, onPress }) => {
    return (
        <Pressable
            onPress={() => onPress()}
            style={{
                width: '100%',
                // flex: 1,
                justifyContent: 'center',
                alignItems: 'center', height: HEIGHT * 0.075
            }}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={logo} />
                <Text
                    style={{
                        textAlign: 'auto',
                        marginLeft: WIDTH * 0.02,
                        marginRight: WIDTH * 0.05,
                        fontSize: 18,
                        marginTop: HEIGHT * 0.001,
                        fontWeight: '300',
                        color: '#181D23',
                    }}>
                    {text}
                </Text>
                {/* <Image source={submitrightarrow} /> */}
            </View>
        </Pressable>
    )
}

export default QrButtonComponent