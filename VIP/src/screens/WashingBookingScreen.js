import { View, Text, SafeAreaView, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import CalendarStrip from 'react-native-calendar-strip';

import HeaderComponent from '../components/HeaderComponent';
import { HEIGHT, WIDTH } from '../../Constants/Constants';
import { backarrow, calendarleftlogo, calendarleftlogocontainer, calendarrightlogo, calendarrightlogocontainer, submitleftarrow, submitrightarrow } from '../assets';
import { Pressable } from 'react-native';
import { washingTime } from '../Arrays/Arrays';
import { useRoute } from '@react-navigation/native';
import ScreenButtonComponent from '../components/ScreenButtonComponent';
import Ionicons from 'react-native-vector-icons/Ionicons'

const WashingBookingScreen = ({ navigation }) => {
    const Route = useRoute()
    const { serviceStatus } = Route.params

    const [washTiming, setWashTiming] = useState({
        timing: '', date: '', selectedIndex: ''
    })
    const handleSubmit = () => {
        navigation.navigate('WashCabanSCreen', { serviceStatus })
    }
    console.log("washtiming", washTiming);
    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ marginTop: HEIGHT * 0.025 }}>
                    <HeaderComponent
                        leftOnPress={() => navigation.goBack()}
                        title={serviceStatus.washing ? "WASHING" : "TOWING"}
                        leftlogo={backarrow}
                    // rightlogo={searchlogo}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        // height: 100,
                        // width: '100%',
                        backgroundColor: '#0FC1A1',
                    }}>
                    <View
                        style={{
                            height: HEIGHT * 0.78,
                            backgroundColor: 'black',
                            borderBottomLeftRadius: HEIGHT * 0.015,
                            borderBottomRightRadius: HEIGHT * 0.015,
                        }}>
                        <View
                            style={{
                                height: HEIGHT * 0.18,
                                borderBottomLeftRadius: HEIGHT * 0.015,
                                borderBottomRightRadius: HEIGHT * 0.015,
                                backgroundColor: '#181D23',
                            }}>
                            <View>
                                <CalendarStrip style={{ height: HEIGHT * 0.175, paddingTop: 20, paddingBottom: 10 }}
                                    calendarHeaderStyle={{ color: 'white', marginTop: HEIGHT * 0.02, }}
                                    dateNameStyle={{ color: 'white', marginTop: HEIGHT * 0.01, marginBottom: HEIGHT * 0.01 }}
                                    dateNumberStyle={{ color: 'white', marginTop: HEIGHT * 0.01 }}
                                    dayContainerStyle={{ marginTop: HEIGHT * 0.03, marginTop: HEIGHT * 0.02 }}
                                    highlightDateContainerStyle={{ backgroundColor: '#0FC1A1', borderRadius: HEIGHT * 0.01 }}
                                    iconLeft={calendarleftlogocontainer}
                                    iconLeftStyle={{ position: 'absolute', top: -HEIGHT * 0.073, left: HEIGHT * 0.02 }}
                                    iconRight={calendarrightlogocontainer}
                                    iconRightStyle={{ position: 'absolute', top: -HEIGHT * 0.073, right: HEIGHT * 0.02 }}
                                    onDateSelected={(date) => setWashTiming({ ...washTiming, date: date })}
                                />
                            </View>

                        </View>
                        <View style={{ marginLeft: WIDTH * 0.08, marginTop: HEIGHT * 0.02, /* marginBottom: HEIGHT * 0.01 */ }}>
                            <Text style={{ color: 'white', fontSize: HEIGHT * 0.023 }}>Select Time</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <FlatList data={washingTime} renderItem={({ item, index }) => <Pressable onPress={() => {

                                setWashTiming({ ...washTiming, time: item.timing, selectedIndex: index })
                                console.log("index", index)
                            }} style={{ height: HEIGHT * 0.11, width: WIDTH * 0.9, backgroundColor: '#181D23', marginTop: HEIGHT * 0.017, justifyContent: 'center', borderRadius: HEIGHT * 0.005, }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: HEIGHT * 0.03 }}>
                                    <View>
                                        <Text style={{ color: 'white', fontSize: HEIGHT * 0.023 }}>MORNING</Text>
                                        <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.018 }}>7:00 am to 12:00pm</Text>
                                    </View>
                                    <View style={{ height: HEIGHT * 0.029, width: WIDTH * 0.06, borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.03, backgroundColor: washTiming.selectedIndex === index ? '#0FC1A1' : '#181D23', justifyContent: 'center', alignItems: 'center' }}>{washTiming.selectedIndex === index ? <Ionicons name='checkmark' /> : ''}</View>
                                </View>

                            </Pressable>} />
                        </View>
                    </View>
                    <ScreenButtonComponent leftlogo={submitleftarrow} rightlogo={submitrightarrow} text={'SUBMIT'} onPress={() => handleSubmit()} />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default WashingBookingScreen