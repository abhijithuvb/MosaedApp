import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { backarrow, calendarwhitesmalllogo, locationarrowlogo, locationmediumlogo, maplogo, servicelogo1 } from '../assets'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import ScreenButtonComponent from '../components/ScreenButtonComponent'

const WashSummaryScreen = ({ navigation }) => {

    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>{/* <DrinkBoxModalComponent visible={modalVisible} setVisible={setModalVisible} buttonOnPress={() => setModalVisible(!modalVisible)} /> */}
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ flex: 1, backgroundColor: '#0FC1A1' }}>
                    <View style={{ height: HEIGHT * 0.83, backgroundColor: 'black', borderBottomLeftRadius: HEIGHT * 0.02, borderBottomRightRadius: HEIGHT * 0.02 }}>
                        <View style={{ height: HEIGHT * 0.23, backgroundColor: '#181D23', borderBottomLeftRadius: HEIGHT * 0.02, borderBottomRightRadius: HEIGHT * 0.02 }}>
                            <View style={{ marginTop: HEIGHT * 0.03 }}>
                                <HeaderComponent leftlogo={backarrow} title={"SUMMARY"} leftOnPress={() => navigation.goBack()} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: HEIGHT * 0.025, alignItems: 'center' }}>
                                <Image source={servicelogo1} />
                                <View style={{ marginLeft: -HEIGHT * 0.02 }}>
                                    <Text style={{ color: 'white', fontSize: HEIGHT * 0.021, fontWeight: '400' }}>BADRI PULLING</Text>
                                    <Text style={{ color: '#FF5F00', fontSize: HEIGHT * 0.014, marginTop: HEIGHT * 0.004 }}>4*6 CABANA</Text>
                                </View>
                                <View>

                                    <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.03, fontWeight: '700' }}>250<Text style={{ fontSize: HEIGHT * 0.012 }}>/QAR</Text></Text>
                                </View>
                            </View>
                            <View style={{ marginLeft: WIDTH * 0.045 }}>

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
                        <View style={{ height: HEIGHT * 0.33, width: WIDTH * 0.9, backgroundColor: '#181D23', marginTop: HEIGHT * 0.01, justifyContent: 'center', alignItems: 'center', borderRadius: HEIGHT * 0.01, alignSelf: 'center' }}>
                            <View style={{ marginLeft: HEIGHT * 0.01, }}>
                                <Image source={maplogo} />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * 0.01 }}>
                                    <View style={{ height: HEIGHT * 0.04, backgroundColor: '#0E1114', width: WIDTH * 0.08, justifyContent: 'center', alignItems: 'center', borderRadius: HEIGHT * 0.004, marginTop: HEIGHT * 0.01 }}>
                                        <Image source={locationmediumlogo} />
                                    </View>
                                    <Text style={{ color: '#636B74' }}>Mirqab Mall{'\n'}Al Mirqab Al Jadeed St, Doha{'\n'}Qatar</Text>
                                    <View style={{ height: HEIGHT * 0.03, backgroundColor: '#0E1114', width: WIDTH * 0.06, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.004, marginRight: HEIGHT * 0.02, marginTop: HEIGHT * 0.01 }}>
                                        <Image source={locationarrowlogo} />
                                    </View>
                                </View>

                            </View>
                        </View>
                        <View style={{ backgroundColor: '#181D23', height: HEIGHT * 0.203, marginTop: HEIGHT * 0.02, borderRadius: HEIGHT * 0.02 }}>
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
                    <ScreenButtonComponent text={'PROCEED TO PAYMENT'} onPress={() => navigation.navigate('PaymentGatewayScreen', { path: 'WashTicketScreen' })} />
                </View>

            </SafeAreaView >

        </View >
    )
}

export default WashSummaryScreen