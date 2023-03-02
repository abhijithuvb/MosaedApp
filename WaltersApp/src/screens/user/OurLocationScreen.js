import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import MainContainer from '../../components/user/MainContainer'
import { carticon, drawericon, leftarrow, mapimage, mapimagewithindicator, toparrow } from '../../assets/images'
import { colors } from '../../constants/colors'
import { HEIGHT, WIDTH } from '../../constants/dimensions'
import { commonStyles } from '../../constants/styles'
import { useSelector } from 'react-redux'

const OurLocationScreen = () => {
    const { lang } = useSelector((store) => store.i18nState)
    return (
        <MainContainer leftlogo={drawericon}
            secondlogo={leftarrow} title={'OurLocation'}>
            <View style={{ flex: 1, backgroundColor: 'white', }}><ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ borderBottomWidth: 1, borderBottomColor: colors.gray }}>
                    <View style={[commonStyles.flexDirection(lang), { marginHorizontal: WIDTH * 0.05, height: HEIGHT * 0.07, justifyContent: 'space-between', alignItems: 'center' }]}>
                        <Text style={[commonStyles.textAlign(lang), { fontSize: 17, color: colors.lightblack }]}>Walter’s coffee Lusail</Text>
                        <Image source={toparrow} />

                    </View>

                </View>

                <View style={[commonStyles.alignItems(lang), { marginHorizontal: WIDTH * 0.05, }]}>
                    <View style={{ marginVertical: HEIGHT * 0.007 }}>
                        <Text style={[commonStyles.textAlign(lang), { fontSize: 17, color: colors.darkbrown }]}>Address</Text>
                        <Text style={[commonStyles.textAlign(lang), { fontSize: 17, color: colors.lightbrown }]}>Walter’s coffee Lusail,Doha</Text>
                    </View>
                    <View style={{ marginVertical: HEIGHT * 0.007 }}>
                        <Text style={[commonStyles.textAlign(lang), { fontSize: 17, color: colors.darkbrown }]}>Hours</Text>
                        <View style={[commonStyles.flexDirection(lang), {}]}>
                            <Text style={[commonStyles.textAlign(lang), { fontSize: 17, color: colors.lightbrown }]}>Sunday to Friday</Text>
                            <Text style={[commonStyles.textAlign(lang), { fontSize: 17, color: colors.darkbrown, marginHorizontal: WIDTH * 0.04 }]}>6AM-11PM</Text>
                        </View>

                    </View>
                    <View style={{ marginVertical: HEIGHT * 0.007 }}>
                        <Text style={[commonStyles.textAlign(lang), { fontSize: 17, color: colors.darkbrown }]}>Mobile</Text>
                        <Text style={[commonStyles.textAlign(lang), { fontSize: 17, color: colors.lightbrown }]}>+974 666 336 26</Text>
                    </View>
                </View>
                <View style={{ marginTop: HEIGHT * 0.02 }}>
                    <Image source={mapimagewithindicator} style={{ width: WIDTH }} />
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: colors.gray, }}>
                    <View style={[commonStyles.flexDirection(lang), { marginHorizontal: WIDTH * 0.05, height: HEIGHT * 0.07, justifyContent: 'space-between', alignItems: 'center' }]}>
                        <Text style={[commonStyles.textAlign(lang), { fontSize: 17, color: colors.lightblack }]}>Walter’s coffee Lusail</Text>
                        <Image source={toparrow} />

                    </View>

                </View>
                <View style={[commonStyles.alignItems(lang), { marginHorizontal: WIDTH * 0.05, }]}>
                    <View style={{ marginVertical: HEIGHT * 0.007 }}>
                        <Text style={[commonStyles.textAlign(lang), { fontSize: 17, color: colors.darkbrown }]}>Address</Text>
                        <Text style={[commonStyles.textAlign(lang), { fontSize: 17, color: colors.lightbrown }]}>Walter’s coffee Lusail,Doha</Text>
                    </View>
                    <View style={{ marginVertical: HEIGHT * 0.007 }}>
                        <Text style={[commonStyles.textAlign(lang), { fontSize: 17, color: colors.darkbrown }]}>Hours</Text>
                        <View style={[commonStyles.flexDirection(lang), {}]}>
                            <Text style={[commonStyles.textAlign(lang), { fontSize: 17, color: colors.lightbrown }]}>Sunday to Friday</Text>
                            <Text style={[commonStyles.textAlign(lang), { fontSize: 17, color: colors.darkbrown, marginHorizontal: WIDTH * 0.04 }]}>6AM-11PM</Text>
                        </View>

                    </View>
                    <View style={{ marginVertical: HEIGHT * 0.007 }}>
                        <Text style={[commonStyles.textAlign(lang), { fontSize: 17, color: colors.darkbrown }]}>Mobile</Text>
                        <Text style={[commonStyles.textAlign(lang), { fontSize: 17, color: colors.lightbrown }]}>+974 666 336 26</Text>
                    </View>
                </View>
                <View style={{ marginVertical: HEIGHT * 0.02 }}>
                    <Image source={mapimage} style={{ width: WIDTH }} />
                </View>
            </ScrollView>
            </View>
        </MainContainer>

    )
}

export default OurLocationScreen