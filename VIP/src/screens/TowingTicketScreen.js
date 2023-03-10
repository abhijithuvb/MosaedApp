import { View, Text, SafeAreaView, Image, Platform } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { backarrow, barcodesmalllogo, calendarwhitesmalllogo, dropofflocationlogo, locationarrowlogo, locationmediumlogo, maplogo, pickuplogo, towingsmalllogo } from '../assets'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import ScreenButtonComponent from '../components/ScreenButtonComponent'
import { useRoute } from '@react-navigation/native'
import QrButtonComponent from '../components/QrButtonComponent'

const TowingTicketScreen = ({ navigation }) => {
    const Route = useRoute()
    // const { serviceStatus } = Route.params
    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ marginTop: Platform.OS === "android" ? HEIGHT * 0.035 : HEIGHT * 0.08 }}>
                    <HeaderComponent leftOnPress={() => navigation.goBack()} leftlogo={backarrow} title={'LOCATIONS'} />
                </View>
                <View style={{ flex: 1, backgroundColor: '#0FC1A1' }}>
                    <View style={{ height: Platform.OS === "android" ? HEIGHT * 0.84 : HEIGHT * 0.805, borderRadius: HEIGHT * 0.02, backgroundColor: 'black' }}>
                        <View style={{ backgroundColor: '#181D23', height: HEIGHT * 0.18, borderBottomLeftRadius: HEIGHT * 0.02, borderBottomRightRadius: HEIGHT * 0.02 }}>
                            <View style={{ flexDirection: 'row', marginTop: HEIGHT * 0.03, marginLeft: HEIGHT * 0.03 }}>
                                <View style={{ justifyContent: 'center' }}>
                                    <Image source={towingsmalllogo} />
                                </View>

                                <View style={{ marginLeft: HEIGHT * 0.03 }}>
                                    <Text style={{ color: 'white', fontSize: HEIGHT * 0.021, fontWeight: '400' }}>TOWING SERVICE</Text>
                                    <Text style={{ color: '#FF5F00', fontSize: HEIGHT * 0.014, marginTop: HEIGHT * 0.004 }}>3.5*6 M2</Text>
                                </View>

                            </View>
                            <View style={{ marginLeft: WIDTH * 0.05, marginTop: HEIGHT * 0.02 }}>

                                <View style={{ flexDirection: 'row', marginTop: HEIGHT * 0.02 }}>
                                    <View style={{ height: HEIGHT * 0.04, width: WIDTH * 0.08, backgroundColor: '#0E1114', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={calendarwhitesmalllogo} />

                                    </View>
                                    <View style={{ marginLeft: HEIGHT * 0.02 }}>
                                        <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.014 }}>23, December,2020</Text>
                                        <Text style={{ color: 'white', fontSize: HEIGHT * 0.014 }}>09:00am</Text>
                                    </View>
                                </View>

                            </View>

                        </View>
                        <Text style={{ color: 'white', fontSize: HEIGHT * 0.025, marginLeft: HEIGHT * 0.02, marginTop: HEIGHT * 0.01 }}>ENTER LOCATION</Text>
                        <View style={{ height: HEIGHT * 0.3, width: WIDTH * 0.9, backgroundColor: '#181D23', marginTop: HEIGHT * 0.01, alignItems: 'center', borderRadius: HEIGHT * 0.01, alignSelf: 'center' }}>
                            <View style={{ marginLeft: HEIGHT * 0.01, flexDirection: 'row', marginTop: HEIGHT * 0.02 }}>
                                <View>
                                    <Image source={pickuplogo} />
                                </View>
                                <View style={{ marginLeft: HEIGHT * 0.02 }}>
                                    <Text style={{ color: 'white', fontSize: HEIGHT * 0.024 }}>PICK UP</Text>
                                    <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.015, marginTop: HEIGHT * 0.02 }}>
                                        Mirqab Mall{'\n'}Al Mirqab Al Jadeed St, Doha{'\n'}Qatar
                                    </Text>
                                </View>
                                <View style={{ justifyContent: 'flex-end', marginLeft: HEIGHT * 0.06, marginBottom: HEIGHT * 0.01 }}>
                                    <View style={{ height: HEIGHT * 0.03, backgroundColor: '#0E1114', width: WIDTH * 0.06, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.004, marginRight: HEIGHT * 0.02, marginTop: HEIGHT * 0.01 }}>
                                        <Image source={locationarrowlogo} />
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginLeft: HEIGHT * 0.01, flexDirection: 'row', marginTop: HEIGHT * 0.05 }}>
                                <View>
                                    <Image source={dropofflocationlogo} />
                                </View>
                                <View style={{ marginLeft: HEIGHT * 0.02 }}>
                                    <Text style={{ color: 'white', fontSize: HEIGHT * 0.024 }}>DROPOFF</Text>
                                    <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.015, marginTop: HEIGHT * 0.02 }}>
                                        Mirqab Mall{'\n'}Al Mirqab Al Jadeed St, Doha{'\n'}Qatar
                                    </Text>
                                </View>
                                <View style={{ justifyContent: 'flex-end', marginLeft: HEIGHT * 0.06, marginBottom: HEIGHT * 0.01 }}>
                                    <View style={{ height: HEIGHT * 0.03, backgroundColor: '#0E1114', width: WIDTH * 0.06, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.004, marginRight: HEIGHT * 0.02, marginTop: HEIGHT * 0.01 }}>
                                        <Image source={locationarrowlogo} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#181D23', height: Platform.OS === "android" ? HEIGHT * 0.236 : HEIGHT * 0.223, marginTop: Platform.OS === "android" ? HEIGHT * 0.07 : HEIGHT * 0.05, borderRadius: HEIGHT * 0.02 }}>
                            <View style={{ marginTop: HEIGHT * 0.02, marginLeft: HEIGHT * 0.02 }}>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.025 }}>PAYMENTS</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * 0.01 }}>
                                    <Text style={{ color: '#636B74', fontSize: HEIGHT * 0.02 }}>Rent</Text>
                                    <Text style={{ color: '#636B74', fontSize: HEIGHT * 0.02, marginRight: HEIGHT * 0.02 }}>150 QAR</Text>
                                </View>


                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * 0.01 }}>
                                    <Text style={{ color: '#636B74', fontSize: HEIGHT * 0.02 }}>Fee</Text>
                                    <Text style={{ color: '#636B74', fontSize: HEIGHT * 0.02, marginRight: HEIGHT * 0.02 }}>150 QAR</Text>
                                </View>
                            </View>
                            <View style={{ borderTopColor: '#636B74', borderTopWidth: 0.2, margin: HEIGHT * 0.02 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * 0.01 }}>
                                    <Text style={{ color: 'white', fontSize: HEIGHT * 0.025, fontWeight: '600' }}>Total</Text>
                                    <Text style={{ color: 'white', fontSize: HEIGHT * 0.035, fontWeight: '600', color: '#0FC1A1' }}>250<Text style={{ fontSize: HEIGHT * 0.015, }}>/ QAR</Text> </Text>
                                </View>
                            </View>


                        </View>

                    </View>
                    <View>
                        {/* <ScreenButtonComponent text={'HOME'} onPress={() => navigation.navigate('HomeScreen')} /> */}
                        <QrButtonComponent onPress={() => navigation.navigate('HomeScreen')} logo={barcodesmalllogo} text={'SCAN BAR CODE'} />
                    </View>

                </View>
            </View>
        </View>
    )
}

export default TowingTicketScreen