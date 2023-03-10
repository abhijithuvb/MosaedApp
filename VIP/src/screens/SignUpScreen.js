import { View, Text, SafeAreaView, Image, FlatList, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'

import { backgroundlogo, mainsmalllogo } from '../assets'
import { HEIGHT, WIDTH } from '../../../mosaedApp/src/components/constants/constants'
import TextInputComponent from '../components/TextInputComponent'
import ButtonComponent from '../components/ButtonComponent'
import { signupArray } from '../Arrays/Arrays'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignUpScreen = ({ navigation }) => {
    const [userDetails, setUserDetails] = useState({ firstname: '', lastname: '', email: '', phone: '', qid: '' })
    console.log("userdetails==>>", userDetails)

    const validation = () => {
        if (userDetails.email !== "" && userDetails.firstname !== "" && userDetails.lastname !== "" && userDetails.phone !== "" & userDetails.qid !== "") {
            saveUser()
            navigation.navigate("LoginScreen")
        } else {
            alert("Fill Required Fields")
        }
    }
    const saveUser = async () => {
        await AsyncStorage.setItem("user", "true")
    }
    const inputRef = useRef([])
    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>
            <SafeAreaView style={{ backgroundColor: '#181D23', flex: 1, }}>
                <KeyboardAvoidingView style={{ flex: 1, }} keyboardVerticalOffset={HEIGHT * 0.01} keyb behavior={"padding"}>
                    <View style={{ paddingLeft: WIDTH * 0.06 }}>

                        <View style={{ marginTop: HEIGHT * 0.045, }}>
                            <Image source={mainsmalllogo} />
                        </View>
                        <View style={{ marginTop: HEIGHT * 0.03, marginBottom: HEIGHT * 0.034 }}>
                            <Text style={{ fontSize: HEIGHT * 0.062, fontWeight: '400', color: '#0FC1A1' }}>SIGN UP</Text>
                        </View>
                        <ScrollView><FlatList data={signupArray} renderItem={({ item }) =>
                            <View style={{ marginTop: HEIGHT * 0.001 }}>
                                <TextInputComponent
                                    referance={el => inputRef.current[item.id] = el} onSubmitEditing={() => setTimeout(() => {
                                        item.id <= 4 && inputRef.current[item.id + 1].focus()
                                    }, 100)} id={item.id} returnKeyType={item.returnType} label={item.label} setState={(text) => setUserDetails({ ...userDetails, [item.data]: text })} length={8} />
                            </View>} /></ScrollView>



                        <View>
                            <Text style={{ color: '#DBDBDB', fontSize: HEIGHT * 0.015 }}>
                                Do You Have An Account? <Text style={{ color: '#FF5F00' }}>SIGN IN</Text>
                            </Text>
                        </View>
                        <View style={{ marginTop: HEIGHT * 0.045 }}>
                            <ButtonComponent label="SEND" onPressFunction={() => validation()} />
                        </View>

                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: HEIGHT * 0.25 }}>
                        <Text style={{ color: '#DBDBDB', fontSize: HEIGHT * 0.014 }}>Continue As Guest</Text>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
            <Image style={{ position: 'absolute', right: 0 }} source={backgroundlogo} />
        </View>
    )
}

export default SignUpScreen