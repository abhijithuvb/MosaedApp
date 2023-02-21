import { View, Text, SafeAreaView, Image, FlatList, Platform } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { backarrow, boatimage1, calendarSmalllogo, locationsmalllogo, searchlogo, starrating } from '../assets'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import { useRoute } from '@react-navigation/native'
import BeachListComponent from '../components/BeachListComponent'
import { beachVehicleList } from '../Arrays/Arrays'

const BeachListScreen = ({ navigation }) => {
    const route = useRoute()
    const date = route.params.selectedDate.date
    const time = route.params.selectedDate.time
    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>
            <View style={{ flex: 1, marginTop: Platform.OS === "android" ? HEIGHT * 0.04 : HEIGHT * 0.08 }}>
                <View>
                    <HeaderComponent leftlogo={backarrow} title='BEACH' rightlogo={searchlogo} leftOnPress={() => navigation.goBack()} />
                </View>
                <View style={{ flex: 1, backgroundColor: 'black' }}>
                    <View style={{
                        height: HEIGHT * 0.12,
                        borderBottomLeftRadius: HEIGHT * 0.015,
                        borderBottomRightRadius: HEIGHT * 0.015,
                        backgroundColor: '#181D23',
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ backgroundColor: 'black', marginLeft: WIDTH * 0.03, marginTop: HEIGHT * 0.05, height: HEIGHT * 0.04, width: WIDTH * 0.09, justifyContent: 'center', alignItems: 'center', borderRadius: HEIGHT * 0.005 }}>
                                <Image source={calendarSmalllogo} />
                            </View>

                            <View style={{ marginLeft: WIDTH * 0.03, marginTop: HEIGHT * 0.053 }}>
                                <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.013 }}>{date.toLocaleString()}</Text>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.014, marginTop: HEIGHT * 0.005 }}>{time}</Text>
                            </View>

                        </View>






                    </View>
                    <View style={{ alignItems: 'center', }}>

                        <FlatList showsVerticalScrollIndicator={false} style={{ height: Platform.OS === "android" ? HEIGHT * 0.79 : HEIGHT * 0.74 }} data={beachVehicleList} renderItem={({ item }) => <BeachListComponent title={item.title} company={item.company} location={item.location} rate={item.rate} sourceimage={item.sourceimage} />} />

                    </View>
                </View>
            </View>
        </View>
    )
}

export default BeachListScreen