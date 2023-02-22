import { View, Text, SafeAreaView, Image, Platform } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { backarrow, calendarwhitesmalllogo, dropofflocationlogo, locationarrowlogo, locationmediumlogo, maplogo, pickuplogo, towingsmalllogo } from '../assets'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import ScreenButtonComponent from '../components/ScreenButtonComponent'
import { useRoute } from '@react-navigation/native'

const TowingLocationScreen = ({ navigation }) => {
    const Route = useRoute()
    const { serviceStatus } = Route.params
    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ marginTop: Platform.OS === "android" ? HEIGHT * 0.035 : HEIGHT * 0.08 }}>
                    <HeaderComponent leftOnPress={() => navigation.goBack()} leftlogo={backarrow} title={'LOCATIONS'} />
                </View>
                <View style={{ flex: 1, backgroundColor: '#0FC1A1' }}>
                    <View style={{ height: Platform.OS === "android" ? HEIGHT * 0.83 : HEIGHT * 0.8, borderRadius: HEIGHT * 0.02, backgroundColor: 'black' }}>
                        <View style={{ backgroundColor: '#181D23', height: HEIGHT * 0.19, borderBottomLeftRadius: HEIGHT * 0.02, borderBottomRightRadius: HEIGHT * 0.02 }}>
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
                        <Text style={{ color: 'white', fontSize: HEIGHT * 0.025, marginLeft: HEIGHT * 0.02, marginTop: HEIGHT * 0.02 }}>ENTER LOCATION</Text>
                        <View style={{ height: HEIGHT * 0.3, width: WIDTH * 0.9, backgroundColor: '#181D23', marginTop: HEIGHT * 0.02, alignItems: 'center', borderRadius: HEIGHT * 0.01, alignSelf: 'center' }}>
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

                    </View>
                    <View>
                        <ScreenButtonComponent text={'VIEW SERVICES'} onPress={() => navigation.navigate('WashServicesScreen', { serviceStatus })} />
                    </View>

                </View>
            </View>
        </View>
    )
}

export default TowingLocationScreen