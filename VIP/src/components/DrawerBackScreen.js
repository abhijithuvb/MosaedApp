import { View, Text, SafeAreaView, Image, FlatList } from 'react-native'
import React from 'react'
import { terrain } from '../Arrays/Arrays'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import HeaderComponent from './HeaderComponent'
import { backarrow, backgroundsmalllogo, backgroundtinylogo, multicolormediumlogo, searchlogo, terrainmulticolorlogo } from '../assets'
import ButtonComponent from './ButtonComponent'
import TerrainComponent from './TerrainComponent'


const DrawerBackScreen = () => {
    return (
        <View style={{ backgroundColor: '#181D23', height: HEIGHT * 0.3, borderRadius: HEIGHT * 0.02, shadowColor: 'black', shadowOpacity: 0.9 }}>
            <SafeAreaView style={{}}>
                {/* <Image
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: HEIGHT * 0.01,
                        tintColor: '#0E1114',
                    }}
                    source={backgroundsmalllogo}
                /> */}
                <View style={{ marginTop: HEIGHT * 0.025 }}>
                    <HeaderComponent
                        // leftOnPress={() => navigation.goBack()}
                        title="RENT"
                        leftlogo={backarrow}
                        rightlogo={searchlogo}
                    />
                </View>

                <View
                    style={{
                        height: HEIGHT * 0.7,
                    }}>
                    <View
                        style={{
                            height: HEIGHT * 0.16,
                            borderBottomLeftRadius: HEIGHT * 0.008,
                            borderBottomRightRadius: HEIGHT * 0.008,
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',

                        }}>
                        <Text style={{ color: 'white', fontSize: HEIGHT * 0.03, marginTop: HEIGHT * 0.06 }}>CHOOSE TERRAIN</Text>
                        <Text
                            style={{
                                color: '#FFFFFF',
                                textAlign: 'center',
                                fontSize: HEIGHT * 0.02,
                                marginTop: HEIGHT * 0.020, width: WIDTH * 0.75
                            }}>
                            Please Specify The Type Of Vehicles You Want,Desert Or Beach
                        </Text>
                        {/* <Image
                            source={multicolormediumlogo}
                            style={{ position: 'absolute', left: 0, bottom: 0 }}
                        /> */}
                    </View>
                    <View
                        style={{
                            backgroundColor: '#00000090',
                            // flex: 1,
                            paddingTop: HEIGHT * 0.105,
                        }}>

                        <FlatList
                            horizontal
                            data={terrain}
                            renderItem={({ item, index }) => (
                                <TerrainComponent
                                    logo={item.logo}
                                    title={item.title}
                                    background={item.background}
                                // terrainStatus={terrainStatus}
                                // onPressFn={() => item.buttonFunction()}
                                // checklogo={item.checklogo}
                                />
                            )}
                        />
                        <View style={{ alignItems: 'center', marginBottom: HEIGHT * 0.068, marginTop: HEIGHT * 0.04 }}>
                            <ButtonComponent
                                label="NEXT"
                            /* onPressFunction={() => handleFunction()} */
                            />

                        </View>
                    </View>
                </View >
            </SafeAreaView >
        </View >
    )
}

export default DrawerBackScreen