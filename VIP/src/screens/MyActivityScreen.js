import { View, Text, SafeAreaView, Image, Pressable } from 'react-native'
import React from 'react'
import { backarrow, backgroundsmalllogo, searchlogo } from '../assets'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT } from '../../Constants/Constants'

const MyActivityScreen = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>

            <SafeAreaView style={{ flex: 1 }}>
                {/* <Image style={{ position: 'absolute', right: 0, top: HEIGHT * 0.01, tintColor: "#0E1114" }} source={backgroundsmalllogo} /> */}
                <View style={{ marginTop: HEIGHT * 0.032, }}>
                    <HeaderComponent leftOnPress={() => navigation.goBack()} title="MY ACTIVITIES" leftlogo={backarrow} rightlogo={searchlogo} />

                </View>

                <View style={{ flex: 1, backgroundColor: 'black' }}>
                    <View style={{ backgroundColor: '#181D23', height: HEIGHT * 0.08, borderRadius: HEIGHT * 0.01 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * 0.04, marginLeft: HEIGHT * 0.05, marginRight: HEIGHT * 0.05 }}>
                            <Pressable><Text style={{ color: 'white', fontSize: HEIGHT * 0.023 }}>Rent</Text></Pressable>
                            <Pressable><Text style={{ color: 'white', fontSize: HEIGHT * 0.023 }}>Services</Text></Pressable>
                            <Pressable><Text style={{ color: 'white', fontSize: HEIGHT * 0.023 }}>Build</Text></Pressable>
                        </View>
                    </View>
                    <View style={{}}>

                    </View>

                </View>

            </SafeAreaView>
        </View>
    )
}

export default MyActivityScreen