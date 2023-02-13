import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import { backarrow, backgroundsmalllogo, camerasmalllogo, dpblackcovered, myprofiledp, searchlogo } from '../assets'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import TextInputComponent from '../components/TextInputComponent'
import ButtonComponent from '../components/ButtonComponent'

const EditProfileScreen = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>

            <SafeAreaView style={{ flex: 1 }}>
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
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: HEIGHT * 0.035 }}>
                        <TextInputComponent label={"First Name"} />
                        <TextInputComponent label={"Last Name"} />
                        <TextInputComponent label={"Email"} />
                        <TextInputComponent label={"Phone"} />
                        <TextInputComponent label={"Qid"} />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: HEIGHT * 0.04 }}>
                        <ButtonComponent label={'SAVE'} onPressFunction={() => navigation.navigate('HomeScreen')} />
                    </View>

                </View>
            </SafeAreaView>
        </View>
    )
}

export default EditProfileScreen