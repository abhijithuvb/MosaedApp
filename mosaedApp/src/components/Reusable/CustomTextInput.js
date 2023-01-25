import { View, Text, Image, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { searchlogo } from '../../Images'
import Animated, { color, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';


const CustomTextInput = ({ state, setState, data }) => {

    const HEIGHT = Dimensions.get('window').height;
    const WIDTH = Dimensions.get('window').width;
    const [border, setBorder] = useState("#3789D4")
    const animation = useSharedValue(1)
    const searchValue = useSharedValue(2)
    const language = "en"
    const animate = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: withTiming(animation.value * (-HEIGHT * 0.0150)), }, { translateX: withTiming(language === "en" ? animation.value * (-HEIGHT * 0.0157) : animation.value * (HEIGHT * 0.0157)), }, { scale: withTiming(searchValue.value * 0.28) }], backgroundColor: language === 'en' ? '#62788E23' : '#62788E23'

        }
    })

    const handleFocus = () => {
        searchValue.value = 1
        animation.value = 3
        setBorder("#1a73e8")
    }
    const handleBlur = () => {
        animation.value = 1
        searchValue.value = 2
        setBorder("#3789D4")
    }
    return (
        <View
            style={[{
                borderColor: border,
                flexDirection: language === 'en' ? 'row' : 'row-reverse',
                borderWidth: 1,
                width: HEIGHT * 0.37,
                height: HEIGHT * 0.068,
                borderRadius: HEIGHT * 0.008,
                marginTop: HEIGHT * 0.02,
                backgroundColor: '#62788E23'

            }]}>
            <Image
                source={searchlogo}
                style={{
                    marginTop: HEIGHT * 0.020,
                    marginLeft: HEIGHT * 0.012,
                    marginRight: HEIGHT * 0.012
                }}
            />
            <Animated.Text style={[{ position: 'absolute', left: WIDTH * 0.06, top: WIDTH * 0.045, color: "white", fontSize: HEIGHT * 0.04 }, animate]}>Search</Animated.Text>
            <TextInput
                style={{
                    width: HEIGHT * 0.29,
                    height: HEIGHT * 0.055,
                    borderRadius: HEIGHT * 0.008,
                    paddingLeft: HEIGHT * 0.008,
                    paddingRight: HEIGHT * 0.008,
                    marginTop: HEIGHT * 0.004,
                    color: 'white',
                    flexDirection: 'row-reverse', textAlign: language !== 'en' && 'right'

                }}
                onChangeText={(text) => { setState(text) }}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />

        </View>
    )
}

export default CustomTextInput