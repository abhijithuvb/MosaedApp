import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import MainContainer from '../../components/user/MainContainer'
import { carticon, drawericon, leftarrow, uparrow } from '../../assets/images'
import { commonStyles } from '../../constants/styles'
import { HEIGHT, WIDTH } from '../../constants/dimensions'
import { useSelector } from 'react-redux'
import { colors } from '../../constants/colors'
import { money } from '../../constants/Arrays'
import { transform } from '@babel/core'

const PaymentScreen = () => {
    const description = 'Select how and when you would like to receive your coffee'
    const { lang } = useSelector((state) => state.i18nState)
    return (
        <View style={{ flex: 1 }}>
            <MainContainer leftlogo={drawericon}
                secondlogo={leftarrow} title={'Payment'} rightlogo={carticon} description={description}>
                <View>
                    <View style={[commonStyles.alignItems(lang), { paddingHorizontal: WIDTH * 0.05, paddingVertical: WIDTH * 0.02, borderBottomWidth: 1, borderBottomColor: colors.lightgray }]}>
                        <Text style={[commonStyles.textAlign(lang), { color: colors.darkbrown, marginTop: HEIGHT * 0.02, fontSize: 16 }]}>Order Review</Text>
                        <View style={[commonStyles.flexDirection(lang), { marginVertical: HEIGHT * 0.01 }]}>
                            <Text style={[commonStyles.textAlign(lang), { color: colors.brown, fontSize: 14, marginLeft: -3 }]}> In your basket</Text>
                            <Text style={[commonStyles.textAlign(lang), { marginHorizontal: WIDTH * 0.02, fontSize: 14, color: colors.lightblack }]}>(2 Items)</Text>
                        </View>
                    </View>
                    <View style={[commonStyles.flexDirection(lang), { paddingHorizontal: WIDTH * 0.05, paddingVertical: WIDTH * 0.02, justifyContent: 'space-between', alignItems: 'flex-end', borderBottomWidth: 1, borderBottomColor: colors.lightgray }]}>
                        <View>
                            <Text style={[commonStyles.textAlign(lang), { color: colors.lightblack, fontSize: 13 }]}>Spanish latte</Text>
                            <Text style={[commonStyles.textAlign(lang), { color: colors.brown, fontSize: 14, marginTop: HEIGHT * 0.01 }]}>Medium - Vanila * 1</Text>
                        </View>
                        <View style={[commonStyles.flexDirection(lang), {}]}>
                            <Text style={[commonStyles.textAlign(lang), { color: colors.darkbrown, fontSize: 15 }]}>28</Text>
                            <Text style={[commonStyles.textAlign(lang), { marginHorizontal: WIDTH * 0.01, color: colors.lightbrown, fontSize: 15 }]}>QAR</Text>
                        </View>
                    </View>
                    <View style={[commonStyles.flexDirection(lang), { paddingHorizontal: WIDTH * 0.05, paddingVertical: WIDTH * 0.02, justifyContent: 'space-between', alignItems: 'flex-end', borderBottomWidth: 1, borderBottomColor: colors.lightgray }]}>
                        <View>
                            <Text style={[commonStyles.textAlign(lang), { color: colors.lightblack, fontSize: 13 }]}>Americano</Text>
                            <Text style={[commonStyles.textAlign(lang), { color: colors.brown, fontSize: 14, marginTop: HEIGHT * 0.01 }]}>Medium - Vanila * 1</Text>
                        </View>
                        <View style={[commonStyles.flexDirection(lang), {}]}>
                            <Text style={[commonStyles.textAlign(lang), { color: colors.darkbrown, fontSize: 15 }]}>28</Text>
                            <Text style={[commonStyles.textAlign(lang), { marginHorizontal: WIDTH * 0.01, color: colors.lightbrown, fontSize: 15 }]}>QAR</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: colors.lightgray_2, height: HEIGHT * 0.2 }}>

                    </View>
                    <View style={[commonStyles.alignItems(lang == 'en' ? 'ar' : 'en'), { marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.02, }]}>
                        <View style={[commonStyles.flexDirection(lang), { alignItems: 'center' }]}>
                            <Text style={[, { fontSize: 18, color: colors.lightbrown }]}>Total Payable </Text>
                            <Text style={[, { fontSize: 30, color: colors.darkbrown }]}>56 </Text>
                            <Text style={[, { fontSize: 18, color: colors.darkbrown }]}>QAR </Text>
                        </View>
                    </View>
                    <View style={[commonStyles.alignItems(lang), { paddingHorizontal: WIDTH * 0.05, paddingBottom: HEIGHT * 0.02, borderBottomWidth: 1, borderBottomColor: colors.lightgray }]}>
                        <Text style={[commonStyles.textAlign(lang), { color: colors.darkbrown, marginTop: HEIGHT * 0.02, fontSize: 16 }]}>Choose the type of payment</Text>
                    </View>
                    <View style={[]}>
                        <FlatList data={money} renderItem={({ item }) =>
                            <View style={[commonStyles.flexDirection(lang), {
                                justifyContent: 'space-between',
                                alignItems: 'center', borderBottomWidth: 1,
                                borderBottomColor: colors.lightgray, paddingVertical: HEIGHT * 0.008, paddingHorizontal: WIDTH * 0.05
                            }]}>
                                <View style={[commonStyles.flexDirection(lang), {}]}>
                                    <View style={{ width: WIDTH * 0.1, }}>
                                        <Image source={item.logo} style={{}} />
                                    </View>
                                    <View style={[commonStyles.flexDirection(lang), { marginHorizontal: WIDTH * 0.05, }]}>
                                        <Text style={[commonStyles.textAlign(lang), { fontSize: 14, color: colors.lightblack }]}>{item.title} </Text>
                                        <Text style={[commonStyles.textAlign(lang), { fontSize: 14, color: colors.brown }]}>{item.sub}</Text>
                                    </View>
                                </View>

                                <Image style={{ transform: [{ rotate: lang == 'en' ? '270deg' : '90deg' }], tintColor: colors.gray_2 }} source={uparrow} />


                            </View>} />
                    </View>
                </View>
            </MainContainer >
        </View >
    )
}

export default PaymentScreen