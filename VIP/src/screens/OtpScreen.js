import { View, Text, SafeAreaView, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

import { backgroundlogo, mainsmalllogo } from '../assets'
import { HEIGHT, WIDTH } from '../../../mosaedApp/src/components/constants/constants'
import ButtonComponent from '../components/ButtonComponent'
import AsyncStorage from '@react-native-async-storage/async-storage'

const OtpScreen = ({ navigation }) => {
    const [color, setColor] = useState({ firstColor: '#AFABC4', secondColor: '#AFABC4', thirdColor: '#AFABC4', fourthColor: '#AFABC4', fifthColor: '#AFABC4' })
    const [otp, setOtp] = useState([])
    console.log("otp==>>", otp)

    const firstInput = useRef()
    const secondInput = useRef()
    const thirdInput = useRef()
    const fourthInput = useRef()
    const fifthInput = useRef()


    const handleFirst = (text) => {
        if (text) {
            otp.push(text)
            setOtp([...otp])
            color.firstColor = "#0FC1A1"
            setColor({ ...color })
            secondInput.current.focus()
        } else {
            otp.pop()
            setOtp([...otp])
            color.firstColor = "#AFABC4"
            setColor({ ...color })
        }
    }
    const handleSecond = (text) => {
        if (text) {
            otp.push(text)
            setOtp([...otp])
            color.secondColor = "#0FC1A1"
            setColor({ ...color })
            thirdInput.current.focus()
        } else {
            otp.pop()
            setOtp([...otp])
            color.secondColor = "#AFABC4"
            setColor({ ...color })
            firstInput.current.focus()
        }
    }
    const handleThird = (text) => {
        if (text) {
            otp.push(text)
            setOtp([...otp])
            color.thirdColor = "#0FC1A1"
            setColor({ ...color })
            fourthInput.current.focus()
        } else {
            otp.pop()
            setOtp([...otp])
            color.thirdColor = "#AFABC4"
            setColor({ ...color })
            secondInput.current.focus()
        }
    }
    const handleFourth = (text) => {
        if (text) {
            otp.push(text)
            setOtp([...otp])
            color.fourthColor = "#0FC1A1"
            setColor({ ...color })
            fifthInput.current.focus()
        } else {
            otp.pop()
            setOtp([...otp])
            color.fourthColor = "#AFABC4"
            setColor({ ...color })
            thirdInput.current.focus()
        }
    }
    const handleFifth = (text) => {
        if (text) {
            otp.push(text)
            setOtp([...otp])
            color.fifthColor = "#0FC1A1"
            setColor({ ...color })
        } else {
            otp.pop()
            setOtp([...otp])
            color.fifthColor = "#AFABC4"
            setColor({ ...color })
            fourthInput.current.focus()
        }
    }

    const validation = async () => {
        if (otp.length !== 5) {
            alert("Incorrect Otp")
        }
        else {
            await AsyncStorage.setItem("loggedIn", "true")
            const loggedIn = await AsyncStorage.getItem("loggedIn")
            // if (loggedIn) {
            setTimeout(() => {
                navigation.replace("HomeScreen")
            }, 1500)

            // }

        }
    }

    useEffect(() => {
        firstInput.current.focus()
    }, [])
    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>
            <SafeAreaView style={{ backgroundColor: '#181D23', flex: 1 }}>
                <KeyboardAvoidingView style={{ flex: 1, }} keyboardVerticalOffset={HEIGHT * 0.1} behavior={"padding"}>
                    <View style={{ paddingLeft: WIDTH * 0.06 }}>
                        <View style={{ marginTop: HEIGHT * 0.125, }}>
                            <Image source={mainsmalllogo} />
                        </View>
                        <View style={{ marginTop: HEIGHT * 0.03 }}>
                            <Text style={{ fontSize: HEIGHT * 0.062, fontWeight: '400', color: '#0FC1A1' }}>ENTER OTP</Text>
                        </View>
                        <View style={{ marginTop: HEIGHT * 0.025 }}>
                            <Text style={{ color: '#DBDBDB', fontSize: HEIGHT * 0.02, fontWeight: '400' }}>
                                Enter 5 Digit Verification Code To {'\n'}Your Number
                            </Text>
                        </View>
                        <View style={{ marginTop: HEIGHT * 0.037, flexDirection: 'row' }}>
                            <TextInput ref={firstInput} style={{
                                width: WIDTH * 0.15, height: HEIGHT * 0.07, borderWidth: 0.5, borderColor: color.firstColor, borderRadius: HEIGHT * 0.008, textAlign: 'center', color: "#0FC1A1"
                            }} onChangeText={(text) => handleFirst(text)} maxLength={1} />
                            <TextInput ref={secondInput} style={{
                                width: WIDTH * 0.15, height: HEIGHT * 0.07, borderWidth: 0.5, borderColor: color.secondColor, borderRadius: HEIGHT * 0.008, textAlign: 'center', marginLeft: WIDTH * 0.03, color: "#0FC1A1"
                            }} onChangeText={(text) => handleSecond(text)} maxLength={1} />
                            <TextInput ref={thirdInput} style={{
                                width: WIDTH * 0.15, height: HEIGHT * 0.07, borderWidth: 0.5, borderColor: color.thirdColor, borderRadius: HEIGHT * 0.008, textAlign: 'center', marginLeft: WIDTH * 0.03, color: "#0FC1A1"
                            }} onChangeText={(text) => handleThird(text)} maxLength={1} />
                            <TextInput ref={fourthInput} style={{
                                width: WIDTH * 0.15, height: HEIGHT * 0.07, borderWidth: 0.5, borderColor: color.fourthColor, borderRadius: HEIGHT * 0.008, textAlign: 'center', marginLeft: WIDTH * 0.03, color: "#0FC1A1"
                            }} onChangeText={(text) => handleFourth(text)} maxLength={1} />
                            <TextInput ref={fifthInput} style={{
                                width: WIDTH * 0.15, height: HEIGHT * 0.07, borderWidth: 0.5, borderColor: color.fifthColor, borderRadius: HEIGHT * 0.008, textAlign: 'center', marginLeft: WIDTH * 0.03, color: "#0FC1A1"
                            }} onChangeText={(text) => handleFifth(text)} maxLength={1} />
                        </View>
                        <View style={{ marginTop: HEIGHT * 0.017 }}>
                            <Text style={{ color: '#FFFFFF', fontSize: HEIGHT * 0.015 }}>
                                Change Phone Number?
                            </Text>
                        </View>
                        <View style={{ marginTop: HEIGHT * 0.045 }}>
                            <ButtonComponent label="SUBMIT" onPressFunction={() => validation()} />
                        </View>

                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: HEIGHT * 0.04 }}>
                        <Text style={{ color: '#FF5F00', fontSize: HEIGHT * 0.014 }}>Send Again ?</Text>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
            <Image style={{ position: 'absolute', right: 0 }} source={backgroundlogo} />
        </View>
    )
}

export default OtpScreen