import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { americanodrinkimage, calendarlogo, carticon, drawerdp, drawericon, leaffullimage, leftarrow } from '../../assets/images'
import MainContainer from '../../components/user/MainContainer'
import { colors } from '../../constants/colors'
import { HEIGHT, WIDTH } from '../../constants/dimensions'
import { Image } from 'react-native'
import { commonStyles } from '../../constants/styles'
import { useSelector } from 'react-redux'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { FlatList } from 'react-native'
import { orders } from '../../constants/Arrays'

const DashBoardScreen = () => {
    const { lang } = useSelector((state) => state.i18nState)
    const animatedValue = useSharedValue(0)
    const AnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withTiming(WIDTH * animatedValue.value, { duration: 500 }) }]
        }
    })
    console.log("HEIGHT=-><", HEIGHT * 0.268);
    return (
        <View style={{ flex: 1 }}>
            <MainContainer leftlogo={drawericon}
                secondlogo={leftarrow} title={'DashBoard'} rightlogo={carticon}>
                <View style={[{ backgroundColor: colors.white, }]}>
                    <View style={[commonStyles.flexDirection(lang), { height: 100, paddingHorizontal: WIDTH * 0.05, paddingVertical: HEIGHT * 0.01, alignItems: 'center' }]}>
                        <Image source={drawerdp} />
                        <View style={{ marginHorizontal: WIDTH * 0.07 }}>
                            <Text style={[commonStyles.textAlign(lang), { color: colors.lightblack, fontSize: 18 }]}>
                                AlMutasim AlSammarraie
                            </Text>
                            <Text style={[commonStyles.textAlign(lang), { marginVertical: HEIGHT * 0.005, color: colors.brown, fontSize: 16 }]}>
                                Doha
                            </Text>
                            <Text style={[commonStyles.textAlign(lang), { color: colors.gray, fontSize: 12 }]}>
                                Joined Jan 2018
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View style={[{ marginHorizontal: WIDTH * 0.05, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: WIDTH * 0.07 }]}>
                            <Pressable onPress={() => animatedValue.value = 0}><Text style={[commonStyles.textAlign(lang), { fontSize: 15, color: colors.lightbrown }]}>My Orders</Text></Pressable>
                            <Pressable onPress={() => animatedValue.value = 0.5}><Text style={[commonStyles.textAlign(lang), { fontSize: 15, color: colors.lightbrown }]}>Loyalty Program</Text></Pressable>
                        </View>
                        <View style={{ height: HEIGHT * 0.007, backgroundColor: colors.lightgray, marginTop: HEIGHT * 0.02 }}>
                            <Animated.View style={[AnimatedStyle, { width: WIDTH / 2, backgroundColor: colors.darkbrown, height: '100%', borderRadius: HEIGHT * 0.006 }]} />
                        </View>
                        <View>
                            <ScrollView horizontal>
                                <View>
                                    <View style={{ backgroundColor: colors.lightgray_2, paddingHorizontal: WIDTH * 0.05, paddingVertical: HEIGHT * 0.02, width: WIDTH }}>
                                        <View style={[commonStyles.flexDirection(lang)]}>
                                            <Text style={[commonStyles.textAlign(lang), { color: colors.darkbrown }]}>Your Order</Text>
                                            <Text style={[commonStyles.textAlign(lang), { color: colors.lightgreen, marginHorizontal: WIDTH * 0.01 }]}>(1 New order)</Text>
                                        </View>
                                    </View>
                                    <View style={{ backgroundColor: colors.white }}>
                                        <View>
                                            <View style={[commonStyles.flexDirection(lang), { justifyContent: 'space-between', marginHorizontal: WIDTH * 0.05, paddingVertical: HEIGHT * 0.02 }]}>
                                                <View style={[commonStyles.flexDirection(lang)]}>
                                                    <Image source={americanodrinkimage} />
                                                    <View style={{ marginHorizontal: WIDTH * 0.05 }}>
                                                        <Text style={[commonStyles.textAlign(lang), { color: colors.lightblack, fontSize: 14 }]}>Order : 45234563463</Text>
                                                        <View style={[commonStyles.flexDirection(lang), { marginVertical: HEIGHT * 0.006 }]}>
                                                            <Image source={calendarlogo} />
                                                            <Text style={[commonStyles.textAlign(lang), { color: colors.brown, fontSize: 13, marginHorizontal: WIDTH * 0.02 }]}>10 May 2018</Text>
                                                        </View>
                                                        <Text style={[commonStyles.textAlign(lang), { color: colors.darkbrown, fontSize: 13, }]}>Being Prepared</Text>
                                                    </View>
                                                </View>

                                                <View style={[commonStyles.flexDirection(lang)]}>
                                                    <Text style={[commonStyles.textAlign(lang), { color: colors.darkbrown, fontSize: 15, }]}>10</Text>
                                                    <Text style={[commonStyles.textAlign(lang), { color: colors.lightblack, fontSize: 15, marginHorizontal: WIDTH * 0.01 }]}>QAR</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ backgroundColor: colors.lightgray_2, paddingHorizontal: WIDTH * 0.05, paddingVertical: HEIGHT * 0.02 }}>
                                        <View style={[]}>
                                            <Text style={[commonStyles.textAlign(lang), { color: colors.darkbrown }]}>Past Orders</Text>

                                        </View>
                                    </View>
                                    <View>
                                        <FlatList data={orders} renderItem={({ item }) => <View style={[commonStyles.flexDirection(lang), { paddingHorizontal: WIDTH * 0.05, justifyContent: 'space-between', borderBottomWidth: 1, paddingVertical: HEIGHT * 0.007, borderBottomColor: colors.lightgray }]}>
                                            <View>
                                                <View>
                                                    <View style={[commonStyles.flexDirection(lang)]}>
                                                        <Text style={[commonStyles.textAlign(lang), { color: colors.darkbrown }]}>Order : </Text>
                                                        <Text>45234563463</Text>
                                                    </View>
                                                </View>
                                                <View style={[commonStyles.flexDirection(lang), { marginVertical: HEIGHT * 0.006 }]}>
                                                    <Image source={calendarlogo} />
                                                    <Text style={[commonStyles.textAlign(lang), { color: colors.brown, fontSize: 13, marginHorizontal: WIDTH * 0.02 }]}>22 Jan 2018</Text>
                                                </View>
                                            </View>
                                            <View style={{}}>
                                                <View style={{}}>
                                                    <View style={[commonStyles.flexDirection(lang), commonStyles.justifyContent(lang == 'en' ? 'ar' : 'en')]}>
                                                        <Text style={[commonStyles.textAlign(lang), { color: colors.darkbrown }]}>10 </Text>
                                                        <Text> QAR</Text>
                                                    </View>
                                                </View>
                                                <View style={[commonStyles.flexDirection(lang), { marginVertical: HEIGHT * 0.006 }]}>
                                                    <Text style={[commonStyles.textAlign(lang), { color: item.color, fontSize: 13, }]}>{item.title}</Text>
                                                </View>
                                            </View>
                                        </View>} />
                                    </View>
                                </View>
                                <View>
                                    <View style={{ backgroundColor: colors.lightgray_2, paddingHorizontal: WIDTH * 0.05, paddingVertical: HEIGHT * 0.02, width: WIDTH }}>
                                        <View style={[commonStyles.flexDirection(lang), { justifyContent: 'space-between' }]}>
                                            <Text style={[commonStyles.textAlign(lang), { color: colors.darkbrown }]}>Wallet</Text>
                                            <Text style={[commonStyles.textAlign(lang), { color: colors.lightblack, marginHorizontal: WIDTH * 0.01, fontSize: 14 }]}>View History</Text>
                                        </View>

                                    </View>
                                    <View style={{ height: HEIGHT * 0.35, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={leaffullimage} style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }} />
                                        <View style={{ height: HEIGHT * 0.268, borderWidth: 1, borderColor: colors.lightgray, width: WIDTH * 0.9, borderRadius: HEIGHT * 0.01 }}>

                                        </View>

                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </MainContainer>
        </View>
    )
}

export default DashBoardScreen