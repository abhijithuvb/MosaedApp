import { View, Text, SafeAreaView, Image, FlatList, Pressable } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { HEIGHT, WIDTH } from '../../../Constants/Constants'
import HeaderComponent from '../../components/HeaderComponent'
import { backarrow, cabansizelogo, locationarrowlogo, locationmediumlogo, maplogo, progresslogo1 } from '../../assets'
import TextInputComponent from '../../components/TextInputComponent'
import ScreenButtonComponent from '../../components/ScreenButtonComponent'
import { useRoute } from '@react-navigation/native'
import { bathroom, bathroomsize, condition, customDetails, floorDetails, floorDetsils, hook, lifters, outerCover, wall, wardrobe, wardrobeDetails, waterTank, windowshutter, windowsize } from '../../Arrays/Arrays'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProgressCircleComponent from '../../components/Cabanas/ProgressCircleComponent'
import NormalCircleProgressComponent from '../../components/Cabanas/NormalCircleProgressComponent'

const CustomCabanaScreen = ({ navigation }) => {

    const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,]
    const route = useRoute()
    const { screenData } = route.params
    const ref = useRef(null)
    const [scrollIndex, setScrollIndex] = useState(0)
    console.log('scrollindex==>>', scrollIndex);

    const scrollFunction = (index) => {
        console.log('ind=>', index)
        ref.current.scrollToIndex({ animated: true, index: index + 1 })
    }
    const minusScroolFunction = index => {
        ref.current.scrollToIndex({ animated: true, index: index - 1 })
    }
    const viewabilityConfig = {
        //waitForInteraction: true,
        viewAreaCoveragePercentThreshold: 50

    }

    const handleViewableItemsChanged = useCallback(({ viewableItems }) => {
        //console.log('info', info)
        setScrollIndex(viewableItems[0].index)
    }, []);

    const titleDetails = [
        { title: 'CABANA SIZE', percentage: 8 },
        { title: 'BATHROOM SIZE', percentage: 14 },
        { title: 'ROOM FLOOR', percentage: 23 },
        { title: 'WARDROBE', percentage: 31 },
        { title: 'THE WALL', percentage: 39 },
        { title: 'WINDOW SIZE', percentage: 46 },
        { title: 'WINDOW SHUTTERS', percentage: 53 },
        { title: 'LIFTERS', percentage: 60 },
        { title: 'BATHROOM TYPE', percentage: 68 },
        { title: 'CONDITION', percentage: 76 },
        { title: 'OUTER COVER', percentage: 84 },
        { title: 'WATER TANK', percentage: 93 },
        { title: 'TOW HOOK', percentage: 100 },
        { title: 'NAME OF CUSTOMIZATION', percentage: 100 },
    ]

    const [bathroomSizeDetails, setbathroomSizeDetails] = useState({ index: '', value: '' })
    const [roomFloorDetails, setRoomFloorDetails] = useState({ index: '', value: '' })
    const [wardrobeDetails, setWardrobeDetails] = useState({ index: '', value: '' })
    const [wallDetails, setWallDetails] = useState({ index: '', value: '' })
    const [windowSizeDetails, setWindowSizeDetails] = useState({ index: '', value: '' })
    const [windowShuttereDetails, setWindowShutterDetails] = useState({ index: '', value: '' })
    const [lifterDetails, setLifterDetails] = useState({ index: '', value: '' })
    const [bathroomType, setBathroomtype] = useState({ index: '', value: '' })
    const [airCondition, setAirCondition] = useState({ index: '', value: '' })
    const [outerCoverDetails, setOuterCoverDetails] = useState({ index: '', value: '' })
    const [waterTankdetals, setwatertankdetails] = useState({ index: '', value: '' })
    const [hookDetails, setHookDetails] = useState({ index: '', value: '' })
    const [customization, setCustomization] = useState({ value: '', location: '' })
    console.log(hookDetails)
    const handleComponent = (option, index) => {

        switch (option) {
            case 'cabansize':
                return <View>
                    <TextInputComponent label={'Length'} />
                    <TextInputComponent label={'Width'} />
                </View>
            case 'bathroomsize':
                return <FlatList data={bathroomsize} renderItem={({ item, index }) => <Pressable onPress={() => setbathroomSizeDetails({ ...bathroomSizeDetails, index: index, value: item.size })}>
                    <View style={{ height: HEIGHT * 0.09, width: WIDTH * 0.9, backgroundColor: 'black', borderRadius: HEIGHT * 0.01, justifyContent: 'center', marginTop: HEIGHT * 0.02 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: HEIGHT * 0.02 }}>
                            <View>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.022 }}>{item.title}</Text>
                                <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.017, marginTop: HEIGHT * 0.007 }}>{item.size}</Text>
                            </View>
                            <View style={{ height: HEIGHT * 0.033, width: WIDTH * 0.07, borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.3, backgroundColor: index === bathroomSizeDetails.index ? '#0FC1A1' : 'black', justifyContent: 'center', alignItems: 'center' }}>
                                {index === bathroomSizeDetails.index && <Ionicons name='checkmark' />}
                            </View>
                        </View>
                    </View>
                </Pressable>} />
            case 'roomfloor':
                return <FlatList data={floorDetails} renderItem={({ item, index }) => <Pressable onPress={() => setRoomFloorDetails({ ...roomFloorDetails, index: index, value: item.title })}>
                    <View style={{ height: HEIGHT * 0.075, width: WIDTH * 0.9, backgroundColor: 'black', borderRadius: HEIGHT * 0.01, justifyContent: 'center', marginTop: HEIGHT * 0.01 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: HEIGHT * 0.02 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={item.logo} />
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.022, marginLeft: HEIGHT * 0.02 }}>{item.title}</Text>

                            </View>
                            <View style={{ height: HEIGHT * 0.033, width: WIDTH * 0.07, borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.3, backgroundColor: index === roomFloorDetails.index ? '#0FC1A1' : 'black', justifyContent: 'center', alignItems: 'center' }}>
                                {index === roomFloorDetails.index && <Ionicons name='checkmark' />}
                            </View>
                        </View>
                    </View>
                </Pressable>} />
            case 'wardrobe':
                return <FlatList data={wardrobe} renderItem={({ item, index }) => <Pressable onPress={() => setWardrobeDetails({ ...wardrobeDetails, index: index, value: item.title })}>
                    <View style={{ height: HEIGHT * 0.08, width: WIDTH * 0.9, backgroundColor: 'black', borderRadius: HEIGHT * 0.01, justifyContent: 'center', marginTop: HEIGHT * 0.01 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: HEIGHT * 0.02 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={item.logo} />
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.022, marginLeft: HEIGHT * 0.02 }}>{item.title}</Text>

                            </View>
                            <View style={{ height: HEIGHT * 0.033, width: WIDTH * 0.07, borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.3, backgroundColor: index === wardrobeDetails.index ? '#0FC1A1' : 'black', justifyContent: 'center', alignItems: 'center' }}>
                                {index === wardrobeDetails.index && <Ionicons name='checkmark' />}
                            </View>
                        </View>
                    </View>
                </Pressable>} />
            case 'thewall':
                return <FlatList data={wall} renderItem={({ item, index }) => <Pressable onPress={() => setWallDetails({ ...wallDetails, index: index, value: item.title })}>
                    <View style={{ height: HEIGHT * 0.075, width: WIDTH * 0.9, backgroundColor: 'black', borderRadius: HEIGHT * 0.01, justifyContent: 'center', marginTop: HEIGHT * 0.01 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: HEIGHT * 0.02 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={item.logo} />
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.022, marginLeft: HEIGHT * 0.02 }}>{item.title}</Text>

                            </View>
                            <View style={{ height: HEIGHT * 0.033, width: WIDTH * 0.07, borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.3, backgroundColor: index === roomFloorDetails.index ? '#0FC1A1' : 'black', justifyContent: 'center', alignItems: 'center' }}>
                                {index === roomFloorDetails.index && <Ionicons name='checkmark' />}
                            </View>
                        </View>
                    </View>
                </Pressable>} />
            case 'windowsize':
                return <FlatList data={windowsize} renderItem={({ item, index }) => <Pressable onPress={() => setWindowSizeDetails({ ...windowSizeDetails, index: index, value: item.size })}>
                    <View style={{ height: HEIGHT * 0.09, width: WIDTH * 0.9, backgroundColor: 'black', borderRadius: HEIGHT * 0.01, justifyContent: 'center', marginTop: HEIGHT * 0.02 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: HEIGHT * 0.02 }}>
                            <View>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.022 }}>{item.title}</Text>
                                <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.017, marginTop: HEIGHT * 0.007 }}>{item.size}</Text>
                            </View>
                            <View style={{ height: HEIGHT * 0.033, width: WIDTH * 0.07, borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.3, backgroundColor: index === windowSizeDetails.index ? '#0FC1A1' : 'black', justifyContent: 'center', alignItems: 'center' }}>
                                {index === windowSizeDetails.index && <Ionicons name='checkmark' />}
                            </View>
                        </View>
                    </View>
                </Pressable>} />
            case 'windowshutters':
                return <FlatList
                    contentContainerStyle={{ flexDirection: 'row' }}
                    // horizontal 
                    data={windowshutter} renderItem={({ item, index }) => <Pressable style={{}} onPress={() => setWindowShutterDetails({ ...windowShuttereDetails, index: index, value: item.size })}>
                        <View style={{ height: HEIGHT * 0.15, width: WIDTH * 0.4, backgroundColor: 'black', borderRadius: HEIGHT * 0.01, marginTop: HEIGHT * 0.02, justifyContent: 'center', marginLeft: HEIGHT * 0.01 }}>
                            <View style={{ height: HEIGHT * 0.033, width: WIDTH * 0.07, borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.3, backgroundColor: index === windowSizeDetails.index ? '#0FC1A1' : 'black', justifyContent: 'center', alignItems: 'center', marginLeft: HEIGHT * 0.02 }}>
                                {index === windowSizeDetails.index && <Ionicons name='checkmark' />}
                            </View>
                            <View style={{ margin: HEIGHT * 0.02 }}>
                                <View>
                                    <Text style={{ color: 'white', fontSize: HEIGHT * 0.02 }}>{item.title}</Text>
                                    <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.013, marginTop: HEIGHT * 0.007 }}>{item.description}</Text>
                                </View>

                            </View>
                        </View>
                    </Pressable >} />
            case 'lifters':
                return <FlatList
                    contentContainerStyle={{ flexDirection: 'row' }}
                    // horizontal 
                    data={lifters} renderItem={({ item, index }) => <Pressable style={{}} onPress={() => setLifterDetails({ ...lifterDetails, index: index, value: item.size })}>
                        <View style={{ height: HEIGHT * 0.15, width: WIDTH * 0.4, backgroundColor: 'black', borderRadius: HEIGHT * 0.01, marginTop: HEIGHT * 0.02, justifyContent: 'center', marginLeft: HEIGHT * 0.01 }}>
                            <View style={{ height: HEIGHT * 0.033, width: WIDTH * 0.07, borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.3, backgroundColor: index === windowSizeDetails.index ? '#0FC1A1' : 'black', justifyContent: 'center', alignItems: 'center', marginLeft: HEIGHT * 0.02 }}>
                                {index === windowSizeDetails.index && <Ionicons name='checkmark' />}
                            </View>
                            <View style={{ margin: HEIGHT * 0.02 }}>
                                <View>
                                    <Text style={{ color: 'white', fontSize: HEIGHT * 0.02 }}>{item.title}</Text>
                                    <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.013, marginTop: HEIGHT * 0.007 }}>{item.description}</Text>
                                </View>

                            </View>
                        </View>
                    </Pressable >} />
            case 'bathroomtype':
                return <FlatList
                    contentContainerStyle={{ flexDirection: 'row' }}
                    //  horizontal 
                    data={bathroom}
                    renderItem={({ item, index }) => <Pressable style={{}} onPress={() => setBathroomtype({ ...bathroomType, index: index, value: item.size })}>
                        <View style={{ height: HEIGHT * 0.15, width: WIDTH * 0.4, backgroundColor: 'black', borderRadius: HEIGHT * 0.01, marginTop: HEIGHT * 0.02, justifyContent: 'center', marginLeft: HEIGHT * 0.01 }}>
                            <View style={{ height: HEIGHT * 0.033, width: WIDTH * 0.07, borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.3, backgroundColor: index === windowSizeDetails.index ? '#0FC1A1' : 'black', justifyContent: 'center', alignItems: 'center', marginLeft: HEIGHT * 0.02 }}>
                                {index === windowSizeDetails.index && <Ionicons name='checkmark' />}
                            </View>
                            <View style={{ margin: HEIGHT * 0.02 }}>
                                <View>
                                    <Text style={{ color: 'white', fontSize: HEIGHT * 0.02 }}>{item.title}</Text>
                                    <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.013, marginTop: HEIGHT * 0.007 }}>{item.description}</Text>
                                </View>

                            </View>
                        </View>
                    </Pressable >} />
            case 'condition':
                return <FlatList numColumns={2} data={condition} renderItem={({ item, index }) => <Pressable style={{}} onPress={() => setAirCondition({ ...airCondition, index: index, value: item.title })}>
                    <View style={{ height: HEIGHT * 0.08, width: WIDTH * 0.4, backgroundColor: index === airCondition.index ? '#0FC1A1' : 'black', borderRadius: HEIGHT * 0.01, marginTop: HEIGHT * 0.005, justifyContent: 'center', alignItems: 'center', margin: HEIGHT * 0.01 }}>
                        <Text style={{ color: 'white', fontSize: HEIGHT * 0.02 }}>{item.title}</Text>
                    </View>
                </Pressable >} />
            case 'outercover':
                return <FlatList data={outerCover} renderItem={({ item, index }) => <Pressable onPress={() => setOuterCoverDetails({ ...outerCoverDetails, index: index, value: item.title })}>
                    <View style={{ height: HEIGHT * 0.075, width: WIDTH * 0.9, backgroundColor: 'black', borderRadius: HEIGHT * 0.01, justifyContent: 'center', marginTop: HEIGHT * 0.01 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: HEIGHT * 0.02 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={item.logo} />
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.022, marginLeft: HEIGHT * 0.02 }}>{item.title}</Text>

                            </View>
                            <View style={{ height: HEIGHT * 0.033, width: WIDTH * 0.07, borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.3, backgroundColor: index === outerCoverDetails.index ? '#0FC1A1' : 'black', justifyContent: 'center', alignItems: 'center' }}>
                                {index === outerCoverDetails.index && <Ionicons name='checkmark' />}
                            </View>
                        </View>
                    </View>
                </Pressable>} />
            case 'watertank':
                return <FlatList data={waterTank} renderItem={({ item, index }) => <Pressable onPress={() => setwatertankdetails({ ...waterTankdetals, index: index, value: item.size })}>
                    <View style={{ height: HEIGHT * 0.07, width: WIDTH * 0.9, backgroundColor: 'black', borderRadius: HEIGHT * 0.01, justifyContent: 'center', marginTop: HEIGHT * 0.02 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: HEIGHT * 0.02 }}>
                            <View>
                                <Text style={{ color: 'white', fontSize: HEIGHT * 0.022 }}>{item.title}</Text>

                            </View>
                            <View style={{ height: HEIGHT * 0.033, width: WIDTH * 0.07, borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.3, backgroundColor: index === waterTankdetals.index ? '#0FC1A1' : 'black', justifyContent: 'center', alignItems: 'center' }}>
                                {index === waterTankdetals.index && <Ionicons name='checkmark' />}
                            </View>
                        </View>
                    </View>
                </Pressable>} />
            case 'towhook':
                return <FlatList contentContainerStyle={{ flexDirection: 'row' }} style={{}}
                    // horizontal
                    data={hook}
                    renderItem={({ item, index }) => <Pressable style={{}} onPress={() => setHookDetails({ ...hookDetails, index: index, value: item.title })}>
                        <View style={{ height: HEIGHT * 0.15, width: WIDTH * 0.4, backgroundColor: 'black', borderRadius: HEIGHT * 0.01, marginTop: HEIGHT * 0.02, justifyContent: 'center', marginLeft: HEIGHT * 0.01 }}>
                            <View style={{ height: HEIGHT * 0.033, width: WIDTH * 0.07, borderWidth: 1, borderColor: '#0FC1A1', borderRadius: HEIGHT * 0.3, backgroundColor: hookDetails.index == index ? '#0FC1A1' : 'black', justifyContent: 'center', alignItems: 'center', marginLeft: HEIGHT * 0.02 }}>
                                {index === hookDetails.index && <Ionicons name='checkmark' />}
                            </View>
                            <View style={{ margin: HEIGHT * 0.02 }}>
                                <View>
                                    <Text style={{ color: 'white', fontSize: HEIGHT * 0.02 }}>{item.title}</Text>
                                    <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.013, marginTop: HEIGHT * 0.007 }}>{item.description}</Text>
                                </View>

                            </View>
                        </View>
                    </Pressable >} />
        }
    }
    return (

        <View style={{ backgroundColor: 'black', flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ marginTop: Platform.OS === "android" ? HEIGHT * 0.035 : HEIGHT * 0.08, }}>
                    <HeaderComponent leftlogo={backarrow} leftOnPress={() =>/*  scrollIndex === 0 ? */ navigation.goBack()/*  : minusScroolFunction(scrollIndex) */} title={'CUSTOM'} />
                </View>
                <View style={{ flex: 1, backgroundColor: '#0FC1A1' }}>
                    <View style={{ height: Platform.OS === "android" ? HEIGHT * 0.82 : HEIGHT * 0.79, backgroundColor: '#181D23', borderBottomLeftRadius: HEIGHT * 0.015, borderBottomRightRadius: HEIGHT * 0.015 }}>
                        <View style={{ height: HEIGHT * 0.13, backgroundColor: 'black', paddingTop: HEIGHT * 0.03 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View style={{ marginLeft: HEIGHT * 0.03 }}>
                                    <Text style={{ color: 'white', fontSize: HEIGHT * 0.023 }}>{titleDetails[scrollIndex].title}</Text>
                                    <Text style={{ color: '#0FC1A1', fontSize: HEIGHT * 0.02, fontWeight: '500', marginTop: HEIGHT * 0.01 }}>Step {scrollIndex + 1}/13</Text>
                                </View>
                                {/* <Image source={screenData.progresslogo} style={{ marginRight: HEIGHT * 0.03 }} /> */}
                                <View style={{ marginRight: HEIGHT * 0.02 }}>
                                    <ProgressCircleComponent index={scrollIndex} textPercentage={titleDetails[scrollIndex].percentage} />
                                </View>
                            </View>
                        </View>

                        <View>
                            <FlatList ref={ref}
                                horizontal data={customDetails}
                                /* viewabilityConfig={{
                                    itemVisiblePercentThreshold: 50
                                }} */
                                scrollEnabled={false}
                                onViewableItemsChanged={handleViewableItemsChanged}
                                viewabilityConfig={viewabilityConfig}
                                //onViewableItemsChanged={onViewableItemsChanged}
                                renderItem={({ item, index }) => {

                                    //setScrollIndex(index)

                                    return <>

                                        <><View style={{ alignItems: 'center', marginTop: HEIGHT * 0.045, width: WIDTH }}><Image source={item.logo} />
                                            <Text style={{ color: 'white', fontSize: HEIGHT * 0.03, marginTop: HEIGHT * 0.02 }}>{item.title}</Text>
                                            <Text style={{ color: 'white', fontSize: HEIGHT * 0.02, width: WIDTH * 0.75, textAlign: 'center', marginTop: HEIGHT * 0.02 }}>Lorem Ipsum Dolor Sit Amet Consetetur Sadipscing Elitr, Sed Diam</Text>
                                            <View style={{ marginTop: HEIGHT * 0.01, }}>
                                                <View style={{ alignItems: 'center' }}>
                                                    {handleComponent(item.case, index)}
                                                </View>

                                            </View>
                                        </View>
                                        </>



                                    </>
                                }} />
                        </View>


                    </View>
                    <View>
                        <ScreenButtonComponent text={'NEXT'} onPress={() => {
                            scrollIndex === 12 ? navigation.navigate('CustomCabanaEndScreen') : scrollFunction(scrollIndex)
                            // if (scrollIndex === 12) {
                            //     navigation.navigate("")
                            // }
                        }} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CustomCabanaScreen