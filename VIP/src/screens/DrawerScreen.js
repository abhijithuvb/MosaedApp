import { View, Text, SafeAreaView, Image, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import { drawerbottomlogo, drawertoplogo, splashscreentoplogo, drwaerdp, giftsmall, drawerlisthomelogo, drawerlistlogoutlogo } from '../assets'
import DrawerMenuComponent from '../components/DrawerMenuComponent'
import { drawerMenu } from '../Arrays/Arrays'

const DrawerScreen = () => {
    const [colors, setColors] = useState(false)
    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>
            <SafeAreaView style={{ flex: 1, }}>
                {/* <View style={{ position: 'absolute', right: 0 }}>
                    <Image source={drawertoplogo} />
                </View> */}
                <View style={{ position: 'absolute', left: 0, bottom: 0 }}>
                    <Image source={drawerbottomlogo} />
                </View>
                <View style={{ marginLeft: WIDTH * 0.085 }}>

                    <View style={{ marginTop: HEIGHT * 0.01 }}>
                        <Image source={drwaerdp} />
                        <Text style={{ color: '#ffffff', fontSize: HEIGHT * 0.023, fontWeight: '700', marginTop: HEIGHT * 0.015 }}>Hisham Tourbaq</Text>
                        <View style={{ flexDirection: 'row', marginTop: HEIGHT * 0.01 }}>
                            <Image source={giftsmall} />
                            <Text style={{ color: '#0FC1A1', fontWeight: '800' }}>Gold<Text style={{ color: '#ffffff', fontWeight: '300' }}>(1038)Point</Text></Text>
                        </View>
                    </View>
                    <View style={{ marginTop: HEIGHT * 0.055, }}>
                        <View style={{ height: HEIGHT * 0.04, width: WIDTH * 0.4, backgroundColor: "black", flexDirection: 'row', borderRadius: HEIGHT * 0.02 }}>
                            <Pressable onPress={() => setColors(!colors)} style={{ backgroundColor: colors ? "#0FC1A1" : '#000000', width: WIDTH * 0.2, justifyContent: 'center', borderBottomLeftRadius: HEIGHT * 0.01, borderTopLeftRadius: HEIGHT * 0.01 }}>
                                <Text style={{ textAlign: 'center', color: colors ? '#000000' : '#ffffff' }}>Arabic</Text>
                            </Pressable>
                            <Pressable onPress={() => setColors(!colors)} style={{ backgroundColor: !colors ? '#0FC1A1' : '#000000', width: WIDTH * 0.2, justifyContent: 'center', borderBottomRightRadius: HEIGHT * 0.01, borderTopRightRadius: HEIGHT * 0.01 }}>
                                <Text style={{ color: !colors ? '#000000' : '#ffffff', textAlign: 'center', }}>English</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View>
                        <FlatList data={drawerMenu} renderItem={({ item }) => <DrawerMenuComponent logo={item.logo} title={item.title} />} />
                    </View>

                    <View style={{ marginTop: HEIGHT * 0.045, }}>
                        <DrawerMenuComponent logo={drawerlistlogoutlogo} title="Logout" />
                    </View>

                </View>
            </SafeAreaView>

        </View>
    )
}

export default DrawerScreen