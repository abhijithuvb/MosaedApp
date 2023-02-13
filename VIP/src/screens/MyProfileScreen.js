import { View, Text, SafeAreaView, Image, FlatList, Pressable } from 'react-native'
import React from 'react'
import { backarrow, backgroundsmalllogo, editprofilesmalllogo, mainmediumlogo, multicolormediumlogo, myprofiledp, rightarrowlogo, searchlogo } from '../assets'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import { myprofileData } from '../Arrays/Arrays'

const MyProfileScreen = ({ navigation }) => {
    console.log('====================================');
    console.log(HEIGHT * 0.0178);
    console.log('====================================');
    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>

            <SafeAreaView style={{ flex: 1 }}>
                <Image style={{ position: 'absolute', right: 0, top: HEIGHT * 0.01, tintColor: "#0E1114" }} source={backgroundsmalllogo} />
                <View style={{ marginTop: HEIGHT * 0.025, }}>
                    <HeaderComponent leftOnPress={() => navigation.goBack()} title="MY PROFILE" leftlogo={backarrow} rightlogo={searchlogo} />
                </View>

                <View style={{ flex: 1 }}>
                    <View style={{ height: HEIGHT * 0.43, borderBottomLeftRadius: HEIGHT * 0.008, borderBottomRightRadius: HEIGHT * 0.008, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ justifyContent: 'center', alignSelf: 'center', marginTop: HEIGHT * 0.04 }}>
                            <Image source={myprofiledp} />
                        </View>
                        <View style={{ justifyContent: 'space-between', height: HEIGHT * 0.08, alignItems: 'center', marginTop: HEIGHT * 0.04 }}>
                            <Text style={{ color: 'white', fontSize: HEIGHT * 0.0237, fontWeight: 'bold' }}>Hisham tourbaq</Text>
                            <Text style={{ color: 'gold', fontSize: HEIGHT * 0.017 }}><Text style={{ fontWeight: '900' }}>Gold </Text>(1038) point</Text>
                            <Text style={{ color: 'white', fontSize: HEIGHT * 0.0178 }}>+97444621428</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'black', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{}}><FlatList data={myprofileData} renderItem={({ item }) => <View>
                            <Pressable onPress={() => navigation.navigate(item.path)} style={{ backgroundColor: '#181D23', flexDirection: 'row', width: WIDTH * 0.9, justifyContent: 'space-between', height: HEIGHT * 0.095, alignItems: 'center', paddingLeft: HEIGHT * 0.02, paddingRight: HEIGHT * 0.02, borderRadius: HEIGHT * 0.01, marginTop: HEIGHT * 0.02 }}>
                                <View style={{ flexDirection: 'row', width: WIDTH * 0.42, alignItems: 'center' }}>
                                    <View style={{ backgroundColor: 'black', height: HEIGHT * 0.05, width: HEIGHT * 0.05, justifyContent: 'center', alignItems: 'center', borderRadius: HEIGHT * 0.012 }}>
                                        <Image source={item.logo} /></View>
                                    <Text style={{ color: 'white', fontSize: HEIGHT * 0.023, marginLeft: HEIGHT * 0.04 }}>{item.title}</Text>

                                </View>


                                <Image source={rightarrowlogo} />
                            </Pressable>
                        </View>} /></View>


                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default MyProfileScreen