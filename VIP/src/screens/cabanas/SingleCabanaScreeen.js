import { View, Text, SafeAreaView, Image, FlatList } from 'react-native'
import React from 'react'
import HeaderComponent from '../../components/HeaderComponent'
import { backarrow, boatlargeimage, cabanakitchenlogo, locationarrowlogo, locationmediumlogo, messagelogo, phonelogo, singlecabanaimage, sizearrowlogo, sizemediumlogo, squarelogo, starrating, submitleftarrow, submitrightarrow } from '../../assets'
import { HEIGHT, WIDTH } from '../../../Constants/Constants'
import { useRoute } from '@react-navigation/native'
import ScreenButtonComponent from '../../components/ScreenButtonComponent'
import { cabanafeature } from '../../Arrays/Arrays'

const SingleCabanaScreen = ({ navigation }) => {
    const route = useRoute()
    const { title, company, size, rate, logo } = route.params

    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>

            <View style={{ flex: 1 }}>
                <View style={{ position: 'absolute', width: '100%', marginTop: Platform.OS === "android" ? HEIGHT * 0.025 : HEIGHT * 0.06, zIndex: 1 }}>
                    <HeaderComponent leftlogo={backarrow} title={'RENT'} rightlogo={squarelogo} leftOnPress={() => navigation.goBack()}
                    />
                </View>

                <View style={{ flex: 1, backgroundColor: '#0FC1A1' }}>
                    <Image source={singlecabanaimage} style={{ width: '100%' }} />
                    <View style={{ height: Platform.OS === "android" ? HEIGHT * 0.16 : HEIGHT * 0.15, backgroundColor: '#0E1114', borderRadius: HEIGHT * 0.01, position: 'absolute', width: '100%', top: HEIGHT * 0.35, zIndex: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: HEIGHT * 0.02 }}>
                            <View style={{ backgroundColor: 'white', width: WIDTH * 0.02, height: HEIGHT * 0.003, marginLeft: HEIGHT * 0.008 }}></View>
                            <View style={{ backgroundColor: 'white', width: WIDTH * 0.02, height: HEIGHT * 0.003, marginLeft: HEIGHT * 0.008 }}></View>
                            <View style={{ backgroundColor: 'white', width: WIDTH * 0.02, height: HEIGHT * 0.003, marginLeft: HEIGHT * 0.008 }}></View>
                            <View style={{ backgroundColor: 'white', width: WIDTH * 0.02, height: HEIGHT * 0.003, marginLeft: HEIGHT * 0.008 }}></View>
                        </View>
                        <View style={{ margin: HEIGHT * 0.015 }}>
                            <View style={{ marginTop: HEIGHT * 0.01 }}>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.023 }}>{title}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#FF5F00', fontSize: HEIGHT * 0.015 }}>{company}</Text>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.023 }}>{size}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * 0.015 }}>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.015 }}>Starting Price</Text>
                                <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.023, fontWeight: '600' }}>{rate}<Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.01, fontWeight: '400' }}>QAR</Text></Text>
                            </View>
                        </View>



                    </View>
                    <View style={{ height: Platform.OS === "android" ? HEIGHT * 0.4 : HEIGHT * 0.45, backgroundColor: '#181D23', borderBottomLeftRadius: HEIGHT * 0.01, borderBottomRightRadius: HEIGHT * 0.01 }}>
                        <View style={{ marginTop: Platform.OS === "android" ? HEIGHT * 0.04 : HEIGHT * 0.09, marginLeft: HEIGHT * 0.02 }}>
                            <Text style={{ color: 'white', fontSize: HEIGHT * 0.025 }}>FEATURES</Text>
                            <View style={{ marginTop: HEIGHT * 0.02 }}>
                                <FlatList data={cabanafeature} horizontal renderItem={({ item }) => <View style={{ height: HEIGHT * 0.045, width: WIDTH * 0.28, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', marginRight: HEIGHT * 0.02 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={item.logo} />
                                        <Text style={{ color: '#0FC1A1', marginLeft: HEIGHT * 0.01 }}>(1){item.text}</Text>
                                    </View>
                                </View>} />


                            </View>

                            <View style={{ marginTop: HEIGHT * 0.02 }}>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.025, fontWeight: '400' }}>LOCATION</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * 0.01 }}>
                                    <View style={{ height: HEIGHT * 0.04, backgroundColor: '#0E1114', width: WIDTH * 0.08, justifyContent: 'center', alignItems: 'center', borderRadius: HEIGHT * 0.004, marginTop: HEIGHT * 0.01 }}>
                                        <Image source={locationmediumlogo} />
                                    </View>
                                    <Text style={{ color: '#DBDBDB' }}>Mirqab Mall{'\n'}Al Mirqab Al Jadeed St, Doha{'\n'}Qatar</Text>
                                    <View style={{ height: HEIGHT * 0.03, backgroundColor: '#0E1114', width: WIDTH * 0.06, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.004, marginRight: HEIGHT * 0.02, marginTop: HEIGHT * 0.01 }}>
                                        <Image source={locationarrowlogo} />
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginTop: HEIGHT * 0.02 }}>
                                <Text style={{ color: '#FF5F00', fontSize: HEIGHT * 0.02 }}>Al-Rayyan Company</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * 0.01 }}>
                                    <Text style={{ color: 'white' }}>Al Mirqab Al Jadeed St, Doha{'\n'}Qatar</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ height: HEIGHT * 0.03, backgroundColor: '#0E1114', width: WIDTH * 0.06, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.004, marginRight: HEIGHT * 0.02, marginTop: HEIGHT * 0.01 }}>
                                            <Image source={messagelogo} />
                                        </View>
                                        <View style={{ height: HEIGHT * 0.03, backgroundColor: '#0E1114', width: WIDTH * 0.06, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.004, marginRight: HEIGHT * 0.02, marginTop: HEIGHT * 0.01 }}>
                                            <Image source={phonelogo} />
                                        </View>

                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>
                    <ScreenButtonComponent leftlogo={submitleftarrow} rightlogo={submitrightarrow} text={'HOME'} onPress={() => navigation.navigate('HomeScreen', { title, company, size, rate, logo })} />
                </View>


            </View>
        </View>
    )
}

export default SingleCabanaScreen