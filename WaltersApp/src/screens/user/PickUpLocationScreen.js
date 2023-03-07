import { View, Text, SafeAreaView, Image, FlatList, Pressable, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import MainContainer from '../../components/user/MainContainer'
import { carticon, drawericon, dualsquare, leftarrow, locationoneimage } from '../../assets/images'
import { commonStyles } from '../../constants/styles'
import { useSelector } from 'react-redux'
import { HEIGHT, WIDTH } from '../../constants/dimensions'
import { colors } from '../../constants/colors'
import { TextInput } from 'react-native-gesture-handler'
import { location } from '../../constants/Arrays'
import FullButtonComponent from '../../components/user/FullButtonComponent'

const PickUpLocationScreen = ({ navigation }) => {
    const description = 'Select how and when you would like to receive your coffee'
    const { lang } = useSelector((state) => state.i18nState)
    const [locationIndex, setLocationindex] = useState()
    const [scroll, setScroll] = useState(true)
    const scrollRef = useRef();
    const scrollHandle = () => {
        scrollRef.current.scrollTo({ x: WIDTH, y: 0, animated: true })
        setScroll(false)
    }
    const handleSubmit = () => {
        if (scroll) {
            scrollHandle()
        } else {
            navigation.navigate("PaymentScreen")

        }
    }
    console.log("navigation", navigation);
    return (
        <View style={{ flex: 1 }}>
            <MainContainer leftlogo={drawericon}
                secondlogo={leftarrow} title={'Pickup Location'} rightlogo={carticon} description={description}>
                <View>
                    <View style={[{ marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.01 }]}>

                        <Text style={[commonStyles.textAlign(lang), { fontSize: 16, color: colors.darkbrown }]}>Select Location</Text>
                        <View style={{ borderWidth: 1, borderColor: colors.lightgray, height: HEIGHT * 0.05, borderRadius: HEIGHT * 0.007, marginVertical: HEIGHT * 0.01 }}>
                            <TextInput style={[commonStyles.textAlign(lang), { height: HEIGHT * 0.05, borderRadius: HEIGHT * 0.0069, color: colors.lightblack }]} />
                        </View>


                    </View>
                </View>
                <View>
                    <View style={[{ marginHorizontal: WIDTH * 0.05, }]}>
                        <Text style={[commonStyles.textAlign(lang), { fontSize: 16, color: colors.darkbrown, marginBottom: HEIGHT * 0.01 }]}>Select Pickup Location</Text></View>
                </View>
                <View style={{ flex: 1, backgroundColor: colors.lightgray_2 }}>
                    <View>
                        <ScrollView
                            ref={scrollRef}
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            horizontal style={{}}><View style={{ paddingVertical: HEIGHT * 0.02, width: WIDTH }}>
                                <Image source={locationoneimage} />
                                <View style={{ marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.02, }}>
                                    <FlatList style={{}}
                                        ItemSeparatorComponent={<View style={{ width: WIDTH * 0.03, }} />}
                                        horizontal
                                        data={location} renderItem={({ item, index }) => <Pressable onPress={() => setLocationindex(index)} style={{ height: HEIGHT * 0.055, width: WIDTH * 0.279, borderWidth: 1, borderRadius: HEIGHT * 0.005, backgroundColor: index == locationIndex ? colors.yellow : colors.white, justifyContent: 'center', alignItems: 'center', borderColor: index == locationIndex ? 'transparent' : colors.lightgray }}>
                                            <Text style={{ color: colors.lightblack }}>{item.title}</Text>
                                        </Pressable>} />
                                </View>
                                <View style={[lang == 'en' ? { right: WIDTH * 0.05 } : { left: WIDTH * 0.05 }, { borderWidth: 1, borderColor: colors.lightgray, height: HEIGHT * 0.04, width: WIDTH * 0.14, borderRadius: HEIGHT * 0.02, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: HEIGHT * 0.03 }]}>
                                    <Image source={dualsquare} />
                                </View>
                            </View>
                            <View style={{ paddingVertical: HEIGHT * 0.02, width: WIDTH }}>
                                <Image source={locationoneimage} />
                                <View style={{ marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.02 }}>
                                    <View style={{ borderWidth: 1, borderColor: colors.lightgray, height: HEIGHT * 0.05, borderRadius: HEIGHT * 0.007, marginTop: HEIGHT * 0.01, backgroundColor: colors.white, }}>
                                        <TextInput style={[commonStyles.textAlign(lang), { height: HEIGHT * 0.05, borderRadius: HEIGHT * 0.0069, color: colors.lightblack, }]} />
                                    </View>
                                </View>
                                <View style={[lang == 'en' ? { right: WIDTH * 0.05 } : { left: WIDTH * 0.05 }, { borderWidth: 1, borderColor: colors.lightgray, height: HEIGHT * 0.04, width: WIDTH * 0.14, borderRadius: HEIGHT * 0.02, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: HEIGHT * 0.03 }]}>
                                    <Image source={dualsquare} />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ marginHorizontal: WIDTH * 0.05, }}>
                        <View style={{ borderWidth: 1, borderColor: colors.lightgray, height: HEIGHT * 0.05, borderRadius: HEIGHT * 0.007, marginVertical: HEIGHT * 0.02, backgroundColor: colors.white, }}>
                            <TextInput style={[commonStyles.textAlign(lang), { height: HEIGHT * 0.05, borderRadius: HEIGHT * 0.0069, color: colors.lightblack, }]} />
                        </View>
                        <View style={{}}>
                            <FullButtonComponent label={'Submit'} onPress={() => handleSubmit()} />
                        </View>
                    </View>
                </View >
            </MainContainer >
            <SafeAreaView style={{ flex: 0, backgroundColor: colors.lightgray_2 }} />
        </View >
    )
}

export default PickUpLocationScreen