import { View, Text, SafeAreaView, Image, FlatList, Platform } from 'react-native'
import React, { useCallback, useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { backarrow, boatlargeimage, locationarrowlogo, locationmediumlogo, squarelogo, starrating, submitleftarrow, submitrightarrow } from '../assets'
import { HEIGHT, WIDTH } from '../../Constants/Constants'
import { useRoute } from '@react-navigation/native'
import ScreenButtonComponent from '../components/ScreenButtonComponent'
import { beachImageFlatlist } from '../Arrays/Arrays'
import { ScrollView } from 'react-native-gesture-handler'

const BeachDetailsScreen = ({ navigation }) => {
    const route = useRoute()
    const { title, company, location, rate, sourceimage } = route.params
    const [scrollIndex, setScrollIndex] = useState()
    const viewabilityConfig = {
        //waitForInteraction: true,
        viewAreaCoveragePercentThreshold: 50

    }
    const handleViewableItemsChanged = useCallback(({ viewableItems }) => {
        //console.log('info', info)
        setScrollIndex(viewableItems[0].index)
    }, []);
    console.log('====================================');
    console.log(WIDTH * 0.085);
    console.log('====================================');

    return (
        <View style={{ backgroundColor: '#181D23', flex: 1 }}>

            <View style={{ flex: 1 }}>
                <View style={{ position: 'absolute', width: '100%', marginTop: Platform.OS === "android" ? HEIGHT * 0.04 : HEIGHT * 0.07, zIndex: 1 }}>
                    <HeaderComponent leftlogo={backarrow} title={'RENT'} rightlogo={squarelogo} leftOnPress={() => navigation.goBack()}
                    />
                </View>

                <View style={{ flex: 1, backgroundColor: '#0FC1A1', }}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ height: HEIGHT * 0.42, }}
                        pagingEnabled
                        horizontal
                        onViewableItemsChanged={handleViewableItemsChanged}
                        viewabilityConfig={viewabilityConfig}
                        data={beachImageFlatlist}
                        renderItem={({ item }) => <Image source={item.logo} style={{ width: WIDTH }} />} />

                    <View style={{ height: HEIGHT * 0.15, backgroundColor: '#0E1114', borderRadius: HEIGHT * 0.01, position: 'absolute', width: '100%', top: Platform.OS === "android" ? HEIGHT * 0.37 : HEIGHT * 0.37, zIndex: 1, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: HEIGHT * 0.02 }}>
                            <View style={{ backgroundColor: scrollIndex === 0 ? '#0FC1A1' : 'white', width: WIDTH * 0.02, height: HEIGHT * 0.003, marginLeft: HEIGHT * 0.008 }}></View>
                            <View style={{ backgroundColor: scrollIndex === 1 ? '#0FC1A1' : 'white', width: WIDTH * 0.02, height: HEIGHT * 0.003, marginLeft: HEIGHT * 0.008 }}></View>
                            <View style={{ backgroundColor: scrollIndex === 2 ? '#0FC1A1' : 'white', width: WIDTH * 0.02, height: HEIGHT * 0.003, marginLeft: HEIGHT * 0.008 }}></View>
                            <View style={{ backgroundColor: scrollIndex === 3 ? '#0FC1A1' : 'white', width: WIDTH * 0.02, height: HEIGHT * 0.003, marginLeft: HEIGHT * 0.008 }}></View>
                        </View>
                        <View style={{ marginTop: HEIGHT * 0.02, flexDirection: 'row', justifyContent: 'space-between', }}>
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
                    <View style={{ height: Platform.OS === "android" ? HEIGHT * 0.4 : HEIGHT * 0.47, backgroundColor: '#181D23', borderBottomLeftRadius: HEIGHT * 0.01, borderBottomRightRadius: HEIGHT * 0.01, }}>
                        <View style={{ marginTop: Platform.OS === "android" ? HEIGHT * 0.06 : HEIGHT * 0.12, marginLeft: HEIGHT * 0.02 }}>
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
                                <Text style={{ color: 'white', fontSize: 14, fontWeight: '400' }}>DETAILS</Text>
                                <ScrollView showsVerticalScrollIndicator={false} style={{ height: HEIGHT * 0.15, marginTop: HEIGHT * 0.02 }}>
                                    <Text style={{ color: '#DBDBDB', marginTop: HEIGHT * 0.02 }}> Feel the adrenaline rush and conquer the waves, or explore FX SVHO’s calm personality, when it becomes the smoothest ride you could wish for. Supercharge your adventures in the Yamaha way.{'\n\n'}
                                        From our unique, revolutionary RiDE system and lightweight NanoXcel2® hulls – to our exclusive electronic control systems – to the top range </Text>
                                </ScrollView>

                            </View>
                        </View>
                    </View>
                    <View style={{ marginBottom: WIDTH * 0.02, paddingTop: HEIGHT * 0.01 }}>
                        <ScreenButtonComponent leftlogo={submitleftarrow} rightlogo={submitrightarrow} text={'RENT NOW'} onPress={() => navigation.navigate('TerrainSummaryScreen', { title, company, location, rate, sourceimage })} />
                    </View>
                </View>


            </View>
        </View>
    )
}

export default BeachDetailsScreen