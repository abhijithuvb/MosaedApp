import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { backarrow, boatlargeimage, locationarrowlogo, locationmediumlogo, squarelogo, starrating, submitleftarrow, submitrightarrow } from '../assets'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import { useRoute } from '@react-navigation/native'
import ScreenButtonComponent from '../components/ScreenButtonComponent'

const BeachDetailsScreen = ({ navigation }) => {
    const route = useRoute()
    const { title, company, location, rate, sourceimage } = route.params

    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>

            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ position: 'absolute', width: '100%', marginTop: HEIGHT * 0.09, zIndex: 1 }}>
                    <HeaderComponent leftlogo={backarrow} title={'RENT'} rightlogo={squarelogo} leftOnPress={() => navigation.goBack()}
                    />
                </View>

                <View style={{ flex: 1, backgroundColor: '#0FC1A1' }}>
                    <Image source={boatlargeimage} style={{ width: '100%' }} />
                    <View style={{ height: HEIGHT * 0.16, backgroundColor: '#0E1114', borderRadius: HEIGHT * 0.01, position: 'absolute', width: '100%', top: HEIGHT * 0.31, zIndex: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: HEIGHT * 0.02 }}>
                            <View style={{ backgroundColor: 'white', width: WIDTH * 0.02, height: HEIGHT * 0.003, marginLeft: HEIGHT * 0.008 }}></View>
                            <View style={{ backgroundColor: 'white', width: WIDTH * 0.02, height: HEIGHT * 0.003, marginLeft: HEIGHT * 0.008 }}></View>
                            <View style={{ backgroundColor: 'white', width: WIDTH * 0.02, height: HEIGHT * 0.003, marginLeft: HEIGHT * 0.008 }}></View>
                            <View style={{ backgroundColor: 'white', width: WIDTH * 0.02, height: HEIGHT * 0.003, marginLeft: HEIGHT * 0.008 }}></View>
                        </View>
                        <View style={{ marginTop: HEIGHT * 0.02, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ marginLeft: WIDTH * 0.05 }}>
                                <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.021, fontWeight: '400' }}>{title}</Text>
                                <Image source={starrating} style={{ marginTop: HEIGHT * 0.004 }} />
                                <Text style={{ color: '#FF5F00', fontSize: HEIGHT * 0.014, marginTop: HEIGHT * 0.004 }}>{company}</Text>
                                <View style={{ flexDirection: 'row', marginTop: HEIGHT * 0.004 }}>
                                    <Text style={{ color: '#636B74', fontSize: HEIGHT * 0.014 }}>2021 Cruising,2021 Yamaha Waverunners</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', marginRight: WIDTH * 0.05 }}>
                                <Text style={{ color: '#0FC1A1', textAlign: 'right', fontSize: HEIGHT * 0.03, fontWeight: '700' }}>{rate}</Text>
                                <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.015, }}>QAR/hour</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ height: HEIGHT * 0.4, backgroundColor: '#181D23', borderBottomLeftRadius: HEIGHT * 0.01, borderBottomRightRadius: HEIGHT * 0.01 }}>
                        <View style={{ marginTop: HEIGHT * 0.06, marginLeft: HEIGHT * 0.02 }}>
                            <Text style={{ color: 'white', fontSize: HEIGHT * 0.025 }}>PICK UP LOCATION</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * 0.01 }}>
                                <View style={{ height: HEIGHT * 0.04, backgroundColor: '#0E1114', width: WIDTH * 0.08, justifyContent: 'center', alignItems: 'center', borderRadius: HEIGHT * 0.004, marginTop: HEIGHT * 0.01 }}>
                                    <Image source={locationmediumlogo} />
                                </View>
                                <Text style={{ color: '#DBDBDB' }}>Mirqab Mall{'\n'}Al Mirqab Al Jadeed St, Doha{'\n'}Qatar</Text>
                                <View style={{ height: HEIGHT * 0.03, backgroundColor: '#0E1114', width: WIDTH * 0.06, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.004, marginRight: HEIGHT * 0.02, marginTop: HEIGHT * 0.01 }}>
                                    <Image source={locationarrowlogo} />
                                </View>
                            </View>
                            <View style={{ marginTop: HEIGHT * 0.01 }}>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.025, fontWeight: '400' }}>DETAILS</Text>
                                <Text style={{ color: '#DBDBDB', marginTop: HEIGHT * 0.02 }}> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,{'\n\n'}
                                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
                            </View>
                        </View>
                    </View>
                    <ScreenButtonComponent leftlogo={submitleftarrow} rightlogo={submitrightarrow} text={'RENT NOW'} onPress={() => navigation.navigate('TerrainSummaryScreen', { title, company, location, rate, sourceimage })} />
                </View>


            </SafeAreaView>
        </View>
    )
}

export default BeachDetailsScreen