import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { splashscreenbackgroundlogo, splashscreenbottomlogo, splashscreentoplogo, splashscreenmainlogo } from '../assets'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = ({ navigation }) => {
    const navigationFunction = async () => {
        const user = await AsyncStorage.getItem("user")
        const loggedIn = await AsyncStorage.getItem("loggedIn")
        console.log('====================================');
        console.log(user, loggedIn);
        console.log('====================================');
        setTimeout(() => {
            if (user) {
                if (loggedIn) {
                    navigation.replace("HomeScreen")
                } else {
                    navigation.replace("LoginScreen")
                }
            } else if (!user) {
                navigation.replace("SignUpScreen");
            }
        }, 1500)
    }

    useEffect(() => {
        setTimeout(() => {
            navigationFunction()
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