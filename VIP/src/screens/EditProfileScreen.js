import { View, Text, Image, ImageBackground, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import { backarrow, backgroundsmalllogo, camerasmalllogo, dpblackcovered, myprofiledp, searchlogo } from '../assets'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import TextInputComponent from '../components/TextInputComponent'
import ButtonComponent from '../components/ButtonComponent'

const EditProfileScreen = ({ navigation }) => {
    const [editDetails, setEditDetails] = useState({ firstname: '', lastname: '', email: '', phone: '', qid: '' })
    const firstRef = useRef()
    const secondRef = useRef()
    const thirdrRef = useRef()
    const fourthRef = useRef()
    const fifthRef = useRef()
    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>

            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView style={{ flex: 1, }} keyboardVerticalOffset={HEIGHT * 0.01} keyb behavior={"padding"}>
                    <Image style={{ position: 'absolute', right: 0, top: HEIGHT * 0.01, tintColor: "#0E1114" }} source={backgroundsmalllogo} />
                    <View style={{ marginTop: HEIGHT * 0.032, }}>
                        <HeaderComponent leftOnPress={() => navigation.goBack()} title="MY PROFILE" leftlogo={backarrow} rightlogo={searchlogo} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ height: HEIGHT * 0.2, width: WIDTH * 0.3, justifyContent: 'center', alignSelf: 'center' }}>
                            <ImageBackground source={myprofiledp}>
                                <Image source={dpblackcovered} />
                                <View style={{ position: 'absolute', justifyContent: 'center', alignSelf: 'center', top: HEIGHT * 0.05 }}><Image source={camerasmalllogo} /></View>
                            </ImageBackground>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: HEIGHT * 0.015 }}>
                            <ScrollView>
                                <TextInputComponent
                                    referance={firstRef}
                                    onSubmitEditing={() => secondRef.current.focus()}
                                    returnType={"next"}
                                    setState={(text) => setEditDetails({ ...editDetails, firstname: text })} label={"First Name"} />
                                <TextInputComponent
                                    referance={secondRef}
                                    onSubmitEditing={() => thirdrRef.current.focus()}
                                    returnType={"next"}
                                    setState={(text) => setEditDetails({ ...editDetails, lastname: text })} label={"Last Name"} />
                                <TextInputComponent
                                    referance={thirdrRef}
                                    onSubmitEditing={() => fourthRef.current.focus()}
                                    returnType={"next"}
                                    setState={(text) => setEditDetails({ ...editDetails, email: text })} label={"Email"} />
                                <TextInputComponent
                                    referance={fourthRef}
                                    onSubmitEditing={() => fifthRef.current.focus()}
                                    returnType={"next"}
                                    setState={(text) => setEditDetails({ ...editDetails, phone: text })} label={"Phone"} />
                                <TextInputComponent
                                    referance={fifthRef}
                                    returnType={"done"}
                                    setState={(text) => setEditDetails({ ...editDetails, qid: text })} label={"Qid"} />
                            </ScrollView>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: HEIGHT * 0.04 }}>
                            <ButtonComponent label={'SAVE'} onPressFunction={() => navigation.navigate('HomeScreen')} />
                        </View>

                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View >
    )
}

export default EditProfileScreen