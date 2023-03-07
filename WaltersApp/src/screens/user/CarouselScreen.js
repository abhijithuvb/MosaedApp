import { View, Text, Image, ImageBackground, Pressable, Platform, ScrollView, FlatList, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import MainContainer from '../../components/user/MainContainer'
import { carticon, curvedyellow, drawericon, leftarrow, roundminuslogo, roundpluslogo, ticklogo, uparrow } from '../../assets/images'
import { HEIGHT, WIDTH } from '../../constants/dimensions'
import { commonStyles } from '../../constants/styles'
import { colors } from '../../constants/colors'
import { useSelector } from 'react-redux'
import Carousel from 'react-native-reanimated-carousel'
import { carousel, selectItem } from '../../constants/Arrays'
import { TextInput } from 'react-native-gesture-handler'
import ButtonComponent from '../../components/user/ButtonComponent'
import FullButtonComponent from '../../components/user/FullButtonComponent'

const CarouselScreen = (props) => {
    const { navigation } = props
    const [Index, setIndex] = useState()
    const [count, setCount] = useState(0)
    const { lang } = useSelector((state) => state.i18nState)
    console.log("HEI==>", HEIGHT * 0.06065);
    const setCounter = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <Image source={curvedyellow} style={{ position: 'absolute', bottom: HEIGHT * 0.55, left: -WIDTH * 0.2 }} />

            <View style={{ marginHorizontal: WIDTH * 0.05 }}>
                <View style={[, { marginTop: HEIGHT * 0.07 }]}><View style={[commonStyles.flexDirection(lang), { justifyContent: 'space-between', alignItems: 'center' }]}><View style={[commonStyles.flexDirection(lang), { width: WIDTH * 0.18, justifyContent: 'space-between' }]}>
                    <Pressable onPress={() => navigation.toggleDrawer()}><Image source={drawericon} style={{ tintColor: colors.lightblack }} /></Pressable>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Image source={leftarrow} style={{ tintColor: colors.lightblack, transform: [{ rotateY: lang === 'en' ? '0deg' : '180deg' }] }} />
                    </Pressable>
                </View><Text style={[lang == "en" ? { marginRight: WIDTH * 0.1 } : { marginLeft: WIDTH * 0.1 }, { fontSize: 20, color: colors.lightblack }]}>Hot Drinks</Text>
                    <Image source={carticon} style={{ tintColor: colors.lightblack }} />
                </View>
                </View>
            </View>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ marginVertical: HEIGHT * 0.01 }}>
                    <Carousel style={{ height: HEIGHT * 0.48, }}
                        loop={true}
                        width={WIDTH}
                        height={HEIGHT * 0.7}
                        defaultIndex={1}
                        data={carousel}
                        mode="parallax"
                        pagingEnabled

                        onSnapToItem={(index) => {
                            // animation.value = index
                            // if (index === 3) {
                            //     setSkip(true)
                            // } else {
                            //     setSkip(false)
                            // }
                            // console.log('current index:', index)
                        }}
                        renderItem={({ item }) => (
                            <View style={{}}>

                                <Image source={item.image}
                                    style={{ width: Platform.OS == "android" ? WIDTH * 0.97 : WIDTH, height: HEIGHT * 0.5, borderRadius: HEIGHT * 0.02, }} />
                                <View style={[commonStyles.alignItems(lang), { position: 'absolute', paddingHorizontal: WIDTH * 0.08, paddingVertical: HEIGHT * 0.02, bottom: HEIGHT * 0.03 }]}>
                                    <Text style={{ fontSize: 25, width: WIDTH * 0.4, color: colors.white }}>
                                        Iced Spanish Latte
                                    </Text>
                                    <View style={{ height: HEIGHT * 0.05, backgroundColor: colors.yellow, width: WIDTH * 0.35, borderRadius: HEIGHT * 0.05, alignItems: 'center', justifyContent: 'center', marginVertical: HEIGHT * 0.02 }}>
                                        <Text style={{ fontSize: 12, }}>Hot Drinks</Text>
                                    </View>
                                </View>

                            </View>)
                        }
                    />

                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{}}>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: colors.lightgray }}>
                        <View style={{ marginHorizontal: WIDTH * 0.05 }}>
                            <Text style={[commonStyles.textAlign(lang), { color: colors.lightblack, fontSize: 14 }]}>A Spanish latte, or Café con Leche, is a white coffee that originated in Spain and is made by combining a strong coffee, usually in the form of espresso, with hot milk.</Text>
                            <Text style={[commonStyles.textAlign(lang), { fontSize: 16, color: colors.darkbrown, marginVertical: HEIGHT * 0.01 }]}>Customize your coffee</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: colors.lightgray }}>
                        <Text style={[commonStyles.textAlign(lang), { marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.01, fontSize: 13, color: colors.lightblack, }]}>How many you need</Text>
                        <View style={[commonStyles.flexDirection(lang), { height: HEIGHT * 0.06065, marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.02 }]}>
                            <Pressable onPress={() => setCounter()} style={{ height: '100%', width: WIDTH * 0.2, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: HEIGHT * 0.007, borderBottomLeftRadius: HEIGHT * 0.007, borderColor: colors.lightgray }}>
                                <Image source={roundminuslogo} />
                            </Pressable>
                            <View style={{ height: '100%', width: WIDTH * 0.55 - WIDTH * 0.05, borderTopWidth: 1, borderBottomWidth: 1, borderColor: colors.lightgray, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 21, color: colors.darkbrown }}>{count}</Text>
                            </View>
                            <Pressable onPress={() => setCount(count + 1)} style={{ height: '100%', width: WIDTH * 0.2, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: HEIGHT * 0.007, borderBottomRightRadius: HEIGHT * 0.007, borderColor: colors.lightgray }}>
                                <Image source={roundpluslogo} />
                            </Pressable>
                        </View>

                    </View>
                    <View style={[commonStyles.flexDirection(lang), { paddingHorizontal: WIDTH * 0.05, paddingVertical: WIDTH * 0.02, justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: colors.lightgray }]}>
                        <View>
                            <Text style={[commonStyles.textAlign(lang), { color: colors.lightblack, fontSize: 13 }]}>Customize the flavour</Text>
                            <Text style={[commonStyles.textAlign(lang), { color: colors.brown, fontSize: 14 }]}>Vanilla</Text>
                        </View>
                        <Image source={uparrow} />
                    </View>
                    <View style={[commonStyles.flexDirection(lang), { paddingHorizontal: WIDTH * 0.05, paddingVertical: WIDTH * 0.02, justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: colors.lightgray, backgroundColor: colors.lightgray }]}>
                        <View>
                            <Text style={[commonStyles.textAlign(lang), { color: colors.lightblack, fontSize: 13 }]}>Customize the size</Text>
                            <View style={[commonStyles.flexDirection(lang), { alignItems: 'center' }]}>
                                <Text style={[commonStyles.textAlign(lang), { color: colors.brown, fontSize: 14 }]}>Medium</Text>
                                <Text style={[commonStyles.textAlign(lang), { color: colors.brown, fontSize: 11, marginHorizontal: WIDTH * 0.03 }]}>10 QAR</Text>
                            </View>

                        </View>
                        <Image source={uparrow} />
                    </View>
                    <View>
                        <FlatList data={selectItem} renderItem={({ item, index }) => <View style={{ borderBottomWidth: 1, borderBottomColor: colors.lightgray }}>
                            <View style={{ marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.007 }}>
                                <Pressable onPress={() => setIndex(index)} style={[commonStyles.flexDirection(lang), { justifyContent: 'space-between', alignItems: 'center' }]}>
                                    <Text style={[commonStyles.textAlign(lang), { color: colors.lightblack }]}>{item.title}</Text>
                                    <View style={{ height: HEIGHT * 0.032, width: WIDTH * 0.07, borderRadius: WIDTH, backgroundColor: Index == index ? colors.lightgreen : colors.lightgray, justifyContent: 'center', alignItems: 'center' }}>
                                        {Index == index && <Image source={ticklogo} />}
                                    </View>
                                </Pressable>
                            </View>
                        </View>} />
                    </View>
                    <View style={[commonStyles.alignItems(lang == 'en' ? 'ar' : 'en'), { marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.02, }]}>
                        <View style={[commonStyles.flexDirection(lang), { alignItems: 'center' }]}>
                            <Text style={[, { fontSize: 18, color: colors.lightbrown }]}>Total:</Text>
                            <Text style={[, { fontSize: 30, color: colors.darkbrown }]}>28 </Text>
                            <Text style={[, { fontSize: 18, color: colors.darkbrown }]}>QAR </Text>
                        </View>
                    </View>
                    <View style={[commonStyles.alignItems(lang), commonStyles.flexDirection(lang), { marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.02, }]}>
                        <Text style={[commonStyles.textAlign(lang), { color: colors.darkbrown, fontSize: 16 }]}>Add comments</Text>
                        <Text style={[commonStyles.textAlign(lang), { color: colors.lightblack, fontSize: 13 }]}> (Optional)</Text>
                    </View>
                    <View style={{ marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.01, borderWidth: 1, borderColor: colors.lightgray, height: HEIGHT * 0.15, borderRadius: HEIGHT * 0.008 }}>
                        <TextInput style={[commonStyles.textAlign(lang), { height: '100%', width: '100%', borderRadius: HEIGHT * 0.008 }]} />
                    </View>
                    <View style={{ marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.01 }}>

                        <FullButtonComponent label={'Add to Cart'} onPress={() => navigation.navigate("CartScreen")} />
                    </View>

                </ScrollView >
            </SafeAreaView>

        </View >
    )
}


export default CarouselScreen

