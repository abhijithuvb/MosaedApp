import { View, Text, ImageBackground, Image, Pressable, FlatList, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import propTypes from 'prop-types'

import { carticon, drawericon, homemainimage, hotdrink1, leftarrow, waltersyellowtext } from '../../assets/images'
import { HEIGHT, WIDTH } from '../../constants/dimensions'
import { commonStyles } from '../../constants/styles'
import { useSelector } from 'react-redux'
import { colors } from '../../constants/colors'
import { cases, drinks, products } from '../../constants/Arrays'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const HomeScreen = (props, context) => {
    const { navigation } = props
    const { lang } = useSelector((state) => state.i18nState)

    const beta = useSharedValue(0)
    const flatRef = useRef()
    const listRef = useRef()

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withTiming(beta.value, { duration: 300 }) }]
        }
    })

    const handleTap = (item, index) => {
        beta.value = index * (WIDTH * 0.3891 + WIDTH * 0.05)
        // flatRef.current.scrollToIndex({ index: index })
        listRef.current.scrollToIndex({ index: index })
    }
    const handleClick = (item) => {
        switch (item) {
            case 'cold':
                return <FlatList style={{}}
                    ItemSeparatorComponent={<View style={{ marginVertical: HEIGHT * 0.015, paddingHorizontal: WIDTH * 0.01 }} />}
                    data={products}
                    renderItem={({ item, index }) => <View style={{}}>
                        <View style={[commonStyles.flexDirection(lang), { justifyContent: 'space-between', width: WIDTH, }]}>
                            <Image source={hotdrink1} />
                            <View>
                                <Text style={[commonStyles.textAlign(lang), { fontSize: 18, color: colors.lightblack }]}>
                                    {context.t(`${item.title}`)}
                                </Text>
                                <Text style={[commonStyles.textAlign(lang), { fontSize: 14, width: WIDTH * 0.592, marginVertical: HEIGHT * 0.007, color: colors.lightblack }]}>
                                    {context.t(`${item.desc}`)}
                                </Text>
                            </View>
                            <Text style={{ color: colors.darkbrown, fontSize: 24, }}>28</Text>
                        </View>
                    </View>}
                />
            case 'hot':
                return <FlatList style={{}}
                    ItemSeparatorComponent={<View style={{ marginVertical: HEIGHT * 0.015 }} />}
                    data={products}
                    renderItem={({ item, index }) => <View>
                        <Pressable onPress={() => navigation.navigate("CarouselScreen")} style={[commonStyles.flexDirection(lang), { justifyContent: 'space-between', width: WIDTH }]}>
                            <Image source={hotdrink1} />
                            <View>
                                <Text style={[commonStyles.textAlign(lang), { fontSize: 18, color: colors.lightblack }]}>
                                    {context.t(`${item.title}`)}
                                </Text>
                                <Text style={[commonStyles.textAlign(lang), { fontSize: 14, width: WIDTH * 0.592, marginVertical: HEIGHT * 0.007, color: colors.lightblack }]}>
                                    {context.t(`${item.desc}`)}
                                </Text>
                            </View>
                            <Text style={{ color: colors.darkbrown, fontSize: 24 }}>28</Text>
                        </Pressable>
                    </View>}
                />
            case 'sandwich':
                return <FlatList
                    ItemSeparatorComponent={<View style={{ marginVertical: HEIGHT * 0.015 }} />}
                    data={products}
                    renderItem={({ item, index }) => <View>
                        <View style={[commonStyles.flexDirection(lang), { justifyContent: 'space-between', width: WIDTH }]}>
                            <Image source={hotdrink1} />
                            <View>
                                <Text style={[commonStyles.textAlign(lang), { fontSize: 18, color: colors.lightblack }]}>
                                    {context.t(`${item.title}`)}
                                </Text>
                                <Text style={[commonStyles.textAlign(lang), { fontSize: 14, width: WIDTH * 0.592, marginVertical: HEIGHT * 0.007, color: colors.lightblack }]}>
                                    {context.t(`${item.desc}`)}
                                </Text>
                            </View>
                            <Text style={{ color: colors.darkbrown, fontSize: 24 }}>28</Text>
                        </View>
                    </View>}
                />
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={homemainimage} style={{ height: HEIGHT * 0.2807 }}>
                <View style={[commonStyles.flexDirection(lang), { marginTop: HEIGHT * 0.07, marginHorizontal: WIDTH * 0.05, justifyContent: 'space-between' }]}>
                    <Pressable
                        onPress={() => navigation.toggleDrawer()}
                        style={{ height: HEIGHT * 0.022, justifyContent: 'center' }}>
                        <Image source={drawericon} />
                    </Pressable>

                    <View style={{/*  flexDirection: 'row', justifyContent: 'space-between', width: WIDTH * 0.8, */ }}>
                        {/* <Image source={leftarrow} style={{ marginHorizontal: WIDTH * 0.08 }} /> */}
                        <Image source={carticon} />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: HEIGHT * 0.18, }}>
                    <Image source={waltersyellowtext} style={{ tintColor: colors.white }} />
                </View>
            </ImageBackground >
            <View>
                <View style=
                    {{ paddingVertical: HEIGHT * 0.02, width: WIDTH }}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ width: WIDTH }}>
                        <View>
                            <FlatList
                                // pagingEnabled
                                ref={flatRef}
                                scrollEnabled={false}
                                showsHorizontalScrollIndicator={false}
                                horizontal
                                data={drinks}
                                ItemSeparatorComponent={<View style={{ width: WIDTH * 0.05, }} />}
                                renderItem={({ item, index }) =>

                                    <Pressable
                                        onPress={() => handleTap(item, index)}
                                        style={[commonStyles.flexDirection(lang), { alignItems: 'center', justifyContent: 'center', width: WIDTH * 0.3891, }]}>
                                        <Image source={item.logo} style={{}} />
                                        <Text style={{ marginHorizontal: WIDTH * 0.03, color: colors.lightblack }}>{context.t(`${item.value}`)}</Text>
                                    </Pressable>
                                } />
                            <View style={{ height: HEIGHT * 0.005, backgroundColor: colors.lightgray, marginTop: HEIGHT * 0.01 }}>
                                <Animated.View style={[animatedStyle, { width: WIDTH * 0.3891, height: HEIGHT * 0.005, backgroundColor: colors.darkbrown, borderRadius: HEIGHT * 0.005 }]}></Animated.View>
                            </View>
                        </View>

                    </ScrollView>

                </View>
            </View>

            <View style={{ marginHorizontal: WIDTH * 0.05 }}>
                <View style={[commonStyles.flexDirection(lang), { height: HEIGHT * 0.0409, width: '100%', marginVertical: HEIGHT * 0.01, justifyContent: 'space-between', alignItems: 'center' }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 12, color: colors.darkbrown }}>36</Text>
                        <Text style={{ color: colors.lightblack, fontSize: 12 }}> ITEMS</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 12, color: colors.lightblack }}>PRICE</Text>
                        <Text style={{ color: colors.darkbrown, fontSize: 12 }}> (QAR)</Text>
                    </View>
                </View>


            </View>
            <View style={{}}>
                <FlatList
                    ref={listRef}
                    showsHorizontalScrollIndicator={false} pagingEnabled
                    scrollEnabled={false}
                    style={{ width: WIDTH }}
                    data={cases}
                    horizontal
                    renderItem={({ item }) => <View>{handleClick(item.case)}</View>} />

            </View>
        </View >
    )
}
HomeScreen.contextTypes = {
    t: propTypes.func
}

export default HomeScreen