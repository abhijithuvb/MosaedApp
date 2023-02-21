import { View, Text, SafeAreaView, Image, Pressable, FlatList, Platform } from 'react-native'
import React, { useRef, useState } from 'react'
import { backarrow, backgroundsmalllogo, boatsmallimage, calendarSmalllogo, downarrow, searchlogo } from '../assets'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import { myActivityBuildArray, myActivityRentArray, myActivityServiceArray } from '../Arrays/Arrays'
import BuildComponent from '../components/BuildComponent'
import ServicesComponent from '../components/ServicesComponent'
import RentComponent from '../components/RentComponent'

const MyActivityScreen = ({ navigation }) => {



    const ar = [{ id: 1, case: 'rent' }, { id: 2, case: 'services' }, { id: 3, case: 'build' }]

    const listRef = useRef()

    const handleScroll = (index) => {
        listRef.current.scrollToIndex({ index: index, animated: true })
    }
    const [tabs, setTabs] = useState({ rent: true, services: false, build: false })
    const displayFlatlist = (type) => {

        switch (type) {
            case 'rent':
                return <FlatList style={{ height: HEIGHT * 0.75 }} data={myActivityRentArray} renderItem={({ item }) => <RentComponent bgcolor={item.bgcolor} color={item.color} status={item.status} text={item.text} />} />
            case 'services':
                return <FlatList style={{ height: HEIGHT * 0.75 }} data={myActivityServiceArray} renderItem={({ item }) => <ServicesComponent bgcolor={item.bgcolor} color={item.color} logo={item.logo} status={item.status} text={item.text} time={item.text} />} />
            case 'build':
                return <FlatList style={{ height: HEIGHT * 0.75 }} data={myActivityBuildArray} renderItem={({ item }) => <BuildComponent color={item.color} date={item.date} text={item.text} />} />
        }

    }
    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>

            <View style={{ flex: 1, marginTop: Platform.OS === "android" ? HEIGHT * 0.01 : HEIGHT * 0.05 }}>
                {/* <Image style={{ position: 'absolute', right: 0, top: HEIGHT * 0.01, tintColor: "#0E1114" }} source={backgroundsmalllogo} /> */}
                <View style={{ marginTop: HEIGHT * 0.032, }}>
                    <HeaderComponent leftOnPress={() => navigation.goBack()} title="MY ACTIVITIES" leftlogo={backarrow} rightlogo={searchlogo} />

                </View>

                <View style={{ flex: 1, backgroundColor: 'black' }}>
                    <View style={{ backgroundColor: '#181D23', height: HEIGHT * 0.08, borderRadius: HEIGHT * 0.01 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * 0.04, marginLeft: HEIGHT * 0.05, marginRight: HEIGHT * 0.05 }}>
                            <Pressable style={{ /* borderBottomColor: '#0FC1A1', borderBottomWidth: tabs.rent ? 2 : 0 */ }} onPress={() => {
                                setTabs({ ...tabs, rent: true, services: false, build: false })
                                handleScroll(0)
                            }}><Text style={{ color: tabs.rent ? "#0FC1A1" : 'white', fontSize: HEIGHT * 0.023, textAlign: 'center' }}>Rent</Text>{tabs.rent && <View style={{ borderWidth: 1, width: WIDTH * 0.22, height: HEIGHT * 0.00237, position: 'absolute', bottom: Platform.OS === "android" ? -7 : -9, left: -20, borderColor: '#0FC1A1', backgroundColor: '#0FC1A1' }}></View>}</Pressable>
                            <Pressable style={{}} onPress={() => {
                                setTabs({ ...tabs, rent: false, services: true, build: false })
                                handleScroll(1)
                            }}><Text style={{ color: tabs.services ? "#0FC1A1" : 'white', fontSize: HEIGHT * 0.023, textAlign: 'center' }}>Services</Text>{tabs.services && <View style={{ borderWidth: 1, width: WIDTH * 0.22, height: HEIGHT * 0.00237, position: 'absolute', bottom: Platform.OS === "android" ? -7 : -9, left: -4, borderColor: '#0FC1A1', backgroundColor: '#0FC1A1', }}></View>}</Pressable>
                            <Pressable style={{}} onPress={() => {
                                setTabs({ ...tabs, build: true, services: false, rent: false })
                                handleScroll(2)
                            }}><Text style={{ color: tabs.build ? "#0FC1A1" : 'white', fontSize: HEIGHT * 0.023, textAlign: 'center' }}>Build</Text>{tabs.build && <View style={{ borderWidth: 1, width: WIDTH * 0.22, height: HEIGHT * 0.00237, position: 'absolute', bottom: Platform.OS === "android" ? -7 : -9, left: -19, borderColor: '#0FC1A1', backgroundColor: '#0FC1A1' }}></View>}</Pressable>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <FlatList showsHorizontalScrollIndicator={false} scrollEnabled={false} ref={listRef} horizontal style={{ height: HEIGHT * 0.75 }} data={ar} renderItem={({ item }) => {
                            return <View style={{ height: HEIGHT * 0.75 }}>
                                {displayFlatlist(item.case)}
                            </View>
                        }} />
                    </View>

                </View>

            </View>
        </View>
    )
}

export default MyActivityScreen