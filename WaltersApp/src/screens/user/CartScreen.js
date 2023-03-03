import { View, Text, Image, FlatList, Pressable, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import MainContainer from '../../components/user/MainContainer'
import { carticon, drawericon, leftarrow, pencilicon, spanishlatte, ticklogo } from '../../assets/images'
import { HEIGHT, WIDTH } from '../../constants/dimensions'
import { colors } from '../../constants/colors'
import { commonStyles } from '../../constants/styles'
import { useSelector } from 'react-redux'
import { pickupOption, pickupTime, selectItem } from '../../constants/Arrays'
import FullButtonComponent from '../../components/user/FullButtonComponent'

const CartScreen = (props) => {
    const description = 'Select how and when you would like to receive your coffee'
    const { navigation } = props
    const { lang } = useSelector((state) => state.i18nState)
    const [timeIndex, setTimeIndex] = useState()
    const [optionIndex, setOptionIndex] = useState()
    return (
        <View style={{ flex: 1 }}>
            <MainContainer leftlogo={drawericon}
                secondlogo={leftarrow} title={'Cart'} rightlogo={carticon} description={description}>
                <View style={{}}>
                    <View style={[commonStyles.flexDirection(lang), { alignItems: 'center', justifyContent: 'space-between', marginVertical: HEIGHT * 0.02, marginHorizontal: WIDTH * 0.05 }]}>
                        <Text style={[, { fontSize: 16, color: colors.darkbrown }]}>Items in your Cart (2)</Text>
                        <View style={{ height: HEIGHT * 0.04, width: WIDTH * 0.15, borderWidth: 1, borderColor: colors.lightgray, borderRadius: HEIGHT * 0.3, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={pencilicon} />
                        </View>
                    </View>
                    <View style={[commonStyles.flexDirection(lang), commonStyles.alignItems(lang), { marginHorizontal: WIDTH * 0.05 }]}>
                        <View>
                            <Image source={spanishlatte} />
                        </View>
                        <View style={{ marginHorizontal: WIDTH * 0.05 }}>
                            <Text style={[commonStyles.textAlign(lang), { color: colors.lightbrown }]}>Spanish latte</Text>
                            <View style={[commonStyles.flexDirection(lang),
                            { marginVertical: HEIGHT * 0.005 }]}>

                                <View style={[commonStyles.flexDirection(lang)]}>
                                    <Text style={[commonStyles.textAlign(lang), { fontSize: 12, color: colors.gray }]}>Size:</Text>
                                    <Text style={[commonStyles.textAlign(lang), { fontSize: 12, color: colors.lightblack }]}> Medium</Text>
                                </View>
                                <View style={[commonStyles.flexDirection(lang), { marginHorizontal: WIDTH * 0.01, }]}>
                                    <Text style={[commonStyles.textAlign(lang), { fontSize: 12, color: colors.gray }]}>Quantity:</Text>
                                    <Text style={[commonStyles.textAlign(lang), { fontSize: 12, color: colors.lightblack }]}> 5</Text>
                                </View>
                            </View>
                            <View style={[commonStyles.flexDirection(lang), { alignItems: 'center', marginVertical: HEIGHT * 0.01, marginHorizontal: WIDTH * 0.05 }]}>
                                <Text style={[, { fontSize: 15, color: colors.lightbrown }]}>Total:</Text>
                                <Text style={[, { fontSize: 15, color: colors.darkbrown }]}> 28 </Text>
                                <Text style={[, { fontSize: 15, color: colors.lightbrown }]}>QAR </Text>
                            </View>

                        </View>
                    </View>
                    <View style={{ backgroundColor: colors.lightgray_2, paddingHorizontal: WIDTH * 0.05 }}>
                        <View style={[commonStyles.flexDirection(lang), commonStyles.alignItems(lang), { paddingVertical: HEIGHT * 0.02, }]}>
                            <View>
                                <Image source={spanishlatte} />
                            </View>
                            <View style={{ marginHorizontal: WIDTH * 0.05 }}>
                                <Text style={[commonStyles.textAlign(lang), { color: colors.lightbrown }]}>Spanish latte</Text>
                                <View style={[commonStyles.flexDirection(lang),
                                { marginVertical: HEIGHT * 0.005 }]}>

                                    <View style={[commonStyles.flexDirection(lang)]}>
                                        <Text style={[commonStyles.textAlign(lang), { fontSize: 12, color: colors.gray }]}>Size:</Text>
                                        <Text style={[commonStyles.textAlign(lang), { fontSize: 12, color: colors.lightblack }]}> Medium</Text>
                                    </View>
                                    <View style={[commonStyles.flexDirection(lang), { marginHorizontal: WIDTH * 0.01, }]}>
                                        <Text style={[commonStyles.textAlign(lang), { fontSize: 12, color: colors.gray }]}>Quantity:</Text>
                                        <Text style={[commonStyles.textAlign(lang), { fontSize: 12, color: colors.lightblack }]}> 5</Text>
                                    </View>
                                </View>
                                <View style={[commonStyles.flexDirection(lang), { alignItems: 'center', marginVertical: HEIGHT * 0.01 }]}>
                                    <Text style={[, { fontSize: 15, color: colors.lightbrown }]}>Total:</Text>
                                    <Text style={[, { fontSize: 15, color: colors.darkbrown }]}> 28 </Text>
                                    <Text style={[, { fontSize: 15, color: colors.lightbrown }]}>QAR </Text>
                                </View>

                            </View>
                        </View>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ height: Platform.OS == "android" ? HEIGHT * 0.534 : HEIGHT * 0.501 }}>
                        <View>
                            <View style={[{ marginVertical: HEIGHT * 0.02, }]}>
                                <Text style={[commonStyles.textAlign(lang), commonStyles.alignItems(lang), { paddingHorizontal: WIDTH * 0.05, marginBottom: HEIGHT * 0.01, fontSize: 16, color: colors.darkbrown }]}>Choose a pickup time</Text>
                                <FlatList data={pickupTime} renderItem={({ item, index }) => <View style={{ borderBottomWidth: 1, borderBottomColor: colors.lightgray }}>
                                    <View style={{ marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.007 }}>
                                        <Pressable onPress={() => setTimeIndex(index)} style={[commonStyles.flexDirection(lang), { alignItems: 'center' }]}>
                                            <View style={{ height: HEIGHT * 0.032, width: WIDTH * 0.07, borderRadius: WIDTH, backgroundColor: timeIndex == index ? colors.lightgreen : colors.lightgray, justifyContent: 'center', alignItems: 'center' }}>
                                                {timeIndex == index && <Image source={ticklogo} />}
                                            </View>
                                            <Text style={[commonStyles.textAlign(lang), { color: colors.lightblack, marginHorizontal: WIDTH * 0.04 }]}>{item.title}</Text>

                                        </Pressable>
                                    </View>
                                </View>} />
                            </View>
                        </View>
                        <View>
                            <View style={[{ marginVertical: HEIGHT * 0.02, }]}>
                                <Text style={[commonStyles.textAlign(lang), commonStyles.alignItems(lang), { paddingHorizontal: WIDTH * 0.05, marginBottom: HEIGHT * 0.01, fontSize: 16, color: colors.darkbrown }]}>Pickup Option</Text>
                                <FlatList data={pickupOption} renderItem={({ item, index }) => <View style={{ borderBottomWidth: 1, borderBottomColor: colors.lightgray }}>
                                    <View style={{ marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.007 }}>
                                        <Pressable onPress={() => setOptionIndex(index)} style={[commonStyles.flexDirection(lang), { alignItems: 'center' }]}>
                                            <View style={{ height: HEIGHT * 0.032, width: WIDTH * 0.07, borderRadius: WIDTH, backgroundColor: optionIndex == index ? colors.lightgreen : colors.lightgray, justifyContent: 'center', alignItems: 'center' }}>
                                                {optionIndex == index && <Image source={ticklogo} />}
                                            </View>
                                            <Text style={[commonStyles.textAlign(lang), { color: colors.lightblack, marginHorizontal: WIDTH * 0.04 }]}>{item.title}</Text>

                                        </Pressable>
                                    </View>
                                </View>} />
                            </View>
                        </View>
                        <View>
                            <View style={[commonStyles.alignItems(lang), { marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.01 }]}>
                                <Text style={{ fontSize: 16, color: colors.darkbrown }}>Location and car type</Text><Text style={{ fontSize: 14, color: colors.lightblack }}>Location A</Text>
                                <Text style={{ fontSize: 14, color: colors.lightblack }}>White Land cruiser </Text>
                            </View>

                        </View>
                        <View style={[commonStyles.alignItems(lang == 'en' ? 'ar' : 'en'), { marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.02, }]}>
                            <View style={[commonStyles.flexDirection(lang), { alignItems: 'center' }]}>
                                <Text style={[, { fontSize: 18, color: colors.lightbrown }]}>Total:</Text>
                                <Text style={[, { fontSize: 30, color: colors.darkbrown }]}>28 </Text>
                                <Text style={[, { fontSize: 18, color: colors.darkbrown }]}>QAR </Text>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.01 }}>
                            <FullButtonComponent label={'Proceed to Payment'} onPress={() => navigation.navigate("PickUpLocationScreen")} />
                        </View>
                    </ScrollView>
                </View>


            </MainContainer >
        </View >
    )
}

export default CartScreen