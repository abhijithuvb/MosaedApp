import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'

import { backgroundlogo, mainsmalllogo } from '../assets'
import { HEIGHT, WIDTH } from '../../../mosaedApp/src/components/constants/constants'
import TextInputComponent from '../components/TextInputComponent'
import ButtonComponent from '../components/ButtonComponent'

const LoginScreen = ({ navigation }) => {
    const [phone, setPhone] = useState("")
    const validation = () => {
        if (phone !== "") {
            if (phone.length !== 8) {
                alert("8 Number Required")
            } else {
                navigation.navigate("OtpScreen")
            }
        } else {
            alert("Enter A Valid Phone Number")
        }
    }
    console.log("phone", phone)
    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>
            <SafeAreaView style={{ backgroundColor: '#181D23', flex: 1 }}>
                <View style={{ paddingLeft: WIDTH * 0.06 }}>
                    <View style={{ marginTop: HEIGHT * 0.125, }}>
                        <Image source={mainsmalllogo} />
                    </View>
                    <View style={{ marginTop: HEIGHT * 0.03 }}>
                        <Text style={{ fontSize: HEIGHT * 0.062, fontWeight: '400', color: '#0FC1A1' }}>LOGIN</Text>
                    </View>
                    <View style={{ marginTop: HEIGHT * 0.025 }}>
                        <Text style={{ color: '#DBDBDB', fontSize: HEIGHT * 0.02, fontWeight: '400' }}>
                            We Will Send You A Verification Code{'\n'}On This Mobile Number
                        </Text>
                    </View>
                    <View style={{ marginTop: HEIGHT * 0.037 }}>
                        <TextInputComponent label="Phone Number" setState={(text) => setPhone(text)} length={8} />
                    </View>
                    <View>
                        <Text style={{ color: '#DBDBDB', fontSize: HEIGHT * 0.015 }}>
                            Don't Have An Account? <Text style={{ color: '#FF5F00' }}>SIGN UP</Text>
                        </Text>
                    </View>
                    <View style={{ marginTop: HEIGHT * 0.045 }}>
                        <ButtonComponent label="SEND" onPressFunction={() => validation()} />
                    </View>

                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: HEIGHT * 0.25 }}>
                    <Text style={{ color: '#DBDBDB', fontSize: HEIGHT * 0.014 }}>Continue As Guest</Text>
                </View>
            </SafeAreaView>
            <Image style={{ position: 'absolute', right: 0 }} source={backgroundlogo} />
        </View>
    )
}

export default LoginScreen