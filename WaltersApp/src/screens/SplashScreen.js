import { View, Text, ImageBackground, Image } from 'react-native'
import React, { useEffect } from 'react'
import { splashimage, splashtext } from '../assets/images'
import { HEIGHT } from '../constants/dimensions'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("UserLoginScreen")
        }, 1000)
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1 }} source={splashimage} >
                <Image style={{ position: 'absolute', bottom: HEIGHT * 0.19, alignSelf: 'center' }} source={splashtext} />
            </ImageBackground>

        </View>
    )
}

export default SplashScreen