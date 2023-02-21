import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { minusicon, plusicon } from '../assets'
import { HEIGHT, WIDTH } from '../../Constants/Constants'

const RenderItemz = (props) => {
    const [count, setCount] = useState(0)
    const { logo, rate, text } = props
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: HEIGHT * 0.02, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={logo} />
                <View style={{ marginLeft: HEIGHT * 0.01 }}>
                    <Text style={{ color: 'white', fontSize: HEIGHT * 0.02 }}>{text}</Text>
                    <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.02 }}>{rate}</Text>
                </View>
            </View>
            <View>
                <View style={{ flexDirection: 'row', }}>
                    <Pressable
                        onPress={() => setCount(count - 1)}
                        style={{ height: HEIGHT * 0.03, width: WIDTH * 0.06, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', borderColor: '#0FC1A1', borderWidth: 1, borderRadius: HEIGHT * 0.002 }}><Image source={minusicon} /></Pressable>
                    <Text style={{ color: '#0FC1A1', marginLeft: HEIGHT * 0.02, marginRight: HEIGHT * 0.02, marginTop: HEIGHT * 0.004 }}>{count}</Text>
                    <Pressable onPress={() => setCount(count + 1)} style={{ height: HEIGHT * 0.03, width: WIDTH * 0.06, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', borderColor: '#0FC1A1', borderWidth: 1, borderRadius: HEIGHT * 0.002 }}><Image source={plusicon} /></Pressable>
                </View>

            </View>
        </View>
    )
}

export default RenderItemz