import { View, Text, SafeAreaView, Image, Pressable, Platform } from 'react-native'
import React, { useState } from 'react'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import HeaderComponent from '../components/HeaderComponent'
import { backarrow, barcodesmalllogo, boatsmallimage, calendarSmalllogo, calendarwhitesmalllogo, locationarrowlogo, locationmediumlogo, plusicon } from '../assets'
import { useRoute } from '@react-navigation/native'
import { color } from 'react-native-reanimated'
import ScreenButtonComponent from '../components/ScreenButtonComponent'
import DrinkBoxModalComponent from '../components/DrinkBoxModalComponent'
import QrButtonComponent from '../components/QrButtonComponent'

const BookedTicketScreen = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>
            {/* <View style={{ flex: 1 }}> */}

            <View style={{ flex: 1, backgroundColor: '#0FC1A1' }}>
                <View style={{ height: Platform.OS === "android" ? HEIGHT * 0.9 : HEIGHT * 0.9, backgroundColor: '#181D23', borderBottomLeftRadius: HEIGHT * 0.02, borderBottomRightRadius: HEIGHT * 0.02, }}>
                    <View style={{ height: HEIGHT * 0.37, backgroundColor: '#181D23', borderBottomLeftRadius: HEIGHT * 0.02, borderBottomRightRadius: HEIGHT * 0.02, marginTop: Platform.OS === "android" ? HEIGHT * 0.02 : HEIGHT * 0.01, }}>
                        <View style={{ marginTop: Platform.OS === "android" ? HEIGHT * 0.01 : HEIGHT * 0.08, backgroundColor: '#181D23' }}>
                            <HeaderComponent leftlogo={backarrow} title={"BOOKED TICKET"} leftOnPress={() => navigation.goBack()} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: HEIGHT * 0.02 }}>
                            <Image source={boatsmallimage} />
                            <View style={{ marginLeft: -HEIGHT * 0.02 }}>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.021, fontWeight: '400' }}>2021 SVHO</Text>
                                <Text style={{ color: '#FF5F00', fontSize: HEIGHT * 0.014, marginTop: HEIGHT * 0.004 }}>Yamaha</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#0FC1A1', textAlign: 'right', fontSize: HEIGHT * 0.03, fontWeight: '700' }}>50</Text>
                                <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.015, }}>QAR/hour</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: HEIGHT * 0.02, marginLeft: HEIGHT * 0.02 }}>
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

                        </View>
                        <View style={{ marginLeft: WIDTH * 0.045, marginTop: HEIGHT * 0.01 }}>
                            <Text style={{ color: 'white', fontSize: HEIGHT * 0.022 }}>TIME SLOT</Text>
                            <View style={{ flexDirection: 'row', marginTop: HEIGHT * 0.02 }}>
                                <View style={{ height: HEIGHT * 0.04, width: WIDTH * 0.08, backgroundColor: '#0E1114', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={calendarwhitesmalllogo} />

                                </View>
                                <View style={{ marginLeft: HEIGHT * 0.02, }}>
                                    <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.014 }}>23, December,2020</Text>
                                    <Text style={{ color: 'white', fontSize: HEIGHT * 0.014 }}>09:00am</Text>
                                </View>
                            </View>

                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: HEIGHT * 0.04 }}>
                        <View style={{ marginLeft: WIDTH * 0.05 }}>
                            <Text style={{ color: 'white', fontSize: HEIGHT * 0.022 }}>DRINKS BOX</Text>
                            <Text style={{ marginTop: HEIGHT * 0.004, color: '#0FC1A1', fontSize: HEIGHT * 0.015 }}>No Items Selected</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: HEIGHT * 0.03 }}>
                        <View style={{ marginLeft: WIDTH * 0.05, }}>
                            <Text style={{ color: 'white', fontSize: HEIGHT * 0.022 }}>HOME BUSINESSES</Text>
                            <Text style={{ marginTop: HEIGHT * 0.004, color: '#0FC1A1', fontSize: HEIGHT * 0.015 }}>No Items Selected</Text>
                        </View>

                    </View>
                    <View style={{ backgroundColor: 'black', flex: 1, marginTop: HEIGHT * 0.03, borderRadius: HEIGHT * 0.02 }}>
                        <View style={{ marginTop: HEIGHT * 0.02, marginLeft: HEIGHT * 0.02 }}>
                            <Text style={{ color: 'white', fontSize: HEIGHT * 0.025 }}>PAYMENTS</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * 0.01 }}>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.02 }}>Rent</Text>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.02, marginRight: HEIGHT * 0.02 }}>150 QAR</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * 0.01 }}>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.02 }}>Drinks Box</Text>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.02, marginRight: HEIGHT * 0.02 }}>150 QAR</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * 0.01 }}>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.02 }}>Home Businesses</Text>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.02, marginRight: HEIGHT * 0.02 }}>150 QAR</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * 0.01 }}>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.02 }}>Fee</Text>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.02, marginRight: HEIGHT * 0.02 }}>150 QAR</Text>
                            </View>
                        </View>
                        <View style={{ borderTopColor: '#636B74', borderTopWidth: 0.2, margin: HEIGHT * 0.02 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * 0.015 }}>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.025, fontWeight: '600' }}>Total</Text>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.035, fontWeight: '600' }}>250<Text style={{ fontSize: HEIGHT * 0.015 }}>/ QAR</Text> </Text>
                            </View>
                        </View>


                    </View>

                </View>
                {/* <ScreenButtonComponent text={'Home'} onPress={() => navigation.navigate('HomeScreen')} /> */}
                <QrButtonComponent onPress={() => navigation.navigate('HomeScreen')} logo={barcodesmalllogo} text={'SCAN BAR CODE'} />
            </View>

            {/* </View > */}

        </View >
    )
}

export default BookedTicketScreen