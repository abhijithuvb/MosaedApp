import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { splashscreenbackgroundlogo, splashscreenbottomlogo, splashscreentoplogo, splashscreenmainlogo } from '../assets'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("LoginScreen")
        }, 1000)
    }, [])


    return (
        <View style={{ flex: 1, backgroundColor: '#181D23' }}>
            <View style={{ position: 'absolute', right: 0 }}>
                <Image source={splashscreenbackgroundlogo} />
            </View>
            <View style={{ position: 'absolute', right: 0 }}>
                <Image source={splashscreentoplogo} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={splashscreenmainlogo} />
            </View>
            <View style={{ position: 'absolute', bottom: 0 }}>
                <Image source={splashscreenbottomlogo} />
            </View>
        </View>
    )
}

export default SplashScreen