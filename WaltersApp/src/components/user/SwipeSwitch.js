import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { HEIGHT, WIDTH } from '../../constants/dimensions';
import { colors } from '../../constants/colors';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from 'redux-i18n';

const SwipeSwitch = (props) => {


    const [activeIndex, setActiveIndex] = useState(0)
    const { lang } = useSelector((state) => state.i18nState)
    const { buttons = [], onChange = () => { }, navigation } = props
    const beta = useSharedValue(0);
    const dispatch = useDispatch()
    const buttonStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                translateX:
                    withTiming(beta.value, { duration: 500, easing: Easing.bounce })
            }]
        }
    })
    const handleTouch = (item, index) => {
        beta.value = index * (WIDTH * 0.3222) / 2
        setActiveIndex(index)
        setTimeout(() => {
            dispatch(setLanguage(lang === 'en' ? 'ar' : 'en'))
        }, 500)
    }
    return (
        <View>
            <View style={{ height: HEIGHT * 0.03614, width: WIDTH * 0.3222, backgroundColor: colors.yellow, borderRadius: HEIGHT * 0.006, flexDirection: 'row' }}><Animated.View style={[buttonStyle, activeIndex == 0 ? { borderTopLeftRadius: HEIGHT * 0.006, borderBottomLeftRadius: HEIGHT * 0.006 } : { borderTopRightRadius: HEIGHT * 0.006, borderBottomRightRadius: HEIGHT * 0.006 }, { width: (WIDTH * 0.3) / 2, backgroundColor: colors.white, position: 'absolute', height: HEIGHT * 0.03, alignSelf: 'center', marginHorizontal: WIDTH * 0.005, }]}>

            </Animated.View>
                {buttons.map((item, index) => <Pressable key={index} onPress={() => handleTouch(item, index)}
                    style={{ width: (WIDTH * 0.3222) / 2, borderTopLeftRadius: HEIGHT * 0.006, borderBottomLeftRadius: HEIGHT * 0.006, justifyContent: 'center' }}><Text style={{ textAlign: 'center', color: colors.lightblack }}>{item.value}</Text></Pressable>)}


            </View>
        </View>
    )
}

export default SwipeSwitch